<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:14:53
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/blockcart/blockcart.tpl" */ ?>
<?php /*%%SmartyHeaderCode:4585962736324307d925261-94426682%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'fddaa14cef7ca970e2ec65c9cb337d3c49053591' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/blockcart/blockcart.tpl',
      1 => 1570592084,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4585962736324307d925261-94426682',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'blockcart_top' => 0,
    'PS_CATALOG_MODE' => 0,
    'order_process' => 0,
    'link' => 0,
    'cart_qties' => 0,
    'priceDisplay' => 0,
    'blockcart_cart_flag' => 0,
    'cart' => 0,
    'active_overlay' => 0,
    'CUSTOMIZE_TEXTFIELD' => 0,
    'img_dir' => 0,
    'ajax_allowed' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324307d9f94e2_88381061',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324307d9f94e2_88381061')) {function content_6324307d9f94e2_88381061($_smarty_tpl) {?><?php if (!is_callable('smarty_function_counter')) include '/home/sdream/public_html/sdream.rs/tools/smarty/plugins/function.counter.php';
?>
<!-- MODULE Block cart -->
<?php if (isset($_smarty_tpl->tpl_vars['blockcart_top']->value)&&$_smarty_tpl->tpl_vars['blockcart_top']->value) {?>
<div class="col-sm-4 clearfix<?php if ($_smarty_tpl->tpl_vars['PS_CATALOG_MODE']->value) {?> header_user_catalog<?php }?>">
<?php }?>
	<div class="shopping_cart">
		<a class="krkanZ1" href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['link']->value->getPageLink($_smarty_tpl->tpl_vars['order_process']->value,true), ENT_QUOTES, 'UTF-8', true);?>
" title="<?php echo smartyTranslate(array('s'=>'View my shopping cart','mod'=>'blockcart'),$_smarty_tpl);?>
" rel="nofollow">
			<a class="krkanZ" href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['link']->value->getPageLink($_smarty_tpl->tpl_vars['order_process']->value,true), ENT_QUOTES, 'UTF-8', true);?>
" title="<?php echo smartyTranslate(array('s'=>'View my shopping cart','mod'=>'blockcart'),$_smarty_tpl);?>
"><b><?php echo smartyTranslate(array('s'=>'Cart','mod'=>'blockcart'),$_smarty_tpl);?>
</b></a>
			<span class="ajax_cart_quantity<?php if ($_smarty_tpl->tpl_vars['cart_qties']->value==0) {?> unvisible<?php }?>"><?php echo $_smarty_tpl->tpl_vars['cart_qties']->value;?>
</span>
			<span class="ajax_cart_product_txt<?php if ($_smarty_tpl->tpl_vars['cart_qties']->value!=1) {?> unvisible<?php }?>"><?php echo smartyTranslate(array('s'=>'Product','mod'=>'blockcart'),$_smarty_tpl);?>
</span>
			<span class="ajax_cart_product_txt_s<?php if ($_smarty_tpl->tpl_vars['cart_qties']->value<2) {?> unvisible<?php }?>"><?php echo smartyTranslate(array('s'=>'Products','mod'=>'blockcart'),$_smarty_tpl);?>
</span>
			<span class="ajax_cart_total<?php if ($_smarty_tpl->tpl_vars['cart_qties']->value==0) {?> unvisible<?php }?>">
				<?php if ($_smarty_tpl->tpl_vars['cart_qties']->value>0) {?>
					<?php if ($_smarty_tpl->tpl_vars['priceDisplay']->value==1) {?>
						<?php $_smarty_tpl->tpl_vars['blockcart_cart_flag'] = new Smarty_variable(constant('Cart::BOTH_WITHOUT_SHIPPING'), null, 0);?>
						<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['convertPrice'][0][0]->convertPrice(array('price'=>$_smarty_tpl->tpl_vars['cart']->value->getOrderTotal(false,$_smarty_tpl->tpl_vars['blockcart_cart_flag']->value)),$_smarty_tpl);?>

					<?php } else { ?>
						<?php $_smarty_tpl->tpl_vars['blockcart_cart_flag'] = new Smarty_variable(constant('Cart::BOTH_WITHOUT_SHIPPING'), null, 0);?>
						<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['convertPrice'][0][0]->convertPrice(array('price'=>$_smarty_tpl->tpl_vars['cart']->value->getOrderTotal(true,$_smarty_tpl->tpl_vars['blockcart_cart_flag']->value)),$_smarty_tpl);?>

					<?php }?>
				<?php }?>
			</span>
			<span class="ajax_cart_no_product<?php if ($_smarty_tpl->tpl_vars['cart_qties']->value>0) {?> unvisible<?php }?>">0,00</span>
		</a>
	</div>
<?php if (isset($_smarty_tpl->tpl_vars['blockcart_top']->value)&&$_smarty_tpl->tpl_vars['blockcart_top']->value) {?>
</div>
<?php }?>
<?php echo smarty_function_counter(array('name'=>'active_overlay','assign'=>'active_overlay'),$_smarty_tpl);?>

<?php if (!$_smarty_tpl->tpl_vars['PS_CATALOG_MODE']->value&&$_smarty_tpl->tpl_vars['active_overlay']->value==1) {?>
	<div id="layer_cart">
		<div class="clearfix">
			<div class="layer_cart_product col-xs-12 col-md-6">
				<span class="cross" title="<?php echo smartyTranslate(array('s'=>'Close window','mod'=>'blockcart'),$_smarty_tpl);?>
"></span>
				<span class="title">
					<i class="icon-check"></i><?php echo smartyTranslate(array('s'=>'Product successfully added to your shopping cart','mod'=>'blockcart'),$_smarty_tpl);?>

				</span>
				<div class="product-image-container layer_cart_img">
				</div>
				<div class="layer_cart_product_info">
					<span id="layer_cart_product_title" class="product-name"></span>
					<span id="layer_cart_product_attributes"></span>
					<div style="position:relative; top:30px;">
						<strong class="dark"><?php echo smartyTranslate(array('s'=>'Quantity','mod'=>'blockcart'),$_smarty_tpl);?>
</strong>
						<span id="layer_cart_product_quantity"></span>
					</div>
					<div class="zikuZaki">
						<strong style="position:relative; top:40px;" class="dark"><?php echo smartyTranslate(array('s'=>'Total','mod'=>'blockcart'),$_smarty_tpl);?>
</strong>
						<span style="position:relative; top:40px;" id="layer_cart_product_price"></span>
					</div>
				</div>
			</div>
			<div class="layer_cart_cart col-xs-12 col-md-6">
				<span class="title">
					<!-- Plural Case [both cases are needed because page may be updated in Javascript] -->
					<span class="ajax_cart_product_txt_s <?php if ($_smarty_tpl->tpl_vars['cart_qties']->value<2) {?> unvisible<?php }?>">
						<?php echo smartyTranslate(array('s'=>'There are [1]%d[/1] items in your cart.','mod'=>'blockcart','sprintf'=>array($_smarty_tpl->tpl_vars['cart_qties']->value),'tags'=>array('<span class="ajax_cart_quantity">')),$_smarty_tpl);?>

					</span>
					<!-- Singular Case [both cases are needed because page may be updated in Javascript] -->
					<span class="ajax_cart_product_txt <?php if ($_smarty_tpl->tpl_vars['cart_qties']->value>1) {?> unvisible<?php }?>">
						<?php echo smartyTranslate(array('s'=>'There is 1 item in your cart.','mod'=>'blockcart'),$_smarty_tpl);?>

					</span>
				</span>
				<ul class="productIconZ"></ul>

				<div class="layer_cart_row">		
					<span class="ajax_block_cart_total">
						<?php if ($_smarty_tpl->tpl_vars['cart_qties']->value>0) {?>
							<?php if ($_smarty_tpl->tpl_vars['priceDisplay']->value==1) {?>
								<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['convertPrice'][0][0]->convertPrice(array('price'=>$_smarty_tpl->tpl_vars['cart']->value->getOrderTotal(false)),$_smarty_tpl);?>

							<?php } else { ?>
								<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['convertPrice'][0][0]->convertPrice(array('price'=>$_smarty_tpl->tpl_vars['cart']->value->getOrderTotal(true)),$_smarty_tpl);?>

							<?php }?>
						<?php }?>
					</span>
				</div>
				<div class="button-container">
					<span class="continue btn btn-default button exclusive-medium" title="<?php echo smartyTranslate(array('s'=>'Continue shopping','mod'=>'blockcart'),$_smarty_tpl);?>
">
						<span>
							<i class="icon-chevron-left left"></i><?php echo smartyTranslate(array('s'=>'Continue shopping','mod'=>'blockcart'),$_smarty_tpl);?>

						</span>
					</span>
					<a class="btn btn-default button button-medium"	href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['link']->value->getPageLink(((string)$_smarty_tpl->tpl_vars['order_process']->value),true), ENT_QUOTES, 'UTF-8', true);?>
" title="<?php echo smartyTranslate(array('s'=>'Proceed to checkout','mod'=>'blockcart'),$_smarty_tpl);?>
" rel="nofollow">
						<span>
							<?php echo smartyTranslate(array('s'=>'Proceed to checkout','mod'=>'blockcart'),$_smarty_tpl);?>
<i class="icon-chevron-right right"></i>
						</span>
					</a>
				</div>
			</div>
		</div>
		<div class="crossseling"></div>
	</div> <!-- #layer_cart -->
	<div class="layer_cart_overlay"></div>
<?php }?>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['addJsDef'][0][0]->addJsDef(array('CUSTOMIZE_TEXTFIELD'=>$_smarty_tpl->tpl_vars['CUSTOMIZE_TEXTFIELD']->value),$_smarty_tpl);?>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['addJsDef'][0][0]->addJsDef(array('img_dir'=>preg_replace("%(?<!\\\\)'%", "\'",$_smarty_tpl->tpl_vars['img_dir']->value)),$_smarty_tpl);?>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['addJsDef'][0][0]->addJsDef(array('generated_date'=>intval(time())),$_smarty_tpl);?>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['addJsDef'][0][0]->addJsDef(array('ajax_allowed'=>$_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_MODIFIER]['boolval'][0][0]->boolval($_smarty_tpl->tpl_vars['ajax_allowed']->value)),$_smarty_tpl);?>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['addJsDef'][0][0]->addJsDef(array('hasDeliveryAddress'=>(isset($_smarty_tpl->tpl_vars['cart']->value->id_address_delivery)&&$_smarty_tpl->tpl_vars['cart']->value->id_address_delivery)),$_smarty_tpl);?>
<?php $_smarty_tpl->smarty->_tag_stack[] = array('addJsDefL', array('name'=>'customizationIdMessage')); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'customizationIdMessage'), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>
<?php echo smartyTranslate(array('s'=>'Customization #','mod'=>'blockcart','js'=>1),$_smarty_tpl);?>
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'customizationIdMessage'), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>
<?php $_smarty_tpl->smarty->_tag_stack[] = array('addJsDefL', array('name'=>'removingLinkText')); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'removingLinkText'), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>
<?php echo smartyTranslate(array('s'=>'remove this product from my cart','mod'=>'blockcart','js'=>1),$_smarty_tpl);?>
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'removingLinkText'), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>
<?php $_smarty_tpl->smarty->_tag_stack[] = array('addJsDefL', array('name'=>'freeShippingTranslation')); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'freeShippingTranslation'), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>
<?php echo smartyTranslate(array('s'=>'Free shipping!','mod'=>'blockcart','js'=>1),$_smarty_tpl);?>
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'freeShippingTranslation'), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>
<?php $_smarty_tpl->smarty->_tag_stack[] = array('addJsDefL', array('name'=>'freeProductTranslation')); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'freeProductTranslation'), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>
<?php echo smartyTranslate(array('s'=>'Free!','mod'=>'blockcart','js'=>1),$_smarty_tpl);?>
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'freeProductTranslation'), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>
<?php $_smarty_tpl->smarty->_tag_stack[] = array('addJsDefL', array('name'=>'delete_txt')); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'delete_txt'), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>
<?php echo smartyTranslate(array('s'=>'Delete','mod'=>'blockcart','js'=>1),$_smarty_tpl);?>
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'delete_txt'), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>
<?php $_smarty_tpl->smarty->_tag_stack[] = array('addJsDefL', array('name'=>'toBeDetermined')); $_block_repeat=true; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'toBeDetermined'), null, $_smarty_tpl, $_block_repeat);while ($_block_repeat) { ob_start();?>
<?php echo smartyTranslate(array('s'=>'To be determined','mod'=>'blockcart','js'=>1),$_smarty_tpl);?>
<?php $_block_content = ob_get_clean(); $_block_repeat=false; echo $_smarty_tpl->smarty->registered_plugins['block']['addJsDefL'][0][0]->addJsDefL(array('name'=>'toBeDetermined'), $_block_content, $_smarty_tpl, $_block_repeat); } array_pop($_smarty_tpl->smarty->_tag_stack);?>

<!-- /MODULE Block cart -->
<?php }} ?>
