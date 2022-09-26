<div style="float:left;">
<div id="mySidenav2" class="sidenav">
</div>
<div id="mySidenav" class="sidenav">
 
</div>
<script>
{literal}
function openZ1menu(){ if($('#zmijskiZMenu').height() < 50) {$('#zmijskiZMenu').css('height','146px'); document.getElementById("iO5").style.transform = "rotate(-180deg)";} else {$('#zmijskiZMenu').css('height','36px');document.getElementById("iO5").style.transform = "rotate(0deg)";} }
{/literal}
</script>
<p class="responsiveMenuIcon" onclick="openNav()"><i style="font-size:34px; color:white;" class="fa fa-bars" aria-hidden="true"></i></p></div>

<div class="zubizareta3">
<i  class="fa fa-facebook fakiZ" aria-hidden="true"></i><i class="fa fa-youtube-play fakiZ" aria-hidden="true"></i><i class="fa fa-instagram fakiZ" aria-hidden="true"></i>
</div>
<!-- Block user information module NAV  -->
{if $is_logged}
	<div class="header_user_info" style="">
		<a href="{$link->getPageLink('my-account', true)|escape:'html':'UTF-8'}" title="{l s='View my customer account' mod='blockuserinfo'}" class="account" rel="nofollow"><p class="uzerNameZ"><i class="fa fa-user" aria-hidden="true"> </i> <span class="uzerNameZ2">{$cookie->customer_firstname} {$cookie->customer_lastname}</span></p></a>
	</div>
{/if}

	{if $is_logged}

	
	

	
	<div class="header_user_info logoutZ">
	
		<a class="logout" href="https://www.sdream.rs/my-account?mylogout=" rel="nofollow" title="{l s='Log me out' mod='blockuserinfo'}"><i class="fa fa-sign-out" aria-hidden="true"></i>
			<span class="odjaviMeZ">{l s='Sign out' mod='blockuserinfo'} </span>
		</a>
	{else}
		<div class="header_user_info" style="width:188px;">
		<a style="overflow:hidden; height:36px;" class="login" id="logonZ"><i class="fa fa-user" aria-hidden="true"> </i> 
			<span class="userLoginTextZ">{l s='Sign in' mod='blockuserinfo'} </span>
		</a>
	{/if}
</div>

<!-- Block languages module -->
{if count($languages) > 1}
	<div id="languages-block-top" class="languages-block">
		{foreach from=$languages key=k item=language name="languages"}
			{if $language.iso_code == $lang_iso}
				<div class="current">
					<span><img alt="{$language.iso_code}" height="11" span="" src="{$img_lang_dir}{$language.id_lang}.jpg" width="16" style="margin-right: 2px;"/></span>
				</div>
			{/if}
		{/foreach}
		<ul id="first-languages" class="languages-block_ul toogle_content">
			{foreach from=$languages key=k item=language name="languages"}
				<li {if $language.iso_code == $lang_iso}class="selected"{/if}>
				{if $language.iso_code != $lang_iso}
					{assign var=indice_lang value=$language.id_lang}
					{if isset($lang_rewrite_urls.$indice_lang)}
						<a href="{$lang_rewrite_urls.$indice_lang|escape:'html':'UTF-8'}" title="{$language.name|escape:'html':'UTF-8'}" rel="alternate" hreflang="{$language.iso_code|escape:'html':'UTF-8'}">
					{else}
						<a href="{$link->getLanguageLink($language.id_lang)|escape:'html':'UTF-8'}" title="{$language.name|escape:'html':'UTF-8'}" rel="alternate" hreflang="{$language.iso_code|escape:'html':'UTF-8'}">
					{/if}
				{/if}
						<span><img alt="{$language.iso_code}" height="11" span="" src="{$img_lang_dir}{$language.id_lang}.jpg" width="16" style="margin-right: 2px;"/></span>
				{if $language.iso_code != $lang_iso}
					</a>
				{/if}
				</li>
			{/foreach}
		</ul>
	</div>
{/if}
<!-- /Block languages module -->

<div style="float:right;" id="kinoZen">
</div>
<!-- /Block usmodule NAV -->


	