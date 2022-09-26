<?php /* Smarty version Smarty-3.1.19, created on 2022-09-23 20:13:33
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/blockuserinfo/nav.tpl" */ ?>
<?php /*%%SmartyHeaderCode:19227816916324307da52288-14561376%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'cd88cd92f78781a33edbb62c1bbdac0e03512256' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/blockuserinfo/nav.tpl',
      1 => 1663956755,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '19227816916324307da52288-14561376',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324307dab23f8_52462519',
  'variables' => 
  array (
    'is_logged' => 0,
    'link' => 0,
    'cookie' => 0,
    'languages' => 0,
    'language' => 0,
    'lang_iso' => 0,
    'img_lang_dir' => 0,
    'indice_lang' => 0,
    'lang_rewrite_urls' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324307dab23f8_52462519')) {function content_6324307dab23f8_52462519($_smarty_tpl) {?><div style="float:left;">
<div id="mySidenav2" class="sidenav">
</div>
<div id="mySidenav" class="sidenav">
 
</div>
<script>

function openZ1menu(){ if($('#zmijskiZMenu').height() < 50) {$('#zmijskiZMenu').css('height','146px'); document.getElementById("iO5").style.transform = "rotate(-180deg)";} else {$('#zmijskiZMenu').css('height','36px');document.getElementById("iO5").style.transform = "rotate(0deg)";} }

</script>
<p class="responsiveMenuIcon" onclick="openNav()"><i style="font-size:34px; color:white;" class="fa fa-bars" aria-hidden="true"></i></p></div>

<div class="zubizareta3">
<i  class="fa fa-facebook fakiZ" aria-hidden="true"></i><i class="fa fa-youtube-play fakiZ" aria-hidden="true"></i><i class="fa fa-instagram fakiZ" aria-hidden="true"></i>
</div>
<!-- Block user information module NAV  -->
<?php if ($_smarty_tpl->tpl_vars['is_logged']->value) {?>
	<div class="header_user_info" style="">
		<a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['link']->value->getPageLink('my-account',true), ENT_QUOTES, 'UTF-8', true);?>
" title="<?php echo smartyTranslate(array('s'=>'View my customer account','mod'=>'blockuserinfo'),$_smarty_tpl);?>
" class="account" rel="nofollow"><p class="uzerNameZ"><i class="fa fa-user" aria-hidden="true"> </i> <span class="uzerNameZ2"><?php echo $_smarty_tpl->tpl_vars['cookie']->value->customer_firstname;?>
 <?php echo $_smarty_tpl->tpl_vars['cookie']->value->customer_lastname;?>
</span></p></a>
	</div>
<?php }?>

	<?php if ($_smarty_tpl->tpl_vars['is_logged']->value) {?>

	
	

	
	<div class="header_user_info logoutZ">
	
		<a class="logout" href="https://www.sdream.rs/my-account?mylogout=" rel="nofollow" title="<?php echo smartyTranslate(array('s'=>'Log me out','mod'=>'blockuserinfo'),$_smarty_tpl);?>
"><i class="fa fa-sign-out" aria-hidden="true"></i>
			<span class="odjaviMeZ"><?php echo smartyTranslate(array('s'=>'Sign out','mod'=>'blockuserinfo'),$_smarty_tpl);?>
 </span>
		</a>
	<?php } else { ?>
		<div class="header_user_info" style="width:188px;">
		<a style="overflow:hidden; height:36px;" class="login" id="logonZ"><i class="fa fa-user" aria-hidden="true"> </i> 
			<span class="userLoginTextZ"><?php echo smartyTranslate(array('s'=>'Sign in','mod'=>'blockuserinfo'),$_smarty_tpl);?>
 </span>
		</a>
	<?php }?>
</div>

<!-- Block languages module -->
<?php if (count($_smarty_tpl->tpl_vars['languages']->value)>1) {?>
	<div id="languages-block-top" class="languages-block">
		<?php  $_smarty_tpl->tpl_vars['language'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['language']->_loop = false;
 $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['languages']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['language']->key => $_smarty_tpl->tpl_vars['language']->value) {
$_smarty_tpl->tpl_vars['language']->_loop = true;
 $_smarty_tpl->tpl_vars['k']->value = $_smarty_tpl->tpl_vars['language']->key;
?>
			<?php if ($_smarty_tpl->tpl_vars['language']->value['iso_code']==$_smarty_tpl->tpl_vars['lang_iso']->value) {?>
				<div class="current">
					<span><img alt="<?php echo $_smarty_tpl->tpl_vars['language']->value['iso_code'];?>
" height="11" span="" src="<?php echo $_smarty_tpl->tpl_vars['img_lang_dir']->value;?>
<?php echo $_smarty_tpl->tpl_vars['language']->value['id_lang'];?>
.jpg" width="16" style="margin-right: 2px;"/></span>
				</div>
			<?php }?>
		<?php } ?>
		<ul id="first-languages" class="languages-block_ul toogle_content">
			<?php  $_smarty_tpl->tpl_vars['language'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['language']->_loop = false;
 $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['languages']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['language']->key => $_smarty_tpl->tpl_vars['language']->value) {
$_smarty_tpl->tpl_vars['language']->_loop = true;
 $_smarty_tpl->tpl_vars['k']->value = $_smarty_tpl->tpl_vars['language']->key;
?>
				<li <?php if ($_smarty_tpl->tpl_vars['language']->value['iso_code']==$_smarty_tpl->tpl_vars['lang_iso']->value) {?>class="selected"<?php }?>>
				<?php if ($_smarty_tpl->tpl_vars['language']->value['iso_code']!=$_smarty_tpl->tpl_vars['lang_iso']->value) {?>
					<?php $_smarty_tpl->tpl_vars['indice_lang'] = new Smarty_variable($_smarty_tpl->tpl_vars['language']->value['id_lang'], null, 0);?>
					<?php if (isset($_smarty_tpl->tpl_vars['lang_rewrite_urls']->value[$_smarty_tpl->tpl_vars['indice_lang']->value])) {?>
						<a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['lang_rewrite_urls']->value[$_smarty_tpl->tpl_vars['indice_lang']->value], ENT_QUOTES, 'UTF-8', true);?>
" title="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['language']->value['name'], ENT_QUOTES, 'UTF-8', true);?>
" rel="alternate" hreflang="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['language']->value['iso_code'], ENT_QUOTES, 'UTF-8', true);?>
">
					<?php } else { ?>
						<a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['link']->value->getLanguageLink($_smarty_tpl->tpl_vars['language']->value['id_lang']), ENT_QUOTES, 'UTF-8', true);?>
" title="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['language']->value['name'], ENT_QUOTES, 'UTF-8', true);?>
" rel="alternate" hreflang="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['language']->value['iso_code'], ENT_QUOTES, 'UTF-8', true);?>
">
					<?php }?>
				<?php }?>
						<span><img alt="<?php echo $_smarty_tpl->tpl_vars['language']->value['iso_code'];?>
" height="11" span="" src="<?php echo $_smarty_tpl->tpl_vars['img_lang_dir']->value;?>
<?php echo $_smarty_tpl->tpl_vars['language']->value['id_lang'];?>
.jpg" width="16" style="margin-right: 2px;"/></span>
				<?php if ($_smarty_tpl->tpl_vars['language']->value['iso_code']!=$_smarty_tpl->tpl_vars['lang_iso']->value) {?>
					</a>
				<?php }?>
				</li>
			<?php } ?>
		</ul>
	</div>
<?php }?>
<!-- /Block languages module -->

<div style="float:right;" id="kinoZen">
</div>
<!-- /Block usmodule NAV -->


	<?php }} ?>
