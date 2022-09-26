<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:38:50
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/contact-form.tpl" */ ?>
<?php /*%%SmartyHeaderCode:3920714396324361a4101e1-69281930%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e7c462f7ad115949bd3ae6ad22fd013b5d3bdc8b' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/contact-form.tpl',
      1 => 1663088445,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3920714396324361a4101e1-69281930',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'confirmation' => 0,
    'force_ssl' => 0,
    'base_dir_ssl' => 0,
    'base_dir' => 0,
    'alreadySent' => 0,
    'request_uri' => 0,
    'contacts' => 0,
    'contact' => 0,
    'customerThread' => 0,
    'email' => 0,
    'PS_CATALOG_MODE' => 0,
    'message' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324361a4e1f29_59416625',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324361a4e1f29_59416625')) {function content_6324361a4e1f29_59416625($_smarty_tpl) {?>
<?php $_smarty_tpl->_capture_stack[0][] = array('path', null, null); ob_start(); ?><?php echo smartyTranslate(array('s'=>'Contact'),$_smarty_tpl);?>
<?php list($_capture_buffer, $_capture_assign, $_capture_append) = array_pop($_smarty_tpl->_capture_stack[0]);
if (!empty($_capture_buffer)) {
 if (isset($_capture_assign)) $_smarty_tpl->assign($_capture_assign, ob_get_contents());
 if (isset( $_capture_append)) $_smarty_tpl->append( $_capture_append, ob_get_contents());
 Smarty::$_smarty_vars['capture'][$_capture_buffer]=ob_get_clean();
} else $_smarty_tpl->capture_error();?>
<h1 class="page-heading bottom-indent">
	<?php echo smartyTranslate(array('s'=>'Contact us'),$_smarty_tpl);?>

</h1>
<?php if (isset($_smarty_tpl->tpl_vars['confirmation']->value)) {?>
	<p class="alert alert-success"><?php echo smartyTranslate(array('s'=>'Your message has been successfully sent to our team.'),$_smarty_tpl);?>
</p>
	<ul class="footer_links clearfix">
		<li>
			<a class="btn btn-default button button-small" href="<?php if (isset($_smarty_tpl->tpl_vars['force_ssl']->value)&&$_smarty_tpl->tpl_vars['force_ssl']->value) {?><?php echo $_smarty_tpl->tpl_vars['base_dir_ssl']->value;?>
<?php } else { ?><?php echo $_smarty_tpl->tpl_vars['base_dir']->value;?>
<?php }?>">
				<span>
					<i class="icon-chevron-left"></i><?php echo smartyTranslate(array('s'=>'Home'),$_smarty_tpl);?>

				</span>
			</a>
		</li>
	</ul>
<?php } elseif (isset($_smarty_tpl->tpl_vars['alreadySent']->value)) {?>
	<p class="alert alert-warning"><?php echo smartyTranslate(array('s'=>'Your message has already been sent.'),$_smarty_tpl);?>
</p>
	<ul class="footer_links clearfix">
		<li>
			<a class="btn btn-default button button-small" href="<?php if (isset($_smarty_tpl->tpl_vars['force_ssl']->value)&&$_smarty_tpl->tpl_vars['force_ssl']->value) {?><?php echo $_smarty_tpl->tpl_vars['base_dir_ssl']->value;?>
<?php } else { ?><?php echo $_smarty_tpl->tpl_vars['base_dir']->value;?>
<?php }?>">
				<span>
					<i class="icon-chevron-left"></i><?php echo smartyTranslate(array('s'=>'Home'),$_smarty_tpl);?>

				</span>
			</a>
		</li>
	</ul>
<?php } else { ?>
	<?php echo $_smarty_tpl->getSubTemplate (((string)$_smarty_tpl->tpl_vars['tpl_dir']->value)."./errors.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

	<form action="<?php echo $_smarty_tpl->tpl_vars['request_uri']->value;?>
" method="post" class="kiriZuljaZ contact-form-box" enctype="multipart/form-data">
		<fieldset>
			<h3 class="page-subheading"><?php echo smartyTranslate(array('s'=>'send a message'),$_smarty_tpl);?>
</h3>
			<div class="clearfix">
				<div class="col-xs-12 col-md-12">
					
						<input type="hidden" name="id_contact" value="1">
				
						<p id="desc_contact0" class="desc_contact<?php if (isset($_REQUEST['id_contact'])) {?> unvisible<?php }?>">&nbsp;</p>
						<?php  $_smarty_tpl->tpl_vars['contact'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['contact']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['contacts']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['contact']->key => $_smarty_tpl->tpl_vars['contact']->value) {
$_smarty_tpl->tpl_vars['contact']->_loop = true;
?>
							<p id="desc_contact<?php echo intval($_smarty_tpl->tpl_vars['contact']->value['id_contact']);?>
" class="desc_contact contact-title<?php if (!isset($_REQUEST['id_contact'])||intval($_REQUEST['id_contact'])!=intval($_smarty_tpl->tpl_vars['contact']->value['id_contact'])) {?> unvisible<?php }?>">
								<i class="icon-comment-alt"></i><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['contact']->value['description'], ENT_QUOTES, 'UTF-8', true);?>

							</p>
						<?php } ?>
					<p class="text">
    <label for="extrafield2" id="fullnamez"> Ime i prezime </label>
    <?php if (isset($_smarty_tpl->tpl_vars['customerThread']->value['extrafield2'])) {?>
        <input type="text" id="extrafield2" class="form-control grey validate" name="extrafield2" value="<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['customerThread']->value['extrafield2'], ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
" readonly="readonly" />
    <?php } else { ?>
        <input type="text" id="extrafield2" class="form-control grey validate" name="extrafield2" value="" />
    <?php }?>
</p> 
<p class="text" style="display:none;">
    <label for="extrafield3" id="tipForme"> Tip forme </label>
    <?php if (isset($_smarty_tpl->tpl_vars['customerThread']->value['extrafield3'])) {?>
        <input type="text" id="extrafield3" class="form-control grey validate" name="extrafield3" value="kontakt" readonly="readonly" />
    <?php } else { ?>
        <input type="text" id="extrafield3" class="form-control grey validate" name="extrafield3" value="kontakt" />
    <?php }?>
</p>   		
<p class="text"  style="display:none;">
    <label for="extrafield4" id="brojTelefona">  Broj telefona  </label>
    <?php if (isset($_smarty_tpl->tpl_vars['customerThread']->value['extrafield4'])) {?>
        <input type="text" id="extrafield4" class="form-control grey validate" name="extrafield4" value="<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['customerThread']->value['extrafield4'], ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
" readonly="readonly" />
    <?php } else { ?>
        <input type="text" id="extrafield4" class="form-control grey validate" name="extrafield4" value="" />
    <?php }?>
</p>   		
<p class="text"  style="display:none;">
    <label for="extrafield5" id="brojVasePordzbine"> Broj vaše pordžbine </label>
    <?php if (isset($_smarty_tpl->tpl_vars['customerThread']->value['extrafield5'])) {?>
        <input type="text" id="extrafield5" class="form-control grey validate" name="extrafield5" value="<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['customerThread']->value['extrafield5'], ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
" readonly="readonly" />
    <?php } else { ?>
        <input type="text" id="extrafield5" class="form-control grey validate" name="extrafield5" value="" />
    <?php }?>
</p>   		  		
					
					<p class="form-group">
						<label for="email"><?php echo smartyTranslate(array('s'=>'Email address'),$_smarty_tpl);?>
</label>
						<?php if (isset($_smarty_tpl->tpl_vars['customerThread']->value['email'])) {?>
							<input class="form-control grey" type="text" id="email" name="from" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['customerThread']->value['email'], ENT_QUOTES, 'UTF-8', true);?>
" readonly="readonly" />
						<?php } else { ?>
							<input class="form-control grey validate" type="text" id="email" name="from" data-validate="isEmail" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['email']->value, ENT_QUOTES, 'UTF-8', true);?>
" />
						<?php }?>
					</p>
					<?php if (!$_smarty_tpl->tpl_vars['PS_CATALOG_MODE']->value) {?>

						<p class="text">
    <label for="extrafield" id="subject">Naslov poruke</label>
    <?php if (isset($_smarty_tpl->tpl_vars['customerThread']->value['extrafield'])) {?>
        <input class="form-control grey " type="text" id="extrafield" name="extrafield" value="<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['customerThread']->value['extrafield'], ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
" readonly="readonly" />
    <?php } else { ?>
        <input class="form-control grey validate" type="text" id="extrafield" name="extrafield" value="" />
    <?php }?>
</p> 
					<?php }?>
				</div>
				<div class="col-xs-12 col-md-12">
					<div class="form-group">
						<label for="message"><?php echo smartyTranslate(array('s'=>'Message'),$_smarty_tpl);?>
</label>
						<textarea class="form-control" id="message" name="message"><?php if (isset($_smarty_tpl->tpl_vars['message']->value)) {?><?php echo stripslashes(htmlspecialchars($_smarty_tpl->tpl_vars['message']->value, ENT_QUOTES, 'UTF-8', true));?>
<?php }?></textarea>
					</div>
				</div>
			</div>
			<div class="submit">
				<button type="submit" name="submitMessage" id="submitMessage" class="button btn btn-default button-medium"><span><?php echo smartyTranslate(array('s'=>'Send'),$_smarty_tpl);?>
<i class="icon-chevron-right right"></i></span></button>
			</div>
		</fieldset>
	</form>
	<div class="grizuljZ">
	<script src='https://maps.googleapis.com/maps/api/js?v=3.exp&key=	AIzaSyA8lxSz1etkQ8J0ZzTJ97R2NTvQIQQ_2NM'></script>
<div style='border:1px solid rgba(6,4,3,0.1);overflow:hidden;height:597px;width:100%; -moz-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;-webkit-box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;box-shadow: rgba(0, 0, 0, 0.17) 0px 5px 13px;'>
<div id='gmap_canvas' style='height:597px;width:100%;'>
</div></div> 

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


//--></script>
	</div>
<?php }?>
<?php $_smarty_tpl->smarty->_tag_stack[] = array('addJsDefL', array('name'=>'contact_fileDefaultHtml')); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'contact_fileDefaultHtml'), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>
<?php echo smartyTranslate(array('s'=>'No file selected','js'=>1),$_smarty_tpl);?>
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'contact_fileDefaultHtml'), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>

<?php $_smarty_tpl->smarty->_tag_stack[] = array('addJsDefL', array('name'=>'contact_fileButtonHtml')); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'contact_fileButtonHtml'), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>
<?php echo smartyTranslate(array('s'=>'Choose File','js'=>1),$_smarty_tpl);?>
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'contact_fileButtonHtml'), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>

<?php }} ?>
