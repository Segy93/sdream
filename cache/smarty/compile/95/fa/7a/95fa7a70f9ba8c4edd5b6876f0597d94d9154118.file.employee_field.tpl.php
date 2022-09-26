<?php /* Smarty version Smarty-3.1.19, created on 2022-09-21 08:11:20
         compiled from "/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/logs/employee_field.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1246196506632aab08d99832-21982017%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '95fa7a70f9ba8c4edd5b6876f0597d94d9154118' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/logs/employee_field.tpl',
      1 => 1494957012,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1246196506632aab08d99832-21982017',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'employee_image' => 0,
    'employee_name' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632aab08dc3bd0_97722813',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632aab08dc3bd0_97722813')) {function content_632aab08dc3bd0_97722813($_smarty_tpl) {?>
<span class="employee_avatar_small">
	<img class="imgm img-thumbnail" alt="" src="<?php echo $_smarty_tpl->tpl_vars['employee_image']->value;?>
" width="32" height="32" />
</span>
<?php echo $_smarty_tpl->tpl_vars['employee_name']->value;?>
<?php }} ?>
