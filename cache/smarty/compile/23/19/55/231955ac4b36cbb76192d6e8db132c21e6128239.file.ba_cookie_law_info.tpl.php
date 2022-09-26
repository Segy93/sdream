<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:11:26
         compiled from "/home/sdream/public_html/sdream.rs/modules/bacookielawinfo/views/templates/front/ba_cookie_law_info.tpl" */ ?>
<?php /*%%SmartyHeaderCode:146077290263242faee8bd02-21737516%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '231955ac4b36cbb76192d6e8db132c21e6128239' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/modules/bacookielawinfo/views/templates/front/ba_cookie_law_info.tpl',
      1 => 1662413075,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '146077290263242faee8bd02-21737516',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'BAEU_customCss' => 0,
    'BAEU_CookieBarColor' => 0,
    'BAEU_BoderColor' => 0,
    'BAEU_TextColor' => 0,
    'BAEU_leftLinkColor' => 0,
    'BAEU_leftShowAsButton' => 0,
    'BAEU_leftButtonColor' => 0,
    'BAEU_rightLinkColor' => 0,
    'BAEU_rightShowAsButton' => 0,
    'BAEU_rightButtonColor' => 0,
    'BAEU_leftHoverButtonColor' => 0,
    'BAEU_rightHoverButtonColor' => 0,
    'BAEU_CookieBarShowIn' => 0,
    'BAEU_OnLoad' => 0,
    'BAEU_leftAction' => 0,
    'BAEU_leftLinkURL' => 0,
    'BAEU_leftOpenLinkInNewWindow' => 0,
    'BAEU_AutoHideCookieAfterDelay' => 0,
    'BAEU_OnHide' => 0,
    'BAEU_MillisecondUntilHide' => 0,
    'BAEU_AutoHideCookieIfScroll' => 0,
    'BAEU_ShowBorder' => 0,
    'id_lang' => 0,
    'BAEU_rightLinkURL' => 0,
    'BAEU_RightOpenLinkInNewWinDown' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_63242faef26fd9_40721088',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_63242faef26fd9_40721088')) {function content_63242faef26fd9_40721088($_smarty_tpl) {?>
<!--Modules BA EU Cookie Law-->
<style type="text/css">
	<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_customCss']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>

	#ba_eu_cookie_law{
		background:#<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_CookieBarColor']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
;
		border-bottom-color:#<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_BoderColor']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
 !important;
		border-bottom-style:solid;
	}
	#ba_eu_cookie_law .ba_eu_cookie_law_text{
		color:#<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_TextColor']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
;
	}
	#ba_eu_cookie_accept{
		color:#<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_leftLinkColor']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
;
		<?php if ($_smarty_tpl->tpl_vars['BAEU_leftShowAsButton']->value=="Y") {?>background:#<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_leftButtonColor']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
;<?php }?>
	}
	#ba_eu_cookie_more_info{
		color:#<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_rightLinkColor']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
;
		<?php if ($_smarty_tpl->tpl_vars['BAEU_rightShowAsButton']->value=="Y") {?>background:#<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_rightButtonColor']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
;<?php }?>
	}
	#ba_eu_cookie_accept:hover{
		color:#<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_leftHoverButtonColor']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
;
	}
	#ba_eu_cookie_more_info:hover{
		color:#<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_rightHoverButtonColor']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
;
	}
	<?php if ($_smarty_tpl->tpl_vars['BAEU_CookieBarShowIn']->value=="3") {?>
	.ba_popup_cookie{
		position:fixed;
		width:100%;
		height:100%;
		background:#000;
		opacity:0.5;
		z-index:5004;
	}
	<?php }?>
</style>
<script language="javascript" type="text/javascript">
	window.onload = function(){
		if(<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_CookieBarShowIn']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
 == 3 && getCookie('ba_eu_cookie_law') == 1){
			jQuery(".ba_popup_cookie").hide();
			jQuery(".ba_popup_cookie").css("width","0");
			jQuery(".ba_popup_cookie").css("height","0");
		}
		if(getCookie('ba_eu_cookie_law') != 1){
			if(<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_OnLoad']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
 == 1 && <?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_CookieBarShowIn']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
==1){
				jQuery("#ba_eu_cookie_law").slideDown();
			}else if(<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_OnLoad']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
 == 1 && <?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_CookieBarShowIn']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
==2){
				jQuery("#ba_eu_cookie_law").slideDown();
			}else{
				jQuery("#ba_eu_cookie_law").show();
			}
		}
		jQuery("#ba_eu_cookie_accept").click(function(){
			if(<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_leftAction']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
==1){
				jQuery("#ba_eu_cookie_law").hide();
			}else if(<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_leftAction']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
==2){
				window.close();
				window.open('<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_leftLinkURL']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
');
			}else if(<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_leftOpenLinkInNewWindow']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
=="Y"){
				window.open('<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_leftLinkURL']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
');
			}
			jQuery(".ba_popup_cookie").hide();
			setCookie("ba_eu_cookie_law", "1", 365);
		});
		if("<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_AutoHideCookieAfterDelay']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
"=="Y" && <?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_CookieBarShowIn']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
 <=2){
			setTimeout(function(){
				if(<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_OnHide']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
==1){
					jQuery("#ba_eu_cookie_law").slideUp();
					
				}else{
					jQuery("#ba_eu_cookie_law").hide();
					
				}
			}, <?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_MillisecondUntilHide']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
);
		}
		
		$(document).ready(function(){
			if($(window).scrollTop()==0 && <?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_CookieBarShowIn']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
 <=2){
				jQuery(window).scroll(function() {
					if("<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_AutoHideCookieIfScroll']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
"=="Y"){
						// console.log($(window).scrollTop());
						if(<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_OnHide']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
==1){
							// alert('a');
							jQuery("#ba_eu_cookie_law").slideUp();
							
						}else{
							jQuery("#ba_eu_cookie_law").hide();
							
						}
					}
				});
			}
		});
		
		if("<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_ShowBorder']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
"=="Y"){
			jQuery("#ba_eu_cookie_law").css("border-width","3px");
			
		}
		if(<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_CookieBarShowIn']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
==3){
			jQuery(".ba_popup_cookie").show();
			jQuery("#ba_eu_cookie_law .fa-times-circle-o").show();
			var widthBody = jQuery(window).width();
			var heightBody = jQuery(window).height();
			jQuery('#ba_eu_cookie_law').css({ 'width':'80%','overflow':'inherit'});
			var widthPopupCookie = jQuery('#ba_eu_cookie_law').width();
			var heightPopupCookie = jQuery('#ba_eu_cookie_law').height();
			var MarginLeft = ((widthBody - widthPopupCookie)/2);
			var MarginTop = ((heightBody - heightPopupCookie)/2);
			jQuery('#ba_eu_cookie_law').css({ "top":(MarginTop-40)+"px","left":MarginLeft+"px" });
		}
		jQuery('.ba_popup_cookie').click(function(){
			jQuery(this).hide();
			jQuery("#ba_eu_cookie_law").hide();
		});
		jQuery("#ba_eu_cookie_law .fa-times-circle-o").click(function(){
			jQuery(this).hide();
			jQuery('.ba_popup_cookie').hide();
			jQuery("#ba_eu_cookie_law").hide();
		});
		function setCookie(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			var expires = "expires="+d.toUTCString();
			document.cookie = cname + "=" + cvalue + "; " + expires;
		}
		function getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i=0; i<ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1);
				if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
			}
			return "";
		}
	}
</script>
<div id="ba_eu_cookie_law" class="<?php if ($_smarty_tpl->tpl_vars['BAEU_CookieBarShowIn']->value=="1") {?>show_in_header<?php } elseif ($_smarty_tpl->tpl_vars['BAEU_CookieBarShowIn']->value=="2") {?>show_in_footer<?php } elseif ($_smarty_tpl->tpl_vars['BAEU_CookieBarShowIn']->value=="3") {?>showInPopup<?php }?>">
	<div class="ba_eu_cookie_law_button">
		<div class="ba_eu_cookie_law_text" style="display:block;line-height:25px;">
			<?php echo $_smarty_tpl->tpl_vars['BAEU_Message_'.($_smarty_tpl->tpl_vars['id_lang']->value)]->value;?>
 
		</div>
		<span class="ba_eu_cookie_law_text" style="line-height:17px;">
			<a href="javascript:void(0)" name="acceptSubmit" id="ba_eu_cookie_accept" class="<?php if ($_smarty_tpl->tpl_vars['BAEU_leftShowAsButton']->value=="Y") {?>btn btn-default<?php }?>"><?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_leftLinkText_'.($_smarty_tpl->tpl_vars['id_lang']->value)]->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
</a>
			<a href="<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_rightLinkURL']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
" target="<?php if ($_smarty_tpl->tpl_vars['BAEU_RightOpenLinkInNewWinDown']->value=="Y") {?>_blank<?php }?>" name="moreInfoSubmit" id="ba_eu_cookie_more_info" class="<?php if ($_smarty_tpl->tpl_vars['BAEU_rightShowAsButton']->value=="Y") {?>btn btn-default<?php }?>"><?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['BAEU_rightLinkText_'.($_smarty_tpl->tpl_vars['id_lang']->value)]->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
</a>
		</span>
		
	</div>
	<i class="fa fa-times-circle-o icon-remove-circle"></i>
</div>
<div class="ba_popup_cookie"></div><?php }} ?>
