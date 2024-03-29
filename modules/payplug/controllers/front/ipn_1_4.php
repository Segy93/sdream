<?php
/**
 * 2013 - 2017 PayPlug SAS
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 *  @author    PayPlug SAS
 *  @copyright 2013 - 2017 PayPlug SAS
 *  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 *  International Registered Trademark & Property of PayPlug SAS
 */

//Inclusions
require_once(dirname(__FILE__).'/../../../../config/config.inc.php');
require_once(_PS_MODULE_DIR_.'../init.php');
require_once(_PS_MODULE_DIR_.'payplug/payplug.php');
require_once(_PS_MODULE_DIR_.'payplug/classes/PayplugBackward.php');
require_once(_PS_MODULE_DIR_.'payplug/classes/PayplugLock.php');
require_once(_PS_MODULE_DIR_.'payplug/lib/init.php');

//Settings
$debug = PayplugBackward::getConfiguration('PAYPLUG_DEBUG_MODE');

if ($debug) {
    require_once(dirname(__FILE__).'/../../classes/MyLogPHP.class.php');
    $log = new MyLogPHP(_PS_MODULE_DIR_.'payplug/log/ipn-'.date("Y-m-d").'.csv');
    $log->info('Receiving IPN...');
}
addLog($debug, $log, 'ipn_1_4', 'debug');
$payplug = new Payplug();

//Cancelling
/*
if (!$payplug->active) {
    echo addLog($debug, $log, 'Payplug module is not enabled.', 'error');
    header($_SERVER['SERVER_PROTOCOL'].' 500 Payplug module is not enabled.', true, 500);
    die;
}
*/

//Getting headers
if (!function_exists('getallheaders')) {
    addLog($debug, $log, 'Definition of method getallheaders', 'debug');
    function getallheaders()
    {
        $headers = array();
        foreach ($_SERVER as $name => $value) {
            if (PayplugBackward::substr($name, 0, 5) == 'HTTP_') {
                $name = str_replace(
                    ' ',
                    '-',
                    ucwords(PayplugBackward::strtolower(str_replace(
                        '_',
                        ' ',
                        PayplugBackward::substr($name, 5, false)
                    )))
                );
                $headers[$name] = $value;
            } elseif ($name == 'CONTENT_TYPE') {
                $headers['Content-Type'] = $value;
            } elseif ($name == 'CONTENT_LENGTH') {
                $headers['Content-Length'] = $value;
            } else {
                $headers[$name] = $value;
            }
        }
        return $headers;
    }
}

$headers = getallheaders();
if (isset($headers) && !empty($headers) && sizeof($headers)) {
    addLog($debug, $log, 'Reading headers.', 'info');
    foreach ($headers as $key => $value) {
        addLog($debug, $log, $key.' : '.$value, 'debug');
    }
}

$body = PayplugBackward::fileGetContents('php://input');


//Notification identification
if (Tools::isSubmit('debug')) {
    if (Tools::getValue('debug') == 1) {
        addLog($debug, $log, 'This is a debug call.', 'info');
        $cid = (int)PayplugBackward::getConfiguration('PAYPLUG_COMPANY_ID');
        if (Tools::getValue('cid') == $cid) {
            $modules = Module::getModulesOnDisk();
            $mod_tab = array();
            foreach ($modules as $mod) {
                if ($mod->active == 1) {
                    $mod_tab[] = $mod->name;
                }
            }
            $response = array(
                'is_module_active' => (int)$payplug->active,
                'sandbox_mode' => (int)PayplugBackward::getConfiguration('PAYPLUG_SANDBOX_MODE'),
                'embedded_mode' => (int)PayplugBackward::getConfiguration('PAYPLUG_EMBEDDED_MODE'),
                'one_click' => (int)PayplugBackward::getConfiguration('PAYPLUG_ONE_CLICK'),
                'cid' => PayplugBackward::getConfiguration('PAYPLUG_COMPANY_ID'),
                'module_list' => $mod_tab,
            );
            die(PayplugBackward::jsonEncode($response));
        } else {
            die(PayplugBackward::jsonEncode(addLog($debug, $log, 'Access not granted.', 'error')));
        }
    } else {
        die(PayplugBackward::jsonEncode(addLog($debug, $log, 'Access not granted.', 'error')));
    }
} else {
    try {
        $resource = \Payplug\Notification::treat($body);

        if ($resource instanceof \Payplug\Resource\Payment) {
            addLog($debug, $log, 'This is a payment call.', 'info');
            addLog($debug, $log, 'Payment ID : '.$resource->id, 'info');
            if (!$resource->is_paid) {
                die(addLog($debug, $log, 'Transaction was not paid.', 'info'));
            } else {
                addLog($debug, $log, 'Gathering payment details...', 'info');
                $payment = $resource;

                //Payment treatment
                $cart = new Cart((int)$payment->metadata['ID Cart']);
                if (!Validate::isLoadedObject($cart)) {
                    addLog($debug, $log, 'Cart cannot be loaded.', 'error');
                    echo 'Error : missing or wrong parameters.';
                    header($_SERVER['SERVER_PROTOCOL'].' 400 Missing or wrong parameters for cart', true, 400);
                    die;
                } else {
                    $address = new Address((int)$cart->id_address_invoice);
                    if (!Validate::isLoadedObject($address)) {
                        echo addLog($debug, $log, 'Invoice address cannot be loaded.', 'error');
                        header($_SERVER['SERVER_PROTOCOL'].' 500 Invoice address cannot be loaded.', true, 500);
                        die;
                    } else {
                        addLog($debug, $log, 'Lock checking start.', 'debug');
                        PayplugLock::check($cart->id);
                        addLog($debug, $log, 'Lock checking end.', 'debug');
                        
                        $cart_lock = PayplugLock::createLockG2($cart->id, 'ipn');
                        if (!$cart_lock) {
                            addLog($debug, $log, 'Lock cannot be created.', 'error');
                        } else {
                            addLog($debug, $log, 'Lock created.', 'debug');
                            switch ($cart_lock) {
                                case 'ipn':
                                case 'validation':
                                    $order_id = false;
                                    break;
                                default:
                                    $order_id = (int)$cart_lock;
                            }
                        }

                        $state_addons = ($payment->is_live ? '' : '_TEST');
                        $pending_state = (int)PayplugBackward::getConfiguration('PAYPLUG_ORDER_STATE_PENDING'.$state_addons);
                        $paid_state = (int)PayplugBackward::getConfiguration('PAYPLUG_ORDER_STATE_PAID'.$state_addons);
                        $error_state = (int)PayplugBackward::getConfiguration('PAYPLUG_ORDER_STATE_ERROR'.$state_addons);

                        if ($order_id) {
                            addLog($debug, $log, 'Order already exists.', 'info');

                            $order = new Order((int)$order_id);
                            if (!Validate::isLoadedObject($order)) {
                                echo addLog($debug, $log, 'Order cannot be loaded.', 'error');
                                $cart_unlock = PayplugLock::deleteLockG2($cart->id);
                                if (!$cart_unlock) {
                                    addLog($debug, $log, 'Lock cannot be deleted.', 'error');
                                } else {
                                    addLog($debug, $log, 'Lock deleted.', 'debug');
                                }
                                header($_SERVER['SERVER_PROTOCOL'].' 500 Order cannot be loaded.', true, 500);
                                die;
                            } else {
                                $current_state = (int)$order->getCurrentState();

                                if ($current_state == $pending_state) {
                                    addLog($debug, $log, 'Order is currently pending.', 'info');
                                    if (PayPlug::checkAmountPaidIsCorrect($payment->amount / 100, $order)) {
                                        addLog($debug, $log, 'Order new status will be \'paid\'.', 'info');
                                        $new_order_state = $paid_state;
                                    } else {
                                        $new_order_state = $error_state;
                                        addLog($debug, $log, 'Order new status will be \'error\'.', 'error');
                                        $message = new Message();
                                        $message->message = $payplug->l('The amount collected by PayPlug is not the same')
                                            .$payplug->l(' as the total value of the order');
                                        $message->id_order = $order->id;
                                        $message->id_cart = $order->id_cart;
                                        $message->private = true;
                                        $message->save();
                                    }

                                    $order_history = new OrderHistory();
                                    $order_history->id_order = (int)$order_id;
                                    $order_history->changeIdOrderState((int)$new_order_state, $order_id);
                                    $order_history->save();

                                    if (count($order->getOrderPayments()) == 0) {
                                        $order->addOrderPayment($payment->amount / 100);
                                    }
                                    $order->current_state = $order_history->id_order_state;
                                    $order->update();
                                    echo addLog($debug, $log, 'Order updated.', 'info');
                                    $cart_unlock = PayplugLock::deleteLockG2($cart->id);
                                    if (!$cart_unlock) {
                                        addLog($debug, $log, 'Lock cannot be deleted.', 'error');
                                    } else {
                                        addLog($debug, $log, 'Lock deleted.', 'debug');
                                    }
                                    header($_SERVER['SERVER_PROTOCOL'].' 200 Order updated.', true, 200);
                                    die;
                                } elseif ($current_state == $paid_state) {
                                    echo addLog($debug, $log, 'Order is already paid.', 'info');
                                    $cart_unlock = PayplugLock::deleteLockG2($cart->id);
                                    if (!$cart_unlock) {
                                        addLog($debug, $log, 'Lock cannot be deleted.', 'error');
                                    } else {
                                        addLog($debug, $log, 'Lock deleted.', 'debug');
                                    }
                                    header($_SERVER['SERVER_PROTOCOL'].' 200 Order is already paid.', true, 200);
                                    die;
                                } else {
                                    echo addLog($debug, $log, 'Current order state is in conflict with IPN.', 'error');
                                    $cart_unlock = PayplugLock::deleteLockG2($cart->id);
                                    if (!$cart_unlock) {
                                        addLog($debug, $log, 'Lock cannot be deleted.', 'error');
                                    } else {
                                        addLog($debug, $log, 'Lock deleted.', 'debug');
                                    }
                                    header($_SERVER['SERVER_PROTOCOL'].' 500 Current order state is in conflict with IPN.', true, 500);
                                    die;
                                }
                            }
                        } else {
                            addLog($debug, $log, 'Order does\'nt exists yet.', 'info');

                            $order_state = $paid_state;
                            $amount = (float)$payment->amount / 100;
                            $extra_vars = array(
                                'transaction_id' => $payment->id
                            );
                            $currency = (int)$cart->id_currency;
                            $customer = new Customer((int)$cart->id_customer);
                            if (!Validate::isLoadedObject($customer)) {
                                echo addLog($debug, $log, 'Customer cannot be loaded.', 'error');
                                header($_SERVER['SERVER_PROTOCOL'].' 500 Customer cannot be loaded.', true, 500);
                                $cart_unlock = PayplugLock::deleteLockG2($cart->id);
                                if (!$cart_unlock) {
                                    addLog($debug, $log, 'Lock cannot be deleted.', 'error');
                                } else {
                                    addLog($debug, $log, 'Lock deleted.', 'debug');
                                }
                                die;
                            } else {
                                $is_order_validated = $payplug->validateOrder(
                                    $cart->id,
                                    $order_state,
                                    $amount,
                                    $payplug->displayName,
                                    null,
                                    $extra_vars,
                                    $currency,
                                    false,
                                    $customer->secure_key
                                );

                                if (!$is_order_validated) {
                                    echo addLog($debug, $log, 'Order cannot be validated.', 'error');
                                    header($_SERVER['SERVER_PROTOCOL'].' 500 Order cannot be validated.', true, 500);
                                    $cart_unlock = PayplugLock::deleteLockG2($cart->id);
                                    if (!$cart_unlock) {
                                        addLog($debug, $log, 'Lock cannot be deleted.', 'error');
                                    } else {
                                        addLog($debug, $log, 'Lock deleted.', 'debug');
                                    }
                                    die;
                                } else {
                                    echo addLog($debug, $log, 'Order validated.', 'info');
                                    $order_id = Order::getOrderByCartId($cart->id);
                                    $order = new Order($order_id);

                                    if (!Validate::isLoadedObject($order)) {
                                        echo addLog($debug, $log, 'Order cannot be loaded.', 'error');
                                        header($_SERVER['SERVER_PROTOCOL'].' 500 Order cannot be loaded.', true, 500);
                                        $cart_unlock = PayplugLock::deleteLockG2($cart->id);
                                        if (!$cart_unlock) {
                                            addLog($debug, $log, 'Lock cannot be deleted.', 'error');
                                        } else {
                                            addLog($debug, $log, 'Lock deleted.', 'debug');
                                        }
                                        die;
                                    } else {
                                        if (version_compare(_PS_VERSION_, '1.5', '<')) {
                                            if (!$payplug->addPayplugOrderPayment($order_id, $payment->id)) {
                                                echo addLog($debug, $log, 'IPN Failed: unable to create order payment.', 'error');
                                                header($_SERVER['SERVER_PROTOCOL'].' 500 IPN Failed: unable to create order payment.', true, 500);
                                                $cart_unlock = PayplugLock::deleteLockG2($cart->id);
                                                if (!$cart_unlock) {
                                                    addLog($debug, $log, 'Lock cannot be deleted.', 'error');
                                                } else {
                                                    addLog($debug, $log, 'Lock deleted.', 'debug');
                                                }
                                                die;
                                            } else {
                                                addLog($debug, $log, 'Order payment created.', 'info');
                                            }
                                        } elseif (version_compare(_PS_VERSION_, '1.5', '>') && version_compare(_PS_VERSION_, '1.5.2', '<')) {
                                            $order_payment = end($order->getOrderPayments());
                                            $order_payment->transaction_id = $extra_vars['transaction_id'];
                                            $order_payment->update();
                                            addLog($debug, $log, 'Transaction ID added.', 'info');
                                        }
                                    }
                                }
                            }

                            $cart_unlock = PayplugLock::deleteLockG2($cart->id);
                            if (!$cart_unlock) {
                                addLog($debug, $log, 'Lock cannot be deleted.', 'error');
                            } else {
                                addLog($debug, $log, 'Lock deleted.', 'debug');
                            }

                            addLog($debug, $log, 'Checking number of order passed with this id_cart...', 'info');
                            $req_nb_orders = '
                                SELECT o.* 
                                FROM '._DB_PREFIX_.'orders o 
                                WHERE o.id_cart = '.$cart->id;
                            $res_nb_orders = Db::getInstance()->executeS($req_nb_orders);
                            if (!$res_nb_orders) {
                                addLog($debug, $log, 'No order can be found using id_cart '.(int)$cart->id, 'error');
                                header($_SERVER['SERVER_PROTOCOL'].' 500 No order can be found using id_cart '.(int)$cart->id, true, 500);
                                die;
                            } elseif (count($res_nb_orders) > 1) {
                                addLog($debug, $log, 'There is more than one order using id_cart '.(int)$cart->id, 'error');
                                foreach ($res_nb_orders as $o) {
                                    addLog($debug, $log, 'Order ID : '.$o['id_order'], 'debug');
                                }
                                header($_SERVER['SERVER_PROTOCOL'].' 500 There is more than one order using id_cart '.(int)$cart->id, true, 500);
                                die;
                            } else {
                                addLog($debug, $log, 'Everything looks good.', 'info');
                                $id_order = (int)$res_nb_orders[0]['id_order'];
                            }

                            addLog($debug, $log, 'Checking number of transaction validated for this order...', 'info');
                            if (version_compare(_PS_VERSION_, '1.5', '<')) {
                                $req_order_payment = '
                                    SELECT pop.* 
                                    FROM '._DB_PREFIX_.'payplug_order_payment pop  
                                    WHERE pop.id_order = '.(int)$id_order;
                                $payments = Db::getInstance()->executeS($req_order_payment);
                            } else {
                                $payments = $order->getOrderPaymentCollection();
                            }
                            if (!$payments) {
                                addLog($debug, $log, 'No transaction can be found using id_order '.(int)$id_order, 'error');
                                header($_SERVER['SERVER_PROTOCOL'].' 500 No transaction can be found using id_order '.(int)$id_order, true, 500);
                                die;
                            } elseif (count($payments) > 1) {
                                addLog($debug, $log, 'There is more than one transaction using id_order '.(int)$id_order, 'error');
                                header($_SERVER['SERVER_PROTOCOL'].' 500 There is more than one transaction using id_order '.(int)$id_order, true, 500);
                                die;
                            } else {
                                addLog($debug, $log, 'Everything looks good.', 'info');
                            }

                            echo addLog($debug, $log, 'Order created.', 'info');
                            header($_SERVER['SERVER_PROTOCOL'].' 200 Order created.', true, 200);
                            die;
                        }
                    }
                }
            }
        } elseif ($resource instanceof \Payplug\Resource\Refund) {
            addLog($debug, $log, 'This is a refund call.', 'info');
            addLog($debug, $log, 'Refund ID : '.$resource->id, 'info');
            $refund = $resource;

            //Refund treatment
            $payment = $payplug->retrievePayment($refund->payment_id);
            $is_totaly_refunded = $payment->is_refunded;
            if ($is_totaly_refunded) {
                addLog($debug, $log, 'Payment is totaly refunded', 'info');

                $cart_id = (int)$payment->metadata['ID Cart'];
                $order_id = (int)Order::getOrderByCartId($cart_id);
                $order = new Order($order_id);
                addLog($debug, $log, 'Order ID : '.$order_id, 'info');
                if (!Validate::isLoadedObject($order)) {
                    echo addLog($debug, $log, 'Order cannot be loaded.', 'error');
                    header($_SERVER['SERVER_PROTOCOL'].' 500 Order cannot be loaded.', true, 500);
                    die;
                } else {
                    $state_addons = ($payment->is_live ? '' : '_TEST');
                    $new_order_state = (int)PayplugBackward::getConfiguration('PAYPLUG_ORDER_STATE_REFUND'.$state_addons);
                    $current_state = $order->getCurrentState();

                    if ($current_state != $new_order_state) {
                        addLog($debug, $log, 'Changing status to \'refunded\'', 'info');
                        $order_history = new OrderHistory();
                        $order_history->id_order = $order_id;
                        $order_history->changeIdOrderState((int)$new_order_state, $order_id);
                        $order_history->save();
                    } else {
                        addLog($debug, $log, 'Order status is already \'refunded\'', 'info');
                    }
                }
            } else {
                addLog($debug, $log, 'Payment is partialy refunded', 'info');
            }
        }
    } catch (\Payplug\Exception\PayplugException $exception) {
        $response = array(
            'exception' => $exception,
        );
        die(PayplugBackward::jsonEncode($response));
    }
}

function addLog($debug, $log, $str, $level)
{
    $debugBacktrace = debug_backtrace();
    $line_n = $debugBacktrace[0]['line'];
    if ($debug) {
        $log->$level($str, '--', $line_n);
    }
    return($str);
}
