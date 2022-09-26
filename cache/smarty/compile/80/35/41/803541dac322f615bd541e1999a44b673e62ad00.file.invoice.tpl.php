<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:36:28
         compiled from "/home/sdream/public_html/sdream.rs/pdf/invoice.tpl" */ ?>
<?php /*%%SmartyHeaderCode:4678780046324358cd83f11-42833910%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '803541dac322f615bd541e1999a44b673e62ad00' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/pdf/invoice.tpl',
      1 => 1570239541,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4678780046324358cd83f11-42833910',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'style_tab' => 0,
    'addresses_tab' => 0,
    'summary_tab' => 0,
    'product_tab' => 0,
    'tax_tab' => 0,
    'total_tab' => 0,
    'note_tab' => 0,
    'payment_tab' => 0,
    'shipping_tab' => 0,
    'legal_free_text' => 0,
    'HOOK_DISPLAY_PDF' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324358cde6592_76392703',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324358cde6592_76392703')) {function content_6324358cde6592_76392703($_smarty_tpl) {?>

<?php echo $_smarty_tpl->tpl_vars['style_tab']->value;?>



<table width="100%" id="body" border="0" cellpadding="0" cellspacing="0" style="margin:0;">
	<!-- Invoicing -->
	<tr>
		<td colspan="12">

			<?php echo $_smarty_tpl->tpl_vars['addresses_tab']->value;?>


		</td>
	</tr>

	<tr>
		<td colspan="12" height="30">&nbsp;</td>
	</tr>

	<!-- TVA Info -->
	<tr>
		<td colspan="12">

			<?php echo $_smarty_tpl->tpl_vars['summary_tab']->value;?>


		</td>
	</tr>

	<tr>
		<td colspan="12" height="20">&nbsp;</td>
	</tr>

	<!-- Product -->
	<tr>
		<td colspan="12">

			<?php echo $_smarty_tpl->tpl_vars['product_tab']->value;?>


		</td>
	</tr>

	<tr>
		<td colspan="12" height="10">&nbsp;</td>
	</tr>

	<!-- TVA -->
	<tr>
		<!-- Code TVA -->
		<td colspan="6" class="left">

			<?php echo $_smarty_tpl->tpl_vars['tax_tab']->value;?>


		</td>
		<td colspan="1">&nbsp;</td>
		<!-- Calcule TVA -->
		<td colspan="5" rowspan="5" class="right">

			<?php echo $_smarty_tpl->tpl_vars['total_tab']->value;?>


		</td>
	</tr>
	
	<?php echo $_smarty_tpl->tpl_vars['note_tab']->value;?>

	
	<tr>
		<td colspan="12" height="10">&nbsp;</td>
	</tr>

	<tr>
		<td colspan="6" class="left">

			<?php echo $_smarty_tpl->tpl_vars['payment_tab']->value;?>


		</td>
		<td colspan="1">&nbsp;</td>
	</tr>

	<tr>
		<td colspan="6" class="left">

			<?php echo $_smarty_tpl->tpl_vars['shipping_tab']->value;?>


		</td>
		<td colspan="1">&nbsp;</td>
	</tr>

	<tr>
		<td colspan="12" height="10">&nbsp;</td>
	</tr>

	<tr>
		<td colspan="7" class="left small">

			<table>
				<tr>
					<td>
						<p><?php echo nl2br(htmlspecialchars($_smarty_tpl->tpl_vars['legal_free_text']->value, ENT_QUOTES, 'UTF-8', true));?>
</p>
					</td>
				</tr>
			</table>

		</td>
	</tr>
	<!-- Hook -->
	<?php if (isset($_smarty_tpl->tpl_vars['HOOK_DISPLAY_PDF']->value)) {?>
	<tr>
		<td colspan="12" height="30">&nbsp;</td>
	</tr>

	<tr>
		<td colspan="2">&nbsp;</td>
		<td colspan="10">
			<?php echo $_smarty_tpl->tpl_vars['HOOK_DISPLAY_PDF']->value;?>

		</td>
	</tr>
	<?php }?>
<table style="undefined;table-layout: fixed;"><colgroup><col ><col ></colgroup><tr><th><img src="https://www.sdream.rs/img/vapex-logo.png" alt="Vapex logo" height="40"></th><th><img src="https://www.sdream.rs/img/s-dream-shop-logo-1489705007.jpg" alt="S Dream Shop"  height="40"></th></tr><tr><td>www.vapeks.rs</td><td>Odgovorno lice za prijem reklamacija:</td></tr><tr><td>PIB: 103209922</td><td>Ljiljana Đoković</td></tr><tr><td>MB: 17533827</td><td>Telefon: +381 63 649 132</td></tr><tr><td>Šifra de. 2016</td><td>Email: ljiljana.djokovic@foamline.com</td></tr></table>

</table>
<?php }} ?>
