<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:30:34
         compiled from "/home/sdream/public_html/sdream.rs/modules/featuredcategory/views/templates/hook/featuredcategory16.tpl" */ ?>
<?php /*%%SmartyHeaderCode:3432460536324342a4ad208-54573511%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '7ff4b54d6bb2bddaf627b7e83b242f29e6e8606c' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/modules/featuredcategory/views/templates/hook/featuredcategory16.tpl',
      1 => 1494957406,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3432460536324342a4ad208-54573511',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'products' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324342a4f84f6_57985146',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324342a4f84f6_57985146')) {function content_6324342a4f84f6_57985146($_smarty_tpl) {?>

<div id="featured-category-products_block_center" class="block products_block clearfix">
    <h4 class="title_block"><?php echo smartyTranslate(array('s'=>'Featured products','mod'=>'featuredcategory'),$_smarty_tpl);?>
</h4>
    <?php if (isset($_smarty_tpl->tpl_vars['products']->value)&&$_smarty_tpl->tpl_vars['products']->value) {?>
        <?php echo $_smarty_tpl->getSubTemplate (((string)$_smarty_tpl->tpl_vars['tpl_dir']->value)."./product-list.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array('class'=>'homefeatured tab-pane bxslider-hometabs2','id'=>'featuredcategory'), 0);?>

    <?php } else { ?>
        <ul id="categoryfeatured" class="categoryfeatured tab-pane">
            <li class="alert alert-info"><?php echo smartyTranslate(array('s'=>'No featured products at this time.','mod'=>'featuredcategory'),$_smarty_tpl);?>
</li>
        </ul>
    <?php }?>
</div><?php }} ?>
