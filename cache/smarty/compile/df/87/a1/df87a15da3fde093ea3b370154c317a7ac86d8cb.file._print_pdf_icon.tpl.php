<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:24:23
         compiled from "/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/orders/_print_pdf_icon.tpl" */ ?>
<?php /*%%SmartyHeaderCode:444236309632432b72f6d86-90957413%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'df87a15da3fde093ea3b370154c317a7ac86d8cb' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/orders/_print_pdf_icon.tpl',
      1 => 1494956992,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '444236309632432b72f6d86-90957413',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'order' => 0,
    'link' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632432b7326933_32708799',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632432b7326933_32708799')) {function content_632432b7326933_32708799($_smarty_tpl) {?>


<span class="btn-group-action">
	<span class="btn-group">
	<?php if (Configuration::get('PS_INVOICE')&&$_smarty_tpl->tpl_vars['order']->value->invoice_number) {?>
		<a class="btn btn-default _blank" href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['link']->value->getAdminLink('AdminPdf'), ENT_QUOTES, 'UTF-8', true);?>
&amp;submitAction=generateInvoicePDF&amp;id_order=<?php echo $_smarty_tpl->tpl_vars['order']->value->id;?>
">
			<i class="icon-file-text"></i>
		</a>
	<?php }?>
	
	<?php if ($_smarty_tpl->tpl_vars['order']->value->delivery_number) {?>
		<a class="btn btn-default _blank" href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['link']->value->getAdminLink('AdminPdf'), ENT_QUOTES, 'UTF-8', true);?>
&amp;submitAction=generateDeliverySlipPDF&amp;id_order=<?php echo $_smarty_tpl->tpl_vars['order']->value->id;?>
">
			<i class="icon-truck"></i>
		</a>
	<?php }?>
	</span>
</span>
<?php }} ?>
