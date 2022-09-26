<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:20:41
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/category-count.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1867478094632431d99fd0c5-37770750%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'faa6ac4763e333d55725d9aa35beba5acdb4bef4' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/category-count.tpl',
      1 => 1494957188,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1867478094632431d99fd0c5-37770750',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'category' => 0,
    'nb_products' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632431d9a17881_67214987',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632431d9a17881_67214987')) {function content_632431d9a17881_67214987($_smarty_tpl) {?>
<span class="heading-counter"><?php if ((isset($_smarty_tpl->tpl_vars['category']->value)&&$_smarty_tpl->tpl_vars['category']->value->id==1)||(isset($_smarty_tpl->tpl_vars['nb_products']->value)&&$_smarty_tpl->tpl_vars['nb_products']->value==0)) {?><?php echo smartyTranslate(array('s'=>'There are no products in this category.'),$_smarty_tpl);?>
<?php } else { ?><?php if (isset($_smarty_tpl->tpl_vars['nb_products']->value)&&$_smarty_tpl->tpl_vars['nb_products']->value==1) {?><?php echo smartyTranslate(array('s'=>'There is 1 product.'),$_smarty_tpl);?>
<?php } elseif (isset($_smarty_tpl->tpl_vars['nb_products']->value)) {?><?php echo smartyTranslate(array('s'=>'There are %d products.','sprintf'=>$_smarty_tpl->tpl_vars['nb_products']->value),$_smarty_tpl);?>
<?php }?><?php }?></span>
<?php }} ?>
