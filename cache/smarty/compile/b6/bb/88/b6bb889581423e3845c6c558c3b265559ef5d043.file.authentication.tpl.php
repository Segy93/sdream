<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 11:43:22
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/referralprogram/views/templates/hook/authentication.tpl" */ ?>
<?php /*%%SmartyHeaderCode:13561324836324453a737100-20132736%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b6bb889581423e3845c6c558c3b265559ef5d043' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/referralprogram/views/templates/hook/authentication.tpl',
      1 => 1494957236,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '13561324836324453a737100-20132736',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324453a7a21f9_59325357',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324453a7a21f9_59325357')) {function content_6324453a7a21f9_59325357($_smarty_tpl) {?>

<!-- MODULE ReferralProgram -->
<fieldset class="account_creation">
	<h3 class="page-subheading"><?php echo smartyTranslate(array('s'=>'Referral program','mod'=>'referralprogram'),$_smarty_tpl);?>
</h3>
	<p class="form-group">
		<label for="referralprogram"><?php echo smartyTranslate(array('s'=>'E-mail address of your sponsor','mod'=>'referralprogram'),$_smarty_tpl);?>
</label>
		<input class="form-control" type="text" size="52" maxlength="128" id="referralprogram" name="referralprogram" value="<?php if (isset($_POST['referralprogram'])) {?><?php echo htmlspecialchars($_POST['referralprogram'], ENT_QUOTES, 'UTF-8', true);?>
<?php }?>" />
	</p>
</fieldset>
<!-- END : MODULE ReferralProgram --><?php }} ?>
