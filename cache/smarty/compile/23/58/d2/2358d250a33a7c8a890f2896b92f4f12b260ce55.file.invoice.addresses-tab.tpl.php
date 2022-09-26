<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:36:28
         compiled from "/home/sdream/public_html/sdream.rs/pdf/invoice.addresses-tab.tpl" */ ?>
<?php /*%%SmartyHeaderCode:10288787486324358c9f73a0-77793679%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2358d250a33a7c8a890f2896b92f4f12b260ce55' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/pdf/invoice.addresses-tab.tpl',
      1 => 1571106488,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '10288787486324358c9f73a0-77793679',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'order_invoice' => 0,
    'delivery_address' => 0,
    'invoice_address' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324358ca10f78_98604052',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324358ca10f78_98604052')) {function content_6324358ca10f78_98604052($_smarty_tpl) {?>
<table id="addresses-tab" cellspacing="0" cellpadding="0">
	<tr>
		<td width="33%"><span class="bold"> </span><br/><br/>
			<?php if (isset($_smarty_tpl->tpl_vars['order_invoice']->value)) {?><?php echo $_smarty_tpl->tpl_vars['order_invoice']->value->shop_address;?>
<?php }?>
		</td>
		<td width="33%"><?php if ($_smarty_tpl->tpl_vars['delivery_address']->value) {?><span class="bold"><?php echo smartyTranslate(array('s'=>'Delivery Address','pdf'=>'true'),$_smarty_tpl);?>
</span><br/><br/>
				<?php echo $_smarty_tpl->tpl_vars['delivery_address']->value;?>

			<?php }?>
		</td>
		<td width="33%"><span class="bold"><?php echo smartyTranslate(array('s'=>'Billing Address','pdf'=>'true'),$_smarty_tpl);?>
</span><br/><br/>
				<?php echo $_smarty_tpl->tpl_vars['invoice_address']->value;?>

		</td>
	</tr>
</table>
<?php }} ?>
