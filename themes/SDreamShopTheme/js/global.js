/*
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
*/
//global variables
var responsiveflag = false;

$(document).ready(function(){

	highdpiInit();
	responsiveResize();
	$(window).resize(responsiveResize);
	if (navigator.userAgent.match(/Android/i))
	{
		var viewport = document.querySelector('meta[name="viewport"]');
		viewport.setAttribute('content', 'initial-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width,height=device-height');
		window.scrollTo(0, 1);
	}
	if (typeof quickView !== 'undefined' && quickView)
		quick_view();
	dropDown();

	if (typeof page_name != 'undefined' && !in_array(page_name, ['index', 'product']))
	{
		bindGrid();

		$(document).on('change', '.selectProductSort', function(e){
			if (typeof request != 'undefined' && request)
				var requestSortProducts = request;
			var splitData = $(this).val().split(':');
			var url = '';
			if (typeof requestSortProducts != 'undefined' && requestSortProducts)
			{
				url += requestSortProducts ;
				if (typeof splitData[0] !== 'undefined' && splitData[0])
				{
					url += ( requestSortProducts.indexOf('?') < 0 ? '?' : '&') + 'orderby=' + splitData[0];
					if (typeof splitData[1] !== 'undefined' && splitData[1])
						url += '&orderway=' + splitData[1];
				}
				document.location.href = url;
			}
		});

		$(document).on('change', 'select[name="n"]', function(){
			$(this.form).submit();
		});

		$(document).on('change', 'select[name="currency_payment"]', function(){
			setCurrency($(this).val());
		});
	}

	$(document).on('change', 'select[name="manufacturer_list"], select[name="supplier_list"]', function(){
		if (this.value != '')
			location.href = this.value;
	});



	jQuery.curCSS = jQuery.css;
	if (!!$.prototype.cluetip)
		$('a.cluetip').cluetip({
			local:true,
			cursor: 'pointer',
			dropShadow: false,
			dropShadowSteps: 0,
			showTitle: false,
			tracking: true,
			sticky: false,
			mouseOutClose: true,
			fx: {
				open:       'fadeIn',
				openSpeed:  'fast'
			}
		}).css('opacity', 0.8);

	if (typeof(FancyboxI18nClose) !== 'undefined' && typeof(FancyboxI18nNext) !== 'undefined' && typeof(FancyboxI18nPrev) !== 'undefined' && !!$.prototype.fancybox)
		$.extend($.fancybox.defaults.tpl, {
			closeBtn : '<a title="' + FancyboxI18nClose + '" class="fancybox-item fancybox-close" href="javascript:;"></a>',
			next     : '<a title="' + FancyboxI18nNext + '" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
			prev     : '<a title="' + FancyboxI18nPrev + '" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
		});

	// Close Alert messages
	$(".alert.alert-danger").on('click', this, function(e){
		if (e.offsetX >= 16 && e.offsetX <= 39 && e.offsetY >= 16 && e.offsetY <= 34)
			$(this).fadeOut();
	});
	$( ".logoutZ" ).click(function() {
            window.location.href = 'https://www.sdream.rs/';
		});
		
 	$('#kazinka1 ').css('visibility','visible');
        $( '#header #search_block_top' ).css('visibility','visible');
		
	  
	

	if (!!$.prototype.bxSlider)
	 var slider0 = 	$('.bxslider-hometabs').bxSlider({
			minSlides: 1,
			maxSlides: 8,
			slideWidth:300,
			slideMargin: 0,
			speed:500,		
			controls: true,
			nextText: '',
			responsive:true,
			prevText: '',
			moveSlides:1,
			responsive:true,
			infiniteLoop:false,
			hideControlOnEnd:false,
    			onSlideNext: function (){next(slider0.getCurrentSlide());console.log(slider0.getCurrentSlide());},
    			onSlidePrev: function (){prev(slider0.getCurrentSlide());console.log(slider0.getCurrentSlide());}
					});
		if (!!$.prototype.bxSlider)
	var slider = $('.bxslider-hometabs2').bxSlider({
			minSlides: 1,
			maxSlides: 7,
			slideWidth:300,
			slideMargin: 0,
			speed:500,
			nextText: '',
			prevText: '',
			moveSlides:1,
			responsive:true,
			infiniteLoop:false,
			hideControlOnEnd:false,
    			onSlideNext: function (){next2(slider.getCurrentSlide()); console.log(slider.getCurrentSlide());},
    			onSlidePrev: function (){prev2(slider.getCurrentSlide()); console.log(slider.getCurrentSlide());}
		});
		
$("#krkinja").click(function(){
        
var kalem = document.getElementById('ciloralac').innerHTML;
if(kalem === '1'){
  $('#cczz33').css('height','100%');
  document.getElementById('ciloralac').innerHTML = '2';
  }
  else{
  $('#cczz33').css('height','70px');
  document.getElementById('ciloralac').innerHTML = '1';
  }
    });	
		
		
	let x = document.getElementById('kkeess');
	$( x ).hover(
  function() {
    	$(x).append('<ul class="kemerez makenbe1" id="eeeeez" style="opacity:1!important;"> <li> <ul class="nav-dropdown" style="width: auto;position: absolute;top: 20px;"> <li><a id="fiokaLezajZen" href="https://www.sdream.rs/sr/dodaci-za-krevete/fioka-lezaj-za-povisene-krevete/">Fioka ležaj</a></li><li><a id="fiokaZaPosteljinuZen" href="https://www.sdream.rs/sr/dodaci-za-krevete/fioka-za-posteljinu/">Fioka za posteljinu</a></li><li><a id="maskaUznozjaSamacZen" href="https://www.sdream.rs/sr/dodaci-za-krevete/maska-uznozja-samac/">Maska uznožja - samac</a></li><li><a id="maskaUznozjaBracniZen" href="https://www.sdream.rs/sr/dodaci-za-krevete/maska-uznozja-bracni/">Maska uznožja - bračni</a></li><li><a id="naslonSofeZen" href="https://www.sdream.rs/sr/dodaci-za-krevete/naslon-sofe-ili-ogradica-spratnog/">Naslon sofe ili ogradica spratnog</a></li><li><a id="nocniOrmaricZen" href="https://www.sdream.rs/sr/dodaci-za-krevete/nocni-ormaric-n-2/">Noćni ormarić N - 2</a></li></ul> </li></ul>');	

  }, function() {
   setTimeout(function(){  $( '#eeeeez' ).remove();  }, 300); 

  }
);
});



function next(slide){			if(windowWidthZ()<500){
						if(slide == 22){ 
         						setTimeout(function(){
         							$('#homefeatured').css('transiton','0.3s');
         							$('#homefeatured').css('right','30px');
         								}, 1);
         						}	}
					if(windowWidthZ()>1200){
					if(slide == 19){ 
					setTimeout(function(){
         				console.log('cetiri cetiri');
         				$('#homefeatured').css('right','-30px');
         				
      						
      						}, 500);
      						}
      						}
      						}  
function prev(slide){			if(windowWidthZ()<500){
						if(slide == 21){ 
							setTimeout(function(){
         						console.log('cetiri cetiri');
         						$('#homefeatured').css('right','0px');
         						}, 1);
         					}	}
					if(windowWidthZ()>1200){
						if(slide == 18){ 
							setTimeout(function(){
         							console.log('cetiri cetiri');
         							$('#homefeatured').css('right','0px');
         				
      								}, 500);
      								}
      							}
      							}
function next2(slide2){			if(windowWidthZ()<500){
						if(slide2 == 6){ 
         				setTimeout(function(){
         				$('#featuredcategory').css('transiton','0.3s');
         				$('#featuredcategory').css('right','30px');
         				}, 1);
         				}}
					if(windowWidthZ()>1200){
					if(slide2 == 3){ 
         				console.log('cetiri cetiri');
         				$('#featuredcategory').css('right','-30px');
         					}
      						} 
      						} 
function prev2(slide2){			
					if(windowWidthZ()<500){
						if(slide2 == 5){ 
         				setTimeout(function(){
         				$('#featuredcategory').css('transiton','0.3s');
         				$('#featuredcategory').css('right','00px');
         				}, 1);
         				}}
					if(windowWidthZ()>1200){
					if(slide2 == 2){ 
         				console.log('cetiri cetiri');
         				$('#featuredcategory').css('right','0px');
         				
      						}
      						
      						}
      						
      						}
      						
function windowWidthZ() {
  var w = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    w = window.innerWidth;
  } else if( document.documentElement && ( document.documentElement.clientWidth) ) {
    w = document.documentElement.clientWidth;
  } else if( document.body && ( document.body.clientWidth  ) ) {
    w = document.body.clientWidth;
  }
  return w;

 }      						
  
function highdpiInit()
{
	if (typeof highDPI === 'undefined')
		return;
	if(highDPI && $('.replace-2x').css('font-size') == "1px")
	{
		var els = $("img.replace-2x").get();
		for(var i = 0; i < els.length; i++)
		{
			src = els[i].src;
			extension = src.substr( (src.lastIndexOf('.') +1) );
			src = src.replace("." + extension, "2x." + extension);

			var img = new Image();
			img.src = src;
			img.height != 0 ? els[i].src = src : els[i].src = els[i].src;
		}
	}
}


// Used to compensante Chrome/Safari bug (they don't care about scroll bar for width)
function scrollCompensate()
{
	var inner = document.createElement('p');
	inner.style.width = "100%";
	inner.style.height = "200px";

	var outer = document.createElement('div');
	outer.style.position = "absolute";
	outer.style.top = "0px";
	outer.style.left = "0px";
	outer.style.visibility = "hidden";
	outer.style.width = "200px";
	outer.style.height = "150px";
	outer.style.overflow = "hidden";
	outer.appendChild(inner);

	document.body.appendChild(outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 == w2) w2 = outer.clientWidth;

	document.body.removeChild(outer);

	return (w1 - w2);
}

function responsiveResize()
{
	compensante = scrollCompensate();
	if (($(window).width()+scrollCompensate()) <= 767 && responsiveflag == false)
	{
		accordion('enable');
		accordionFooter('enable');
		responsiveflag = true;
	}
	else if (($(window).width()+scrollCompensate()) >= 768)
	{
		accordion('disable');
		accordionFooter('disable');
		responsiveflag = false;
		if (typeof bindUniform !=='undefined')
			bindUniform();
	}
	blockHover();
}

function blockHover(status)
{
	var screenLg = $('body').find('.container').width() == 1170;

	if ($('.product_list').is('.grid'))
		if (screenLg)
			$('.product_list .button-container').hide();
		else
			$('.product_list .button-container').show();

	$(document).off('mouseenter').on('mouseenter', '.product_list.grid li.ajax_block_product .product-container', function(e){
		if (screenLg)
		{
			var pcHeight = $(this).parent().outerHeight();
			var pcPHeight = $(this).parent().find('.button-container').outerHeight() + $(this).parent().find('.comments_note').outerHeight() + $(this).parent().find('.functional-buttons').outerHeight();
			
			$(this).find('.button-container').show();
		}
	});

	$(document).off('mouseleave').on('mouseleave', '.product_list.grid li.ajax_block_product .product-container', function(e){
		if (screenLg)
		{
			$(this).parent().removeClass('hovered').css({'height':'auto', 'margin-bottom':'0'});
			$(this).find('.button-container').hide();
		}
	});
}

function quick_view()
{
	$(document).on('click', '.quick-view:visible, .quick-view-mobile:visible', function(e){
		e.preventDefault();
		var url = this.rel;
		var anchor = '';

		if (url.indexOf('#') != -1)
		{
			anchor = url.substring(url.indexOf('#'), url.length);
			url = url.substring(0, url.indexOf('#'));
		}

		if (url.indexOf('?') != -1)
			url += '&';
		else
			url += '?';

		if (!!$.prototype.fancybox)
			$.fancybox({
				'padding':  0,
				'width':    1087,
				'height':   610,
				'type':     'iframe',
				'href':     url + 'content_only=1' + anchor
			});
	});
}

function bindGrid()
{
	var storage = false;
	if (typeof(getStorageAvailable) !== 'undefined') {
		storage = getStorageAvailable();
	}
	if (!storage) {
		return;
	}

	var view = $.totalStorage('display');

	if (!view && (typeof displayList != 'undefined') && displayList)
		view = 'list';

	if (view && view != 'grid')
		display(view);
	else
		$('.display').find('li#grid').addClass('selected');

	$(document).on('click', '#grid', function(e){
		e.preventDefault();
		display('grid');
	});

	$(document).on('click', '#list', function(e){
		e.preventDefault();
		display('list');
	});
}

function display(view)
{
	if (view == 'list')
	{
		$('ul.product_list').removeClass('grid').addClass('list row');
		$('.product_list > li').removeClass('col-xs-12 col-sm-6 col-md-4').addClass('col-xs-12');
		$('.product_list > li').each(function(index, element) {
			var html = '';
			html = '<div class="product-container"><div class="row">';
			html += '<div class="left-block col-xs-4 col-sm-5 col-md-4">' + $(element).find('.left-block').html() + '</div>';
			html += '<div class="center-block col-xs-4 col-sm-7 col-md-4">';
			html += '<div class="product-flags">'+ $(element).find('.product-flags').html() + '</div>';
			html += '<h5 itemprop="name">'+ $(element).find('h5').html() + '</h5>';
			var hookReviews = $(element).find('.hook-reviews');
			if (hookReviews.length) {
				html += hookReviews.clone().wrap('<div>').parent().html();
			}
			html += '<p class="product-desc">'+ $(element).find('.product-desc').html() + '</p>';
			var colorList = $(element).find('.color-list-container').html();
			if (colorList != null) {
				html += '<div class="color-list-container">'+ colorList +'</div>';
			}
			var availability = $(element).find('.availability').html();	// check : catalog mode is enabled
			if (availability != null) {
				html += '<span class="availability">'+ availability +'</span>';
			}
			html += '</div>';
			html += '<div class="right-block col-xs-4 col-sm-12 col-md-4"><div class="right-block-content row">';
			var price = $(element).find('.content_price').html();       // check : catalog mode is enabled
			if (price != null) {
				html += '<div class="content_price col-xs-5 col-md-12">'+ price + '</div>';
			}
			html += '<div class="button-container col-xs-7 col-md-12">'+ $(element).find('.button-container').html() +'</div>';
			html += '<div class="functional-buttons clearfix col-sm-12">' + $(element).find('.functional-buttons').html() + '</div>';
			html += '</div>';
			html += '</div></div>';
			$(element).html(html);
		});
		$('.display').find('li#list').addClass('selected');
		$('.display').find('li#grid').removeAttr('class');
		$.totalStorage('display', 'list');
	}
	else
	{
		$('ul.product_list').removeClass('list').addClass('grid row');
		$('.product_list > li').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-4');
		$('.product_list > li').each(function(index, element) {
			var html = '';
			html += '<div class="product-container">';
			html += '<div class="left-block">' + $(element).find('.left-block').html() + '</div>';
			html += '<div class="right-block">';
			html += '<div class="product-flags">'+ $(element).find('.product-flags').html() + '</div>';
			html += '<h5 itemprop="name">'+ $(element).find('h5').html() + '</h5>';
			var hookReviews = $(element).find('.hook-reviews');
			if (hookReviews.length) {
				html += hookReviews.clone().wrap('<div>').parent().html();
			}
			html += '<p itemprop="description" class="product-desc">'+ $(element).find('.product-desc').html() + '</p>';
			var price = $(element).find('.content_price').html(); // check : catalog mode is enabled
			if (price != null) {
				html += '<div class="content_price">'+ price + '</div>';
			}
			html += '<div itemprop="offers" itemscope itemtype="https://schema.org/Offer" class="button-container">'+ $(element).find('.button-container').html() +'</div>';
			var colorList = $(element).find('.color-list-container').html();
			if (colorList != null) {
				html += '<div class="color-list-container">'+ colorList +'</div>';
			}
			var availability = $(element).find('.availability').html(); // check : catalog mode is enabled
			if (availability != null) {
				html += '<span class="availability">'+ availability +'</span>';
			}
			html += '</div>';
			html += '<div class="functional-buttons clearfix">' + $(element).find('.functional-buttons').html() + '</div>';
			html += '</div>';
			$(element).html(html);
		});
		$('.display').find('li#grid').addClass('selected');
		$('.display').find('li#list').removeAttr('class');
		$.totalStorage('display', 'grid');
	}
}

function dropDown()
{
	elementClick = '#header .current';
	elementSlide =  'ul.toogle_content';
	activeClass = 'active';

	$(elementClick).on('click', function(e){
		e.stopPropagation();
		var subUl = $(this).next(elementSlide);
		if(subUl.is(':hidden'))
		{
			subUl.slideDown();
			$(this).addClass(activeClass);
		}
		else
		{
			subUl.slideUp();
			$(this).removeClass(activeClass);
		}
		$(elementClick).not(this).next(elementSlide).slideUp();
		$(elementClick).not(this).removeClass(activeClass);
		e.preventDefault();
	});

	$(elementSlide).on('click', function(e){
		e.stopPropagation();
	});

	$(document).on('click', function(e){
		e.stopPropagation();
		var elementHide = $(elementClick).next(elementSlide);
		$(elementHide).slideUp();
		$(elementClick).removeClass('active');
	});
}

function accordionFooter(status)
{
	if(status == 'enable')
	{
		$('#footer .footer-block h4').on('click', function(e){
			$(this).toggleClass('active').parent().find('.toggle-footer').stop().slideToggle('medium');
			e.preventDefault();
		})
		$('#footer').addClass('accordion').find('.toggle-footer').slideUp('fast');
	}
	else
	{
		$('.footer-block h4').removeClass('active').off().parent().find('.toggle-footer').removeAttr('style').slideDown('fast');
		$('#footer').removeClass('accordion');
	}
}

function accordion(status)
{
	if(status == 'enable')
	{
		var accordion_selector = '#right_column .block .title_block, #left_column .block .title_block, #left_column #newsletter_block_left h4,' +
								'#left_column .shopping_cart > a:first-child, #right_column .shopping_cart > a:first-child';

		$(accordion_selector).on('click', function(e){
			$(this).toggleClass('active').parent().find('.block_content').stop().slideToggle('medium');
		});
		$('#right_column, #left_column').addClass('accordion').find('.block .block_content').slideUp('fast');
		if (typeof(ajaxCart) !== 'undefined')
			ajaxCart.collapse();
	}
	else
	{
		$('#right_column .block .title_block, #left_column .block .title_block, #left_column #newsletter_block_left h4').removeClass('active').off().parent().find('.block_content').removeAttr('style').slideDown('fast');
		$('#left_column, #right_column').removeClass('accordion');
	}
}

function bindUniform()
{
	if (!!$.prototype.uniform)
		$("select.form-control,input[type='radio'],input[type='checkbox']").not(".not_uniform").uniform();
}
