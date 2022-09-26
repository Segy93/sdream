<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:30:34
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/homefeatured/homefeatured.tpl" */ ?>
<?php /*%%SmartyHeaderCode:500758456324342a1a7c13-85789823%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a34efd55f313e90c7c21c5d0942976321f3d3d45' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/homefeatured/homefeatured.tpl',
      1 => 1494957224,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '500758456324342a1a7c13-85789823',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'products' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324342a1eada1_81730290',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324342a1eada1_81730290')) {function content_6324342a1eada1_81730290($_smarty_tpl) {?>
<?php if (isset($_smarty_tpl->tpl_vars['products']->value)&&$_smarty_tpl->tpl_vars['products']->value) {?>
<script>




alertSize();
window.addEventListener("resize", alertSize);


function alertSize() {
  var w = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    w = window.innerWidth;
  } else if( document.documentElement && ( document.documentElement.clientWidth) ) {
    w = document.documentElement.clientWidth;
  } else if( document.body && ( document.body.clientWidth  ) ) {
    w = document.body.clientWidth;
  }
  if(w<480){
	var w2=(w-300)/2;
	$( ".ajax_block_product" ).each(function() {
    $( this ).css('margin-left',w2+'px');
	$( this ).css('margin-right',w2+'px');
  });
 }
 else{
	$( ".ajax_block_product" ).each(function() {
    $( this ).css('margin-left','0px');
	$( this ).css('margin-right','0px');
  });
 
 }

}



</script>
	<?php echo $_smarty_tpl->getSubTemplate (((string)$_smarty_tpl->tpl_vars['tpl_dir']->value)."./product-list.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array('class'=>'homefeatured tab-pane bxslider-hometabs','id'=>'homefeatured'), 0);?>

	<div id="slide-counter"></div>
<?php } else { ?>
<ul id="homefeatured" class="homefeatured tab-pane">
	<h1>Featured projects</h1>
	<li class="alert alert-info"><?php echo smartyTranslate(array('s'=>'No featured products at this time.','mod'=>'homefeatured'),$_smarty_tpl);?>
</li>
</ul>
<?php }?>
<script>
(function ($) {

    var bxSlider = jQuery.fn.bxSlider;
    var $window = $(window);

    jQuery.fn.bxSlider = function () {

        var slider = bxSlider.apply(this, arguments);

        if (!this.length || !arguments[0].mouseDrag) {
            return slider;
        }

        var posX;
        var $viewport = this.parents('.bx-viewport');

        $viewport
            .on('dragstart', dragHandler)
            .on('mousedown', mouseDownHandler);

        function dragHandler(e) {
            e.preventDefault();
        }

        function mouseDownHandler(e) {

            posX = e.pageX;

            $window.on('mousemove.bxSlider', mouseMoveHandler);
        }

        function mouseMoveHandler(e) {

            if (posX < e.pageX) {
                slider.goToPrevSlide();
            } else {
                slider.goToNextSlide();
            }

            $window.off('mousemove.bxSlider');
        }

        return slider;
    };

})(jQuery);
</script><?php }} ?>
