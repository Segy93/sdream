<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:18:17
         compiled from "/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/addons_catalog/content.tpl" */ ?>
<?php /*%%SmartyHeaderCode:211913605563243149f0cfe4-55566828%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '84ec24b61448f50bfa8cd9d22001bb9d1c7f8a4f' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/addons_catalog/content.tpl',
      1 => 1494956996,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '211913605563243149f0cfe4-55566828',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'display_addons_content' => 0,
    'addons_content' => 0,
    'iso_lang' => 0,
    'iso_currency' => 0,
    'iso_country' => 0,
    'parent_domain' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324314a020b43_29863997',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324314a020b43_29863997')) {function content_6324314a020b43_29863997($_smarty_tpl) {?>
<?php if ($_smarty_tpl->tpl_vars['display_addons_content']->value) {?>
	<?php echo $_smarty_tpl->tpl_vars['addons_content']->value;?>

<?php } else { ?>
	<iframe class="clearfix" style="margin:0px;padding:0px;width:100%;height:920px;overflow:hidden;border:none" src="//addons.prestashop.com/iframe/search.php?isoLang=<?php echo $_smarty_tpl->tpl_vars['iso_lang']->value;?>
&amp;isoCurrency=<?php echo $_smarty_tpl->tpl_vars['iso_currency']->value;?>
&amp;isoCountry=<?php echo $_smarty_tpl->tpl_vars['iso_country']->value;?>
&amp;parentUrl=<?php echo $_smarty_tpl->tpl_vars['parent_domain']->value;?>
"></iframe>
<?php }?>
<?php }} ?>
