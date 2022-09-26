<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:18:10
         compiled from "/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/modules/modal_translation.tpl" */ ?>
<?php /*%%SmartyHeaderCode:166754616063243142090a43-20206159%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '291fcf69a5ffcaa2ba00a58201c76ea8e57e5624' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/modules/modal_translation.tpl',
      1 => 1494957000,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '166754616063243142090a43-20206159',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'module_languages' => 0,
    'trad_link' => 0,
    'language' => 0,
    'module_name' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632431420b7725_87938115',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632431420b7725_87938115')) {function content_632431420b7725_87938115($_smarty_tpl) {?>
<div class="modal-body">
	<div class="input-group">
		<button type="button" class="btn btn-default dropdown-toggle" tabindex="-1" data-toggle="dropdown">
			<i class="icon-flag"></i>
			<?php echo smartyTranslate(array('s'=>'Manage translations'),$_smarty_tpl);?>

			<span class="caret"></span>
		</button>
		<ul class="dropdown-menu">
			<?php  $_smarty_tpl->tpl_vars['language'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['language']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['module_languages']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['language']->key => $_smarty_tpl->tpl_vars['language']->value) {
$_smarty_tpl->tpl_vars['language']->_loop = true;
?>
			<li><a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['trad_link']->value, ENT_QUOTES, 'UTF-8', true);?>
<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['language']->value['iso_code'], ENT_QUOTES, 'UTF-8', true);?>
#<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['module_name']->value, ENT_QUOTES, 'UTF-8', true);?>
"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['language']->value['name'], ENT_QUOTES, 'UTF-8', true);?>
</a></li>
			<?php } ?>
		</ul>
	</div>
</div><?php }} ?>
