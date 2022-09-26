<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 11:45:38
         compiled from "/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/products/helpers/tree/tree_header.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1193434756632445c2578428-16536448%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '641d057d6609f9ef68e01a16e165acafbc4cc4bd' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/controllers/products/helpers/tree/tree_header.tpl',
      1 => 1494956984,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1193434756632445c2578428-16536448',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'base_url' => 0,
    'is_category_filter' => 0,
    'toolbar' => 0,
    'title' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632445c25c3676_21698119',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632445c25c3676_21698119')) {function content_632445c25c3676_21698119($_smarty_tpl) {?>
<script type="text/javascript">
	$(document).ready(function(){
		$('#filter-by-category').click(function() {
			if ($(this).is(':checked')) {
				$('#block_category_tree').show();
				$('#category-tree-toolbar').show();
			} else {
				$('#block_category_tree').hide();
				$('#category-tree-toolbar').hide();
				location.href = '<?php echo $_smarty_tpl->tpl_vars['base_url']->value;?>
&reset_filter_category=1';
			}
		});
	});
</script>

<div class="tree-panel-heading-controls clearfix">
	<div id="category-tree-toolbar" <?php if (!$_smarty_tpl->tpl_vars['is_category_filter']->value) {?>style="display:none;"<?php }?>>
		<?php if (isset($_smarty_tpl->tpl_vars['toolbar']->value)) {?><?php echo $_smarty_tpl->tpl_vars['toolbar']->value;?>
<?php }?>
	</div>
	<label class="tree-panel-label-title">
		<input type="checkbox" id="filter-by-category" name="filter-by-category" <?php if ($_smarty_tpl->tpl_vars['is_category_filter']->value) {?>checked="checked"<?php }?> />
		<i class="icon-tags"></i>
		<?php echo $_smarty_tpl->tpl_vars['title']->value;?>

	</label>
</div>
<?php }} ?>
