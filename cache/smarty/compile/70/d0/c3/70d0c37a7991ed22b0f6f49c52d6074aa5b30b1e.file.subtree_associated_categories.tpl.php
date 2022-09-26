<?php /* Smarty version Smarty-3.1.19, created on 2022-09-21 13:38:55
         compiled from "/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/products/helpers/tree/subtree_associated_categories.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1488772389632af7cf36dfb4-90500956%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '70d0c37a7991ed22b0f6f49c52d6074aa5b30b1e' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/products/helpers/tree/subtree_associated_categories.tpl',
      1 => 1494956984,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1488772389632af7cf36dfb4-90500956',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'nodes' => 0,
    'selected_categories' => 0,
    'imploded_selected_categories' => 0,
    'id_tree' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632af7cf7e5946_76594346',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632af7cf7e5946_76594346')) {function content_632af7cf7e5946_76594346($_smarty_tpl) {?>
<?php if (isset($_smarty_tpl->tpl_vars['nodes']->value)) {?>
	<?php echo $_smarty_tpl->tpl_vars['nodes']->value;?>

<?php }?>

<script type="text/javascript">
<?php if (isset($_smarty_tpl->tpl_vars['selected_categories']->value)&&!empty($_smarty_tpl->tpl_vars['selected_categories']->value)) {?>
	<?php $_smarty_tpl->tpl_vars['imploded_selected_categories'] = new Smarty_variable(implode('","',$_smarty_tpl->tpl_vars['selected_categories']->value), null, 0);?>
	var selected_categories = new Array("<?php echo $_smarty_tpl->tpl_vars['imploded_selected_categories']->value;?>
");

	$('#<?php echo $_smarty_tpl->tpl_vars['id_tree']->value;?>
').tree('collapseAll');
	$('#<?php echo $_smarty_tpl->tpl_vars['id_tree']->value;?>
').find(":input").each(
		function()
		{
			if ($.inArray($(this).val(), selected_categories) != -1)
			{
				$(this).prop("checked", true);
				$(this).parent().addClass("tree-selected");
				$(this).parents("ul.tree").each(
					function()
					{
						$(this).children().children().children(".icon-folder-close")
							.removeClass("icon-folder-close")
							.addClass("icon-folder-open");
						$(this).show();
					}
				);
			}
		}
	);
<?php }?>
</script><?php }} ?>
