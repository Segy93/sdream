<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:14:52
         compiled from "/home/sdream/public_html/sdream.rs/modules/productpaymentlogos/views/templates/hook/productpaymentlogos.tpl" */ ?>
<?php /*%%SmartyHeaderCode:14552745636324307cd7d7a8-10693125%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '39a0e7f652399a39aaf1229ceb4a8c7a4a721fb3' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/modules/productpaymentlogos/views/templates/hook/productpaymentlogos.tpl',
      1 => 1570496816,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '14552745636324307cd7d7a8-10693125',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'banner_title' => 0,
    'banner_link' => 0,
    'module_dir' => 0,
    'banner_img' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324307cdeb200_29566227',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324307cdeb200_29566227')) {function content_6324307cdeb200_29566227($_smarty_tpl) {?>
<!-- Productpaymentlogos module -->
<div id="product_payment_logos">
	<div class="box-security">
    <h5 class="product-heading-h5"><?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['banner_title']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
</h5>
  	<?php if ($_smarty_tpl->tpl_vars['banner_link']->value!='') {?><a href="<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['banner_link']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
" title="<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['banner_title']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
"><?php }?>
		<img src="<?php echo $_smarty_tpl->tpl_vars['module_dir']->value;?>
<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['banner_img']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
" alt="<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['banner_title']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
" class="img-responsive" />
	<?php if ($_smarty_tpl->tpl_vars['banner_link']->value!='') {?></a><?php }?>
    </div>
</div>
<!-- /Productpaymentlogos module -->
<?php }} ?>
