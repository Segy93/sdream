<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:36:28
         compiled from "/home/sdream/public_html/sdream.rs/pdf/invoice.note-tab.tpl" */ ?>
<?php /*%%SmartyHeaderCode:20853693136324358cc96085-62503331%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '26861de8d4f2ab6aec984cdc1afba3fa36f4ac71' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/pdf/invoice.note-tab.tpl',
      1 => 1494957090,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '20853693136324358cc96085-62503331',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'order_invoice' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324358ccc9754_07230208',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324358ccc9754_07230208')) {function content_6324358ccc9754_07230208($_smarty_tpl) {?>
<?php if (isset($_smarty_tpl->tpl_vars['order_invoice']->value->note)&&$_smarty_tpl->tpl_vars['order_invoice']->value->note) {?>
	<tr>
		<td colspan="12" height="10">&nbsp;</td>
	</tr>
	
	<tr>
		<td colspan="6" class="left">
			<table id="note-tab" style="width: 100%">
				<tr>
					<td class="grey"><?php echo smartyTranslate(array('s'=>'Note','pdf'=>'true'),$_smarty_tpl);?>
</td>
				</tr>
				<tr>
					<td class="note"><?php echo nl2br($_smarty_tpl->tpl_vars['order_invoice']->value->note);?>
</td>
				</tr>
			</table>
		</td>
		<td colspan="1">&nbsp;</td>
	</tr>
<?php }?>
<?php }} ?>
