<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:18:32
         compiled from "/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/stats/stats.tpl" */ ?>
<?php /*%%SmartyHeaderCode:140259264963243158c90d00-13332324%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'be2d5fd68e5fb6fb98f166632de7172b8f20722e' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/stats/stats.tpl',
      1 => 1494956980,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '140259264963243158c90d00-13332324',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'module_name' => 0,
    'module_instance' => 0,
    'hook' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_63243158e556f0_64751428',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_63243158e556f0_64751428')) {function content_63243158e556f0_64751428($_smarty_tpl) {?>

		<div class="panel">
			<?php if ($_smarty_tpl->tpl_vars['module_name']->value) {?>
				<?php if ($_smarty_tpl->tpl_vars['module_instance']->value&&$_smarty_tpl->tpl_vars['module_instance']->value->active) {?>
					<?php echo $_smarty_tpl->tpl_vars['hook']->value;?>

				<?php } else { ?>
					<?php echo smartyTranslate(array('s'=>'Module not found'),$_smarty_tpl);?>

				<?php }?>
			<?php } else { ?>
				<h3 class="space"><?php echo smartyTranslate(array('s'=>'Please select a module from the left column.'),$_smarty_tpl);?>
</h3>
			<?php }?>
		</div>
	</div>
</div><?php }} ?>
