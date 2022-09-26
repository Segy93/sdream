<?php /* Smarty version Smarty-3.1.19, created on 2022-09-21 10:32:43
         compiled from "/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/helpers/list/list_action_default.tpl" */ ?>
<?php /*%%SmartyHeaderCode:75423009632acc2bb51fa9-28312950%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f2e1dc7a12b1054b9fc7fe5981de77a05d261366' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/helpers/list/list_action_default.tpl',
      1 => 1494957016,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '75423009632acc2bb51fa9-28312950',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'href' => 0,
    'action' => 0,
    'name' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632acc2bb62cb9_43170847',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632acc2bb62cb9_43170847')) {function content_632acc2bb62cb9_43170847($_smarty_tpl) {?>
<a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['href']->value, ENT_QUOTES, 'UTF-8', true);?>
" title="<?php echo $_smarty_tpl->tpl_vars['action']->value;?>
"<?php if (isset($_smarty_tpl->tpl_vars['name']->value)) {?> name="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['name']->value, ENT_QUOTES, 'UTF-8', true);?>
"<?php }?> class="default">
	<i class="icon-asterisk"></i> <?php echo $_smarty_tpl->tpl_vars['action']->value;?>

</a><?php }} ?>
