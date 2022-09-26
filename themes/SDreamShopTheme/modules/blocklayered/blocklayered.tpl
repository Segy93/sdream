{*
* 2007-2016 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* https://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to https://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2016 PrestaShop SA
*  @license    https://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registred Trademark & Property of PrestaShop SA
*}

{if $nbr_filterBlocks != 0}
<div id="layered_block_left" class="block">
	<p class="title_block">Filter</p>
	<div class="block_content">
		<form action="#" id="layered_form">
			<div>
				{if isset($selected_filters) && $n_filters > 0}
				<div id="enabled_filters">
					<span class="layered_subtitle" style="float: none;">
						{l s='Enabled filters:' mod='blocklayered'}
					</span>
					<ul>
						{foreach from=$selected_filters key=filter_type item=filter_values}
							{foreach from=$filter_values key=filter_key item=filter_value name=f_values}
								{foreach from=$filters item=filter}
									{if $filter.type == $filter_type && isset($filter.values)}
										{if isset($filter.slider)}
											{if $smarty.foreach.f_values.first}
												<li>
													<a href="#" data-rel="layered_{$filter.type}_slider" title="{l s='Cancel' mod='blocklayered'}"></a>
													{if $filter.format == 1}
														{l s='%1$s: %2$s - %3$s'|sprintf:$filter.name:{displayPrice price=$filter.values[0]}:{displayPrice price=$filter.values[1]}|escape:'html':'UTF-8' mod='blocklayered'}
													{else}
														{l s='%1$s: %2$s %4$s - %3$s %4$s'|sprintf:$filter.name:$filter.values[0]:$filter.values[1]:$filter.unit|escape:'html':'UTF-8' mod='blocklayered'}
													{/if}
												</li>
											{/if}
										{else}
											{foreach from=$filter.values key=id_value item=value}
												{if $id_value == $filter_key && !is_numeric($filter_value) && ($filter.type eq 'id_attribute_group' || $filter.type eq 'id_feature') || $id_value == $filter_value && $filter.type neq 'id_attribute_group' && $filter.type neq 'id_feature'}
													<li>
														<a href="#" data-rel="layered_{$filter.type_lite}_{$id_value}" title="{l s='Cancel' mod='blocklayered'}"><i class="icon-remove"></i></a>
														{l s='%1$s: %2$s' mod='blocklayered' sprintf=[$filter.name, $value.name]}
													</li>
												{/if}
											{/foreach}
										{/if}
									{/if}
								{/foreach}
							{/foreach}
						{/foreach}
					</ul>
				</div>
				{/if}
				{$op1=''}
				{foreach from=$filters item=filter}
					
					{if isset($filter.values)}
							
						{if isset($filter.slider)}
							<div class="layered_{$filter.type}" style="display: none;">
						{else}
							<div class="layered_filter{$op1++}">
						{/if}
                        <div class="layered_subtitle_heading">
                            <span class="layered_subtitle">{$filter.name|escape:'html':'UTF-8'}</span>
                            <!--<span class="layered_close">
                            	<a href="#" data-rel="ul_layered_{$filter.type}_{$filter.id_key}"></a>
                            </span>-->
						</div>
						<ul id="ul_layered_{$filter.type}_{$filter.id_key}" class="col-lg-12 layered_filter_ul{if isset($filter.is_color_group) && $filter.is_color_group} color-group{/if}">
							{if !isset($filter.slider)}
								{if $filter.filter_type == 0}
									{foreach from=$filter.values key=id_value item=value name=fe}
										{if $value.nbr || !$hide_0_values}
										<li class="nomargin {if $smarty.foreach.fe.index >= $filter.filter_show_limit}hiddable{/if} col-lg-12">
											{if isset($filter.is_color_group) && $filter.is_color_group}
												<input class="color-option {if isset($value.checked) && $value.checked}on{/if} {if !$value.nbr}disable{/if}" type="button" name="layered_{$filter.type_lite}_{$id_value}" data-rel="{$id_value}_{$filter.id_key}" id="layered_id_attribute_group_{$id_value}" {if !$value.nbr}disabled="disabled"{/if} style="background: {if isset($value.color)}{if file_exists($smarty.const._PS_ROOT_DIR_|cat:"/img/co/$id_value.jpg")}url(img/co/{$id_value}.jpg){else}{$value.color}{/if}{else}#CCC{/if};" />
												{if isset($value.checked) && $value.checked}<input type="hidden" name="layered_{$filter.type_lite}_{$id_value}" value="{$id_value}" />{/if}
											{else}
												<input type="checkbox" class="checkbox" name="layered_{$filter.type_lite}_{$id_value}" id="layered_{$filter.type_lite}{if $id_value || $filter.type == 'quantity'}_{$id_value}{/if}" value="{$id_value}{if $filter.id_key}_{$filter.id_key}{/if}"{if isset($value.checked)} checked="checked"{/if}{if !$value.nbr} disabled="disabled"{/if} /> 
											{/if}
											<label for="layered_{$filter.type_lite}_{$id_value}"{if !$value.nbr} class="disabled"{else}{if isset($filter.is_color_group) && $filter.is_color_group} name="layered_{$filter.type_lite}_{$id_value}" class="layered_color" data-rel="{$id_value}_{$filter.id_key}"{/if}{/if}>
												{if !$value.nbr}
												{$value.name|escape:'html':'UTF-8'}{if $layered_show_qties}<span> ({$value.nbr})</span>{/if}
												{else}
												<a href="{$value.link}"{if $value.rel|trim != ''} data-rel="{$value.rel}"{/if}>{$value.name|escape:'html':'UTF-8'}{if $layered_show_qties}<span> ({$value.nbr})</span>{/if}</a>
												{/if}
											</label>
										</li>
										{/if}
									{/foreach}
								{else}
									{if $filter.filter_type == 1}
									{foreach from=$filter.values key=id_value item=value name=fe}
										{if $value.nbr || !$hide_0_values}
										<li class="nomargin {if $smarty.foreach.fe.index >= $filter.filter_show_limit}hiddable{/if}">
											{if isset($filter.is_color_group) && $filter.is_color_group}
												<input class="radio color-option {if isset($value.checked) && $value.checked}on{/if} {if !$value.nbr}disable{/if}" type="button" name="layered_{$filter.type_lite}_{$id_value}" data-rel="{$id_value}_{$filter.id_key}" id="layered_id_attribute_group_{$id_value}" {if !$value.nbr}disabled="disabled"{/if} style="background: {if isset($value.color)}{if file_exists($smarty.const._PS_ROOT_DIR_|cat:"/img/co/$id_value.jpg")}url(img/co/{$id_value}.jpg){else}{$value.color}{/if}{else}#CCC{/if};"/>
												{if isset($value.checked) && $value.checked}<input type="hidden" name="layered_{$filter.type_lite}_{$id_value}" value="{$id_value}" />{/if}
											{else}
												<input type="radio" class="radio layered_{$filter.type_lite}_{$id_value}" name="layered_{$filter.type_lite}{if $filter.id_key}_{$filter.id_key}{else}_1{/if}" id="layered_{$filter.type_lite}{if $id_value || $filter.type == 'quantity'}_{$id_value}{if $filter.id_key}_{$filter.id_key}{/if}{/if}" value="{$id_value}{if $filter.id_key}_{$filter.id_key}{/if}"{if isset($value.checked)} checked="checked"{/if}{if !$value.nbr} disabled="disabled"{/if} /> 
											{/if}
											<label for="layered_{$filter.type_lite}_{$id_value}"{if !$value.nbr} class="disabled"{else}{if isset($filter.is_color_group) && $filter.is_color_group} name="layered_{$filter.type_lite}_{$id_value}" class="layered_color" data-rel="{$id_value}_{$filter.id_key}"{/if}{/if}>
												{if !$value.nbr}
													{$value.name|escape:'html':'UTF-8'}{if $layered_show_qties}<span> ({$value.nbr})</span>{/if}
												{else}
													<a href="{$value.link}"{if $value.rel|trim != ''} data-rel="{$value.rel}"{/if}>{$value.name|escape:'html':'UTF-8'}{if $layered_show_qties}<span> ({$value.nbr})</span>{/if}</a>
												{/if}
											</label>
										</li>
										{/if}
									{/foreach}
									{else}
										<select class="select form-control" {if $filter.filter_show_limit > 1}multiple="multiple" size="{$filter.filter_show_limit}"{/if}>
											<option value="">{l s='No filters' mod='blocklayered'}</option>
											{foreach from=$filter.values key=id_value item=value}
											{if $value.nbr || !$hide_0_values}
												<option style="color: {if isset($value.color)}{$value.color}{/if}" id="layered_{$filter.type_lite}{if $id_value || $filter.type == 'quantity'}_{$id_value}{/if}" value="{$id_value}_{$filter.id_key}" {if isset($value.checked) && $value.checked}selected="selected"{/if} {if !$value.nbr}disabled="disabled"{/if}>
													{$value.name|escape:'html':'UTF-8'}{if $layered_show_qties}<span> ({$value.nbr})</span>{/if}
												</option>
											{/if}
											{/foreach}
										</select>
									{/if}
								{/if}
							{else}
								{if $filter.filter_type == 0}
								
									<label for="{$filter.type}">
										{l s='Range:' mod='blocklayered'}
									</label> 
									<span id="layered_{$filter.type}_range"></span>
									<div class="layered_slider_container">
										<div class="layered_slider" id="layered_{$filter.type}_slider" data-type="{$filter.type}" data-format="{$filter.format}" data-unit="{$filter.unit}"></div>
									</div>
								{else}
									{if $filter.filter_type == 1}
									<li class="nomargin row">
	                                    <div class="col-xs-6 col-sm-12 col-lg-6 first-item">
	                                    	{l s='From' mod='blocklayered'} 
	                                    	<input class="layered_{$filter.type}_range layered_input_range_min layered_input_range form-control grey" id="layered_{$filter.type}_range_min" type="text" value="{$filter.values[0]}"/>
	                                    	<span class="layered_{$filter.type}_range_unit">
	                                    		{$filter.unit}
	                                    	</span>
	                                    </div>
	                                    <div class="col-xs-6 col-sm-12 col-lg-6">
	                                    	{l s='to' mod='blocklayered'} 
	                                    	<input class="layered_{$filter.type}_range layered_input_range_max layered_input_range form-control grey" id="layered_{$filter.type}_range_max" type="text" value="{$filter.values[1]}"/>
	                                    	<span class="layered_{$filter.type}_range_unit">
	                                    		{$filter.unit}
	                                    	</span>
	                                    </div>
										<span class="layered_{$filter.type}_format" style="display:none;">
											{$filter.format}
										</span>
									</li>
									{else}
									{foreach from=$filter.list_of_values  item=values}
										<li class="nomargin {if $filter.values[1] == $values[1] && $filter.values[0] == $values[0]}layered_list_selected{/if} layered_list" onclick="$('#layered_{$filter.type}_range_min').val({$values[0]});$('#layered_{$filter.type}_range_max').val({$values[1]});reloadContent();">
											- {l s='From' mod='blocklayered'} {$values[0]} {$filter.unit} {l s='to' mod='blocklayered'} {$values[1]} {$filter.unit}
										</li>
									{/foreach}
									<li style="display: none;">
										<input class="layered_{$filter.type}_range" id="layered_{$filter.type}_range_min" type="hidden" value="{$filter.values[0]}"/>
										<input class="layered_{$filter.type}_range" id="layered_{$filter.type}_range_max" type="hidden" value="{$filter.values[1]}"/>
									</li>
									{/if}
								{/if}
							{/if}
							{if count($filter.values) > $filter.filter_show_limit && $filter.filter_show_limit > 0 && $filter.filter_type != 2}
								<span class="hide-action more">{l s='Show more' mod='blocklayered'}</span>
								<span class="hide-action less">{l s='Show less' mod='blocklayered'}</span>
							{/if}
						</ul>
					</div>
					{/if}
					
					{if $filter.id_key == 1}

    
  <div class="yourslider_value"></div>
    <div id="crni23" style="width:91%; margin-left:20px; margin-bottom:21px;"> </div>
	<div id="vrvi" style="display:none">dafs</div>
  <div class="layered_slider yourslider"></div>
  <script type="text/javascript">
     $('#ul_layered_id_feature_1').hide(); 
    var filter = {$filter|json_encode};


	var mikrokozma = Object.keys(filter.values);

	var cekic= 100/(mikrokozma.length+1);

	var arrrrer=[];
	 
	for (j=0;j<mikrokozma.length;j++){
		arrrrer.push(filter.values[mikrokozma[j]].name);
			if(filter.values[mikrokozma[0]].name<15){
			
		 var node = document.createElement("div");
  
     node.setAttribute("id", "range1");
	 node.setAttribute("style", 'float:left; width:'+ cekic +'%;text-align:right; padding-right:6px;');
    var textnode = document.createTextNode(filter.values[mikrokozma[j]].name);

    console.log(filter.values);
    node.appendChild(textnode);
   
   
    document.getElementById("crni23").appendChild(node);

		}
		else{
		var node = document.createElement("div");
		node.setAttribute("id", "range1");
	 node.setAttribute("style", 'float:left; width:'+ cekic +'%;text-align:right; font-weight:bold; ');
    var textnode = document.createTextNode(filter.values[mikrokozma[j]].name);
    node.appendChild(textnode);
   
   
    document.getElementById("crni23").appendChild(node);
		}
			
	}
	arrrrer.sort();
	console.log(arrrrer.sort());
	
	
	



  
   
		
    var sliderVals = new Array();
    var sliderMax = 0;
    var sliderValue = 0;
    for (var i in filter.values){                       
      sliderMax++;
      sliderVals[sliderMax] = filter.values[i]['name'];
     
    }   
 sliderVals.push('kraj'); 
    $('.layered_slider.yourslider').slider({
      max: sliderMax+1,
      values: [sliderValue],                              
      slide: function( event, ui ) {

        stopAjaxQuery();
		
        $('#ul_layered_id_feature_1 input[type="checkbox"]').each(function(i){
          if (i+1 == ui.values[0])
            $(this).prop('checked',true);
          else
            $(this).prop('checked',false);
        })
        if (ui.values[0] > 0){
			$("#layered_ajax_loader").css("visibility", "visible");
		
			var kortuzina =sliderVals[ui.values[0]];
			document.getElementById('vzmanKa').innerHTML =kortuzina;

		 }
		 if (ui.values[0] == (sliderMax+1)){
			
			stopAjaxQuery();
		 }
        else{
          $('.yourslider_value').html('');}
        },
        stop: function () {
		var zuki = $(".yourslider .ui-slider-handle").css("left");
	
	    document.getElementById('vrvi2').innerHTML=zuki;
          reloadContent(); 
		
		 
        },
        create: function() {
          if (sliderValue == 0)
            $('.yourslider_value').html('');
			
        },
		create: function() {
		
	        if($("#vrvi2").length == 0) 
			{


} 
else if($("#vrvi2").html() === 'guzanka')
{

 } 
 else
 {
			
		
		  $(".yourslider .ui-slider-handle").css("left", document.getElementById('vrvi2').innerHTML);
		  myFunction();
		  }
            
			
			
        }
    });
	
	function myFunction() {
    setTimeout(function(){ 
	var brojElZ=$('ul#product_list li').length;
	
	if(brojElZ>12){

	
	}
		
		
		}, 1);
}
	
  </script>

{/if}
{if $filter.id_key == 11}
<span class="layered_subtitle">Jezgro</span>
  <div class="yourslider_value2"></div>
  <div class="layered_slider2 yourslider2"></div>
  <script type="text/javascript">
    $('#ul_layered_id_feature_11').hide();
    var filter2 = {$filter|json_encode};
    var sliderVals2 = new Array();
    var sliderMax2 = 0;
    var sliderValue2 = 0;
    for (var i in filter2.values){                       
      sliderMax2++;
      sliderVals2[sliderMax2] = filter2.values[i]['name'];
      if (filter2.values[i].hasOwnProperty('checked')){
        sliderValue2 = sliderMax2;
        $('.yourslider_value2').html(sliderVals2[sliderValue2]);
      }
    }                           
    $('.layered_slider2.yourslider2').slider({
      max: sliderMax2,
      values: [sliderValue2],                              
      slide: function( event, ui2 ) {
        stopAjaxQuery();
        $('#ul_layered_id_feature_11 input[type="checkbox"]').each(function(i){
          if (i+1 == ui2.values[0])
            $(this).prop('checked',true);
          else
            $(this).prop('checked',false);
        })
        if (ui2.values[0] > 0)
          $('.yourslider_value2').html(sliderVals2[ui2.values[0]]);
        else
          $('.yourslider_value2').html('Niste izabrali ni jedno jezgro');
        },
        stop: function () {
          reloadContent();
        },
        create: function() {
          if (sliderValue2 == 0)
            $('.yourslider_value2').html('Niste izabrali ni jedno jezgro');
			myFunction2();
			
        }
		
    });
	
	
	function myFunction2() {
    setTimeout(function(){ 
	var brojElZ=$('ul#product_list li').length;
	var kukuruzaraC = document.getElementById('vzmanKa').textContent;

	var mikrokozma2 = Object.keys(filter.values);
	var mikrokozma3 = mikrokozma2.length;

	if(kukuruzaraC !== 'guzanka'){
	
		for(z=0;z<mikrokozma3; z++){
		
			var zubonja = filter.values[mikrokozma2[z]].name;
			if($(".yourslider_value2").text() !== 'Niste izabrali ni jedno jezgro'){
				if(kukuruzaraC === zubonja) {
					
				}
			}
			
				
		}
	} 
	if(brojElZ<=12){

	}
	if(brojElZ>12){


	
	}

		}, 1);
}
	
  </script>
{/if} 
				{/foreach}
				  <p class="heading-counter hcounter"></p>
			</div>
				<div style="padding:12px;margin-bottom:12px;height:100%; width:100%;border:1px solid rgba(6,4,3,0.1); border-top:3px solid #606163!important;overflow:hidden;"><p class="title_blockZ">Katalog</p><a id="katalogZen" href="#"><img style="margin:0 auto;" class="img-responsive" src="https://sdream.rs/upload/sdream-katalog.jpg" /></a><a style="width:100%; margin-top:8px;color:white; text-align:center;" class="button  btn btn-default" href="https://www.sdream.rs/upload/katalogS)Dream2016-1.pdf" target="_blank" title="Preuzmi Katalog"> Preuzmite katalog </a></div>
			<input type="hidden" name="id_category_layered" value="{$id_category_layered}" />
			{foreach from=$filters item=filter}
				{if $filter.type_lite == 'id_attribute_group' && isset($filter.is_color_group) && $filter.is_color_group && $filter.filter_type != 2}
					{foreach from=$filter.values key=id_value item=value}
						{if isset($value.checked)}
							<input type="hidden" name="layered_id_attribute_group_{$id_value}" value="{$id_value}_{$filter.id_key}" />
						{/if}
					{/foreach}
				{/if}
			 	
			{/foreach}
	</div>
		</form>

	<div id="layered_ajax_loader" style="display: none;">
		<p>
			<i class="fa fa-spinner fa-spin fa-3x" style="color:#f06423;" aria-hidden="true"></i>
			<br />{l s='Loading...' mod='blocklayered'}
		</p>
	</div>
</div>
{else}
<div id="layered_block_left" class="block">
	<div class="block_content">
		<form action="#" id="layered_form">
			<input type="hidden" name="id_category_layered" value="{$id_category_layered}" />
		</form>
	</div>
	<div style="display: none;">
		<p>
			<i class="fa fa-spinner fa-spin fa-3x" style="color:#f06423;" aria-hidden="true"></i>
			<br />{l s='Loading...' mod='blocklayered'}
		</p>
	</div>
</div>
{/if}
{if $nbr_filterBlocks != 0}
{strip}
	{if version_compare($smarty.const._PS_VERSION_,'1.5','>')}
		{addJsDef param_product_url='#'|cat:$param_product_url}
	{else}
		{addJsDef param_product_url=''}
	{/if}
	{addJsDef blocklayeredSliderName=$blocklayeredSliderName}

	{if isset($filters) && $filters|@count}
		{addJsDef filters=$filters}
	{/if}
{/strip}
{/if}
