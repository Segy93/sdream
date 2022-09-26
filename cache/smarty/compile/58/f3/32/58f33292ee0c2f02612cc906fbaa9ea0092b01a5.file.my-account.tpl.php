<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 11:38:13
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/referralprogram/views/templates/hook/my-account.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1199841431632444050bac95-50128082%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '58f33292ee0c2f02612cc906fbaa9ea0092b01a5' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/referralprogram/views/templates/hook/my-account.tpl',
      1 => 1494957236,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1199841431632444050bac95-50128082',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'link' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632444050efb06_94414616',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632444050efb06_94414616')) {function content_632444050efb06_94414616($_smarty_tpl) {?>

<!-- MODULE ReferralProgram -->
<li class="referralprogram">
	<a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['link']->value->getModuleLink('referralprogram','program',array(),true), ENT_QUOTES, 'UTF-8', true);?>
" title="<?php echo smartyTranslate(array('s'=>'Referral program','mod'=>'referralprogram'),$_smarty_tpl);?>
" rel="nofollow"><i class="icon-cogs"></i><span><?php echo smartyTranslate(array('s'=>'Referral program','mod'=>'referralprogram'),$_smarty_tpl);?>
</span></a>
</li>
<!-- END : MODULE ReferralProgram --><?php }} ?>
