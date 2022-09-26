<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 11:45:38
         compiled from "/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/helpers/tree/tree_node_item_radio.tpl" */ ?>
<?php /*%%SmartyHeaderCode:850241756632445c25d36f0-26626327%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '7464bcae3e94f1cf2721e8ddb47092de6e13468d' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/helpers/tree/tree_node_item_radio.tpl',
      1 => 1494957016,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '850241756632445c25d36f0-26626327',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'node' => 0,
    'input_name' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632445c25f2352_22988932',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632445c25f2352_22988932')) {function content_632445c25f2352_22988932($_smarty_tpl) {?>
<li class="tree-item<?php if (isset($_smarty_tpl->tpl_vars['node']->value['disabled'])&&$_smarty_tpl->tpl_vars['node']->value['disabled']==true) {?> tree-item-disable<?php }?>">
	<span class="tree-item-name">
		<input type="radio" name="<?php echo $_smarty_tpl->tpl_vars['input_name']->value;?>
" value="<?php echo $_smarty_tpl->tpl_vars['node']->value['id_category'];?>
"<?php if (isset($_smarty_tpl->tpl_vars['node']->value['disabled'])&&$_smarty_tpl->tpl_vars['node']->value['disabled']==true) {?> disabled="disabled"<?php }?> />
		<i class="tree-dot"></i>
		<label class="tree-toggler"><?php echo $_smarty_tpl->tpl_vars['node']->value['name'];?>
</label>
	</span>
</li><?php }} ?>
