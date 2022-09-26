<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:36:28
         compiled from "/home/sdream/public_html/sdream.rs/pdf/invoice.shipping-tab.tpl" */ ?>
<?php /*%%SmartyHeaderCode:9981283986324358cd63a63-34203964%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '4b649ddf17332313398eee1d5ebe2625a3be4fd7' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/pdf/invoice.shipping-tab.tpl',
      1 => 1494957090,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '9981283986324358cd63a63-34203964',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'carrier' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324358cd6fff3_77228137',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324358cd6fff3_77228137')) {function content_6324358cd6fff3_77228137($_smarty_tpl) {?>
<table id="shipping-tab" width="100%">
	<tr>
		<td class="shipping center small grey bold" width="44%"><?php echo smartyTranslate(array('s'=>'Carrier','pdf'=>'true'),$_smarty_tpl);?>
</td>
		<td class="shipping center small white" width="56%"><?php echo $_smarty_tpl->tpl_vars['carrier']->value->name;?>
</td>
	</tr>
</table>
<?php }} ?>
