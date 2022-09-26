{*
* 2007-2016 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2016 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}
{capture name=path}{l s='Contact'}{/capture}
<h1 class="page-heading bottom-indent">
	{l s='Contact us'}
</h1>
{if isset($confirmation)}
	<p class="alert alert-success">{l s='Your message has been successfully sent to our team.'}</p>
	<ul class="footer_links clearfix">
		<li>
			<a class="btn btn-default button button-small" href="{if isset($force_ssl) && $force_ssl}{$base_dir_ssl}{else}{$base_dir}{/if}">
				<span>
					<i class="icon-chevron-left"></i>{l s='Home'}
				</span>
			</a>
		</li>
	</ul>
{elseif isset($alreadySent)}
	<p class="alert alert-warning">{l s='Your message has already been sent.'}</p>
	<ul class="footer_links clearfix">
		<li>
			<a class="btn btn-default button button-small" href="{if isset($force_ssl) && $force_ssl}{$base_dir_ssl}{else}{$base_dir}{/if}">
				<span>
					<i class="icon-chevron-left"></i>{l s='Home'}
				</span>
			</a>
		</li>
	</ul>
{else}
	{include file="$tpl_dir./errors.tpl"}
	<form action="{$request_uri}" method="post" class="kiriZuljaZ contact-form-box" enctype="multipart/form-data">
		<fieldset>
			<h3 class="page-subheading">{l s='send a message'}</h3>
			<div class="clearfix">
				<div class="col-xs-12 col-md-12">
					
						<input type="hidden" name="id_contact" value="1">
				
						<p id="desc_contact0" class="desc_contact{if isset($smarty.request.id_contact)} unvisible{/if}">&nbsp;</p>
						{foreach from=$contacts item=contact}
							<p id="desc_contact{$contact.id_contact|intval}" class="desc_contact contact-title{if !isset($smarty.request.id_contact) || $smarty.request.id_contact|intval != $contact.id_contact|intval} unvisible{/if}">
								<i class="icon-comment-alt"></i>{$contact.description|escape:'html':'UTF-8'}
							</p>
						{/foreach}
					<p class="text">
    <label for="extrafield2" id="fullnamez"> Ime i prezime </label>
    {if isset($customerThread.extrafield2)}
        <input type="text" id="extrafield2" class="form-control grey validate" name="extrafield2" value="{$customerThread.extrafield2|escape:'htmlall':'UTF-8'}" readonly="readonly" />
    {else}
        <input type="text" id="extrafield2" class="form-control grey validate" name="extrafield2" value="" />
    {/if}
</p> 
<p class="text" style="display:none;">
    <label for="extrafield3" id="tipForme"> Tip forme </label>
    {if isset($customerThread.extrafield3)}
        <input type="text" id="extrafield3" class="form-control grey validate" name="extrafield3" value="kontakt" readonly="readonly" />
    {else}
        <input type="text" id="extrafield3" class="form-control grey validate" name="extrafield3" value="kontakt" />
    {/if}
</p>   		
<p class="text"  style="display:none;">
    <label for="extrafield4" id="brojTelefona">  Broj telefona  </label>
    {if isset($customerThread.extrafield4)}
        <input type="text" id="extrafield4" class="form-control grey validate" name="extrafield4" value="{$customerThread.extrafield4|escape:'htmlall':'UTF-8'}" readonly="readonly" />
    {else}
        <input type="text" id="extrafield4" class="form-control grey validate" name="extrafield4" value="" />
    {/if}
</p>   		
<p class="text"  style="display:none;">
    <label for="extrafield5" id="brojVasePordzbine"> Broj vaše pordžbine </label>
    {if isset($customerThread.extrafield5)}
        <input type="text" id="extrafield5" class="form-control grey validate" name="extrafield5" value="{$customerThread.extrafield5|escape:'htmlall':'UTF-8'}" readonly="readonly" />
    {else}
        <input type="text" id="extrafield5" class="form-control grey validate" name="extrafield5" value="" />
    {/if}
</p>   		  		
					
					<p class="form-group">
						<label for="email">{l s='Email address'}</label>
						{if isset($customerThread.email)}
							<input class="form-control grey" type="text" id="email" name="from" value="{$customerThread.email|escape:'html':'UTF-8'}" readonly="readonly" />
						{else}
							<input class="form-control grey validate" type="text" id="email" name="from" data-validate="isEmail" value="{$email|escape:'html':'UTF-8'}" />
						{/if}
					</p>
					{if !$PS_CATALOG_MODE}

						<p class="text">
    <label for="extrafield" id="subject">Naslov poruke</label>
    {if isset($customerThread.extrafield)}
        <input class="form-control grey " type="text" id="extrafield" name="extrafield" value="{$customerThread.extrafield|escape:'htmlall':'UTF-8'}" readonly="readonly" />
    {else}
        <input class="form-control grey validate" type="text" id="extrafield" name="extrafield" value="" />
    {/if}
</p> 
					{/if}
				</div>
				<div class="col-xs-12 col-md-12">
					<div class="form-group">
						<label for="message">{l s='Message'}</label>
						<textarea class="form-control" id="message" name="message">{if isset($message)}{$message|escape:'html':'UTF-8'|stripslashes}{/if}</textarea>
					</div>
				</div>
			</div>
			<div class="submit">
				<button type="submit" name="submitMessage" id="submitMessage" class="button btn btn-default button-medium"><span>{l s='Send'}<i class="icon-chevron-right right"></i></span></button>
			</div>
		</fieldset>
	</form>
	<div class="grizuljZ">
{literal}	<script src='https://maps.googleapis.com/maps/api/js?v=3.exp&key=	AIzaSyA8lxSz1etkQ8J0ZzTJ97R2NTvQIQQ_2NM'></script>{/literal}
<div style='border:1px solid rgba(6,4,3,0.1);overflow:hidden;height:597px;width:100%; -moz-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;-webkit-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;'>
<div id='gmap_canvas' style='height:597px;width:100%;'>
</div></div> 
{literal}
<style>.gm-style-iw>div{overflow:hidden!important;}#gmap_canvas img{max-width:none!important;background:none!important}img[src="https://maps.gstatic.com/mapfiles/api-3/images/mapcnt3.png"] {
    display: none;
}</style>

 
<script type="text/javascript" async="async">
<!--

    var locations = [
      ['<div class="textwidget"><center><img class="footer_logo" src="https://www.sdream.rs/img/s-dream-shop-logo-1489705007.jpg" width="150" alt="logo" ></center><div style="margin-top: 16px; width:100%; "></div><div style="margin-bottom:8px;margin-top:8px;"><p style="text-align:left;padding-bottom:3px;font-size:16px;">Adresa: <strong>Srbija, Čačak 32212, ul. Radonje Golubovića Goluba br. 9</strong></p><p style="text-align:left;padding-bottom:4px;font-size:16px;">Telefon: <strong style="font-size:16px;"> +381 32 5 377 050</strong></p><p style="text-align:left;padding-bottom:4px;font-size:16px;">Email: <strong style="font-size:16px;"><a href="mailto:office@sdream.rs?subject=email poruka sa www.sdream.rs || poruka poslata preko sajt footera">office@sdream.rs </a></strong></p></div><div style="margin-top: 16px; width:100%; "></div><style>.fa-2xx{color:#333;}.fa-2x:hover{color:#ff9100;}#footer-info{float: none!important;text-align: center!important;}.et-social-icons{margin: 0px 0 16px 0;position:relative; right:14px;}.et-social-icons>li{padding:0 14px 0 0!importan; margin: 0 20px 0 0!important}.maTeam{color:#666666!important; font-weifht:600;transition:0.3s;}.maTeam:hover{color:rgba(255,145,0,0.3)!important;}</style></div>', 43.906924, 20.396176, 1]  
    ];

    var map = new google.maps.Map(document.getElementById('gmap_canvas'), {
      zoom: 13,
      center:new google.maps.LatLng(43.906924, 20.396176),   
      mapTypeControl: false,
      streetViewControl: false,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles:[{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f06423"}]}]
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon: 'https://www.sdream.rs/upload/map-marker-final.png',
        map: map
      });
google.maps.event.addListener(infowindow, 'domready', function(){
    jQuery(".gm-style-iw").next("div").hide();
});		


	    google.maps.event.addListener(map, 'click', function() {
  map.set('scrollwheel', true);
});
google.maps.event.addListener(map, 'mouseout', function() {
    map.set('scrollwheel', false);
}); 	
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
      
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
      
      })(marker, i));infowindow.open(map,marker);
    }


//--></script>{/literal}
	</div>
{/if}
{addJsDefL name='contact_fileDefaultHtml'}{l s='No file selected' js=1}{/addJsDefL}
{addJsDefL name='contact_fileButtonHtml'}{l s='Choose File' js=1}{/addJsDefL}
