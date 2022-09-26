<?php /* Smarty version Smarty-3.1.19, created on 2022-09-17 10:13:55
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/store_infos.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1641488780632581c363e802-76783582%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f976d07b135572408f8975de2df8a27566b951d9' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/store_infos.tpl',
      1 => 1494957188,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1641488780632581c363e802-76783582',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'days_datas' => 0,
    'one_day' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632581c3a9f1b9_41340794',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632581c3a9f1b9_41340794')) {function content_632581c3a9f1b9_41340794($_smarty_tpl) {?>


	<?php  $_smarty_tpl->tpl_vars['one_day'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['one_day']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['days_datas']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['one_day']->key => $_smarty_tpl->tpl_vars['one_day']->value) {
$_smarty_tpl->tpl_vars['one_day']->_loop = true;
?>
	<p>
		<strong class="dark"><?php echo smartyTranslate(array('s'=>$_smarty_tpl->tpl_vars['one_day']->value['day']),$_smarty_tpl);?>
: </strong> &nbsp;<span><?php echo $_smarty_tpl->tpl_vars['one_day']->value['hours'];?>
</span>
	</p>
	<?php } ?>

<?php }} ?>
