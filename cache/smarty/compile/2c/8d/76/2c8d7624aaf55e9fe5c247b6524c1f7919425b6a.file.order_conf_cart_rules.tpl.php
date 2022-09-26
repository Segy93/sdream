<?php /* Smarty version Smarty-3.1.19, created on 2022-09-20 18:37:15
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/mails/sr/order_conf_cart_rules.tpl" */ ?>
<?php /*%%SmartyHeaderCode:14195946696329ec3b79c445-13531066%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2c8d7624aaf55e9fe5c247b6524c1f7919425b6a' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/mails/sr/order_conf_cart_rules.tpl',
      1 => 1494957220,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '14195946696329ec3b79c445-13531066',
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
  'unifunc' => 'content_6329ec3b7f3680_24930235',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6329ec3b7f3680_24930235')) {function content_6329ec3b7f3680_24930235($_smarty_tpl) {?><?php  $_smarty_tpl->tpl_vars['cart_rule'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['cart_rule']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['list']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['cart_rule']->key => $_smarty_tpl->tpl_vars['cart_rule']->value) {
$_smarty_tpl->tpl_vars['cart_rule']->_loop = true;
?>
	<tr class="conf_body">
		<td bgcolor="#f8f8f8" colspan="4" style="border:1px solid #D6D4D4;color:#333;padding:7px 0">
			<table class="table" style="width:100%;border-collapse:collapse">
				<tr>
					<td width="10" style="color:#333;padding:0"></td>
					<td align="right" style="color:#333;padding:0">
						<font size="2" face="Open-sans, sans-serif" color="#555454">
							<strong><?php echo $_smarty_tpl->tpl_vars['cart_rule']->value['voucher_name'];?>
</strong>
						</font>
					</td>
					<td width="10" style="color:#333;padding:0"></td>
				</tr>
			</table>
		</td>
		<td bgcolor="#f8f8f8" colspan="4" style="border:1px solid #D6D4D4;color:#333;padding:7px 0">
			<table class="table" style="width:100%;border-collapse:collapse">
				<tr>
					<td width="10" style="color:#333;padding:0"></td>
					<td align="right" style="color:#333;padding:0">
						<font size="2" face="Open-sans, sans-serif" color="#555454">
							<?php echo $_smarty_tpl->tpl_vars['cart_rule']->value['voucher_reduction'];?>

						</font>
					</td>
					<td width="10" style="color:#333;padding:0"></td>
				</tr>
			</table>
		</td>
	</tr>
<?php } ?><?php }} ?>
