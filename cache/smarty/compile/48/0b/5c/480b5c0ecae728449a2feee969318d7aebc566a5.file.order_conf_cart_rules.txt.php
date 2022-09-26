<?php /* Smarty version Smarty-3.1.19, created on 2022-09-20 18:37:15
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/mails/sr/order_conf_cart_rules.txt" */ ?>
<?php /*%%SmartyHeaderCode:17064310486329ec3b325494-25274146%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '480b5c0ecae728449a2feee969318d7aebc566a5' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/mails/sr/order_conf_cart_rules.txt',
      1 => 1570226015,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '17064310486329ec3b325494-25274146',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'list' => 0,
    'cart_rule' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6329ec3b778865_21455125',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6329ec3b778865_21455125')) {function content_6329ec3b778865_21455125($_smarty_tpl) {?><?php  $_smarty_tpl->tpl_vars['cart_rule'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['cart_rule']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['list']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['cart_rule']->key => $_smarty_tpl->tpl_vars['cart_rule']->value) {
$_smarty_tpl->tpl_vars['cart_rule']->_loop = true;
?>
	<?php echo $_smarty_tpl->tpl_vars['cart_rule']->value['voucher_name'];?>
  <?php echo $_smarty_tpl->tpl_vars['cart_rule']->value['voucher_reduction'];?>

<?php } ?><?php }} ?>
