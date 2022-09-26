<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:21:58
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/cashondelivery/views/templates/hook/payment.tpl" */ ?>
<?php /*%%SmartyHeaderCode:71717319163243226ab8bc1-96244991%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c1bf4a542634d35417ba0b4366d7261c1ec8e51b' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/cashondelivery/views/templates/hook/payment.tpl',
      1 => 1566052112,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '71717319163243226ab8bc1-96244991',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'link' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_63243226b20048_35378082',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_63243226b20048_35378082')) {function content_63243226b20048_35378082($_smarty_tpl) {?>
<div class="row">
	<div class="col-xs-12">
        <p class="payment_module">
            <a class="cash" href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['link']->value->getModuleLink('cashondelivery','validation',array(),true), ENT_QUOTES, 'UTF-8', true);?>
" title="<?php echo smartyTranslate(array('s'=>'Pay with cash on delivery (COD)','mod'=>'cashondelivery'),$_smarty_tpl);?>
" rel="nofollow">
            	<?php echo smartyTranslate(array('s'=>'Pay with cash on delivery (COD)','mod'=>'cashondelivery'),$_smarty_tpl);?>

            	<span>(<?php echo smartyTranslate(array('s'=>'You pay for the merchandise upon delivery','mod'=>'cashondelivery'),$_smarty_tpl);?>
)</span>
            	</a>
        </p>
    </div>
</div>
<?php }} ?>
