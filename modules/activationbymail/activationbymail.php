<?php

if (!defined('_PS_VERSION_'))
{
    exit;
}

/**
 * activationbymail
 * @category administration
 *
 * @author Dominik Cebula dominikcebula@gmail.com
 * @copyright Dominik Cebula dominikcebula@gmail.com
 * @license GNU_GPL_v2
 * @version 1.2
 */
class activationbymail extends Module
{

    public function __construct()
    {
        $this->name = 'activationbymail';
        $this->version = '1.2';
        $this->tab = 'administration';
        $this->author = 'Dominik Cebula';
        $this->need_instance = 0;

        parent::__construct();

        $this->displayName = $this->l('Account activation by e-mail');
        $this->description = $this->l('This module allows your shop to validate e-mails by sending activation links');
    }

    public function install()
    {
        if (parent::install() &&
            $this->registerHook('createAccount') &&
            Db::getInstance()->Execute('alter table ' . _DB_PREFIX_ . 'customer add activation_link char(32)')
        )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public function uninstall()
    {
        if (parent::uninstall() &&
            $this->unregisterHook('createAccount') &&
            Db::getInstance()->Execute('alter table ' . _DB_PREFIX_ . 'customer drop activation_link')
        )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public function hookcreateAccount($req)
    {
		global $cookie;
		$customer = new Customer($req['newCustomer']->id);
        $customer->getFields();
		$id_lang = $cookie->id_lang;
		
		if (Tools::getValue('submitGuestAccount'))
			$_GET['display_guest_checkout'] = 1;		
		
		if (Tools::getValue('display_guest_checkout'))
		{
			if (Configuration::get('PS_RESTRICT_DELIVERED_COUNTRIES'))
				$countries = Carrier::getDeliveredCountries($this->context->language->id, true, true);
			else
				$countries = Country::getCountries($this->context->language->id, true);
			
			if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE']))
			{
				// get all countries as language (xy) or language-country (wz-XY)
				$array = array();
				preg_match("#(?<=-)\w\w|\w\w(?!-)#",$_SERVER['HTTP_ACCEPT_LANGUAGE'],$array);
				if (!Validate::isLanguageIsoCode($array[0]) || !($sl_country = Country::getByIso($array[0])))
					$sl_country = (int)Configuration::get('PS_COUNTRY_DEFAULT');
			}
			else
				$sl_country = (int)Tools::getValue('id_country', Configuration::get('PS_COUNTRY_DEFAULT'));
			
			$this->context->smarty->assign(array(
					'inOrderProcess' => true,
					'PS_GUEST_CHECKOUT_ENABLED' => Configuration::get('PS_GUEST_CHECKOUT_ENABLED'),
					'PS_REGISTRATION_PROCESS_TYPE' => Configuration::get('PS_REGISTRATION_PROCESS_TYPE'),
					'sl_country' => (int)$sl_country,
					'countries' => $countries
				));
		}
		else {
			
			$cookie->logout();
			$cookie->id_lang = $id_lang;
			$cookie->write();
			$activation_link = md5(uniqid(rand(), true));
			$read = "SELECT value FROM ps_configuration WHERE name = 'PS_REWRITING_SETTINGS'";
$connect = @mysqli_connect(_DB_SERVER_, _DB_USER_, _DB_PASSWD_, _DB_NAME_);
if ($connect) {
$res1 = mysqli_query($connect, $read);
while ($row1 = mysqli_fetch_assoc($res1)){
         $config = $row1;
     }
} else {
echo('Cannot connect to database...'); exit;
}
mysqli_close($connect);
    
if ($config['value'] == '0'){
$link = $this->context->link->getModuleLink($this->name, 'activation') . '&link=' . $activation_link;
} else {
$link = $this->context->link->getModuleLink($this->name, 'activation') . '?link=' . $activation_link;
}

			$sql = sprintf("update %scustomer set active=0, activation_link='%s' where id_customer=%d",
						   _DB_PREFIX_, $activation_link, $req['newCustomer']->id);
			Db::getInstance()->Execute($sql);

			Mail::Send($id_lang,
					   'account_activation',
					   $this->l('Account activation'),
					   array('{firstname}' => $customer->firstname,
							 '{lastname}' => $customer->lastname,
							 '{email}' => $customer->email,
							 '{passwd}' => Tools::getValue('passwd'),
							 '{link}' => $link),
					   $customer->email,
					   NULL,
					   NULL,
					   NULL,
					   NULL,
					   NULL,
					   'modules/activationbymail/mails/');
			Tools::redirect($this->context->link->getModuleLink($this->name, 'info'));
		}
    }
 private function isMD5($str)
    {
        for ($i = 0; $i < 32; $i++)
        {
            if (!(($str[$i] >= 'a' && $str[$i] <= 'z') || ($str[$i] >= '0' && $str[$i] <= '9')))
            {
                return false;
            }
        }
        return true;
    }

    public function execActivation()
    {
        $link = Tools::getValue('link');
        if ($this->isMD5($link))
        {
            return $this->activateAccountForValidLink($link);
        }
        else
        {
            return false;
        }
    }
    private function activateAccountForValidLink($link)
    {
        $db = Db::getInstance();
        if (!$db->Execute('update ' . _DB_PREFIX_ . 'customer set active=1 where activation_link="' . $link . '"'))
        {
            return false;
        }
        else
        {
            $activated = $db->ExecuteS('select active from ' . _DB_PREFIX_ . 'customer where activation_link="' . $link . '"');
            if (count($activated) > 0 && intval($activated[0]['active']) == 1)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
