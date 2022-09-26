<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:20:41
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/blocklayered/blocklayered.tpl" */ ?>
<?php /*%%SmartyHeaderCode:919828690632431d925e382-72469008%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a82f459fbc036f74ef1a9032310bf79e340e140c' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/blocklayered/blocklayered.tpl',
      1 => 1570415569,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '919828690632431d925e382-72469008',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'nbr_filterBlocks' => 0,
    'selected_filters' => 0,
    'n_filters' => 0,
    'filter_values' => 0,
    'filters' => 0,
    'filter' => 0,
    'filter_type' => 0,
    'id_value' => 0,
    'filter_key' => 0,
    'filter_value' => 0,
    'value' => 0,
    'op1' => 0,
    'hide_0_values' => 0,
    'layered_show_qties' => 0,
    'values' => 0,
    'id_category_layered' => 0,
    'param_product_url' => 0,
    'blocklayeredSliderName' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632431d952bf58_50371412',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632431d952bf58_50371412')) {function content_632431d952bf58_50371412($_smarty_tpl) {?>

<?php if ($_smarty_tpl->tpl_vars['nbr_filterBlocks']->value!=0) {?>
<div id="layered_block_left" class="block">
	<p class="title_block">Filter</p>
	<div class="block_content">
		<form action="#" id="layered_form">
			<div>
				<?php if (isset($_smarty_tpl->tpl_vars['selected_filters']->value)&&$_smarty_tpl->tpl_vars['n_filters']->value>0) {?>
				<div id="enabled_filters">
					<span class="layered_subtitle" style="float: none;">
						<?php echo smartyTranslate(array('s'=>'Enabled filters:','mod'=>'blocklayered'),$_smarty_tpl);?>

					</span>
					<ul>
						<?php  $_smarty_tpl->tpl_vars['filter_values'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['filter_values']->_loop = false;
 $_smarty_tpl->tpl_vars['filter_type'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['selected_filters']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['filter_values']->key => $_smarty_tpl->tpl_vars['filter_values']->value) {
$_smarty_tpl->tpl_vars['filter_values']->_loop = true;
 $_smarty_tpl->tpl_vars['filter_type']->value = $_smarty_tpl->tpl_vars['filter_values']->key;
?>
							<?php  $_smarty_tpl->tpl_vars['filter_value'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['filter_value']->_loop = false;
 $_smarty_tpl->tpl_vars['filter_key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['filter_values']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['filter_value']->index=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['filter_value']->key => $_smarty_tpl->tpl_vars['filter_value']->value) {
$_smarty_tpl->tpl_vars['filter_value']->_loop = true;
 $_smarty_tpl->tpl_vars['filter_key']->value = $_smarty_tpl->tpl_vars['filter_value']->key;
 $_smarty_tpl->tpl_vars['filter_value']->index++;
 $_smarty_tpl->tpl_vars['filter_value']->first = $_smarty_tpl->tpl_vars['filter_value']->index === 0;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['f_values']['first'] = $_smarty_tpl->tpl_vars['filter_value']->first;
?>
								<?php  $_smarty_tpl->tpl_vars['filter'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['filter']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['filters']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['filter']->key => $_smarty_tpl->tpl_vars['filter']->value) {
$_smarty_tpl->tpl_vars['filter']->_loop = true;
?>
									<?php if ($_smarty_tpl->tpl_vars['filter']->value['type']==$_smarty_tpl->tpl_vars['filter_type']->value&&isset($_smarty_tpl->tpl_vars['filter']->value['values'])) {?>
										<?php if (isset($_smarty_tpl->tpl_vars['filter']->value['slider'])) {?>
											<?php if ($_smarty_tpl->getVariable('smarty')->value['foreach']['f_values']['first']) {?>
												<li>
													<a href="#" data-rel="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_slider" title="<?php echo smartyTranslate(array('s'=>'Cancel','mod'=>'blocklayered'),$_smarty_tpl);?>
"></a>
													<?php if ($_smarty_tpl->tpl_vars['filter']->value['format']==1) {?>
														<?php ob_start();?><?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['displayPrice'][0][0]->displayPriceSmarty(array('price'=>$_smarty_tpl->tpl_vars['filter']->value['values'][0]),$_smarty_tpl);?>
<?php $_tmp1=ob_get_clean();?><?php ob_start();?><?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['displayPrice'][0][0]->displayPriceSmarty(array('price'=>$_smarty_tpl->tpl_vars['filter']->value['values'][1]),$_smarty_tpl);?>
<?php $_tmp2=ob_get_clean();?><?php echo smartyTranslate(array('s'=>htmlspecialchars(sprintf('%1$s: %2$s - %3$s',$_smarty_tpl->tpl_vars['filter']->value['name'],$_tmp1,$_tmp2), ENT_QUOTES, 'UTF-8', true),'mod'=>'blocklayered'),$_smarty_tpl);?>

													<?php } else { ?>
														<?php echo smartyTranslate(array('s'=>htmlspecialchars(sprintf('%1$s: %2$s %4$s - %3$s %4$s',$_smarty_tpl->tpl_vars['filter']->value['name'],$_smarty_tpl->tpl_vars['filter']->value['values'][0],$_smarty_tpl->tpl_vars['filter']->value['values'][1],$_smarty_tpl->tpl_vars['filter']->value['unit']), ENT_QUOTES, 'UTF-8', true),'mod'=>'blocklayered'),$_smarty_tpl);?>

													<?php }?>
												</li>
											<?php }?>
										<?php } else { ?>
											<?php  $_smarty_tpl->tpl_vars['value'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['value']->_loop = false;
 $_smarty_tpl->tpl_vars['id_value'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['filter']->value['values']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['value']->key => $_smarty_tpl->tpl_vars['value']->value) {
$_smarty_tpl->tpl_vars['value']->_loop = true;
 $_smarty_tpl->tpl_vars['id_value']->value = $_smarty_tpl->tpl_vars['value']->key;
?>
												<?php if ($_smarty_tpl->tpl_vars['id_value']->value==$_smarty_tpl->tpl_vars['filter_key']->value&&!is_numeric($_smarty_tpl->tpl_vars['filter_value']->value)&&($_smarty_tpl->tpl_vars['filter']->value['type']=='id_attribute_group'||$_smarty_tpl->tpl_vars['filter']->value['type']=='id_feature')||$_smarty_tpl->tpl_vars['id_value']->value==$_smarty_tpl->tpl_vars['filter_value']->value&&$_smarty_tpl->tpl_vars['filter']->value['type']!='id_attribute_group'&&$_smarty_tpl->tpl_vars['filter']->value['type']!='id_feature') {?>
													<li>
														<a href="#" data-rel="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" title="<?php echo smartyTranslate(array('s'=>'Cancel','mod'=>'blocklayered'),$_smarty_tpl);?>
"><i class="icon-remove"></i></a>
														<?php echo smartyTranslate(array('s'=>'%1$s: %2$s','mod'=>'blocklayered','sprintf'=>array($_smarty_tpl->tpl_vars['filter']->value['name'],$_smarty_tpl->tpl_vars['value']->value['name'])),$_smarty_tpl);?>

													</li>
												<?php }?>
											<?php } ?>
										<?php }?>
									<?php }?>
								<?php } ?>
							<?php } ?>
						<?php } ?>
					</ul>
				</div>
				<?php }?>
				<?php $_smarty_tpl->tpl_vars['op1'] = new Smarty_variable('', null, 0);?>
				<?php  $_smarty_tpl->tpl_vars['filter'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['filter']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['filters']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['filter']->key => $_smarty_tpl->tpl_vars['filter']->value) {
$_smarty_tpl->tpl_vars['filter']->_loop = true;
?>
					
					<?php if (isset($_smarty_tpl->tpl_vars['filter']->value['values'])) {?>
							
						<?php if (isset($_smarty_tpl->tpl_vars['filter']->value['slider'])) {?>
							<div class="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
" style="display: none;">
						<?php } else { ?>
							<div class="layered_filter<?php echo $_smarty_tpl->tpl_vars['op1']->value++;?>
">
						<?php }?>
                        <div class="layered_subtitle_heading">
                            <span class="layered_subtitle"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['filter']->value['name'], ENT_QUOTES, 'UTF-8', true);?>
</span>
                            <!--<span class="layered_close">
                            	<a href="#" data-rel="ul_layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
"></a>
                            </span>-->
						</div>
						<ul id="ul_layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
" class="col-lg-12 layered_filter_ul<?php if (isset($_smarty_tpl->tpl_vars['filter']->value['is_color_group'])&&$_smarty_tpl->tpl_vars['filter']->value['is_color_group']) {?> color-group<?php }?>">
							<?php if (!isset($_smarty_tpl->tpl_vars['filter']->value['slider'])) {?>
								<?php if ($_smarty_tpl->tpl_vars['filter']->value['filter_type']==0) {?>
									<?php  $_smarty_tpl->tpl_vars['value'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['value']->_loop = false;
 $_smarty_tpl->tpl_vars['id_value'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['filter']->value['values']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['fe']['index']=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['value']->key => $_smarty_tpl->tpl_vars['value']->value) {
$_smarty_tpl->tpl_vars['value']->_loop = true;
 $_smarty_tpl->tpl_vars['id_value']->value = $_smarty_tpl->tpl_vars['value']->key;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['fe']['index']++;
?>
										<?php if ($_smarty_tpl->tpl_vars['value']->value['nbr']||!$_smarty_tpl->tpl_vars['hide_0_values']->value) {?>
										<li class="nomargin <?php if ($_smarty_tpl->getVariable('smarty')->value['foreach']['fe']['index']>=$_smarty_tpl->tpl_vars['filter']->value['filter_show_limit']) {?>hiddable<?php }?> col-lg-12">
											<?php if (isset($_smarty_tpl->tpl_vars['filter']->value['is_color_group'])&&$_smarty_tpl->tpl_vars['filter']->value['is_color_group']) {?>
												<input class="color-option <?php if (isset($_smarty_tpl->tpl_vars['value']->value['checked'])&&$_smarty_tpl->tpl_vars['value']->value['checked']) {?>on<?php }?> <?php if (!$_smarty_tpl->tpl_vars['value']->value['nbr']) {?>disable<?php }?>" type="button" name="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" data-rel="<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
" id="layered_id_attribute_group_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" <?php if (!$_smarty_tpl->tpl_vars['value']->value['nbr']) {?>disabled="disabled"<?php }?> style="background: <?php if (isset($_smarty_tpl->tpl_vars['value']->value['color'])) {?><?php if (file_exists((@constant('_PS_ROOT_DIR_')).("/img/co/".((string)$_smarty_tpl->tpl_vars['id_value']->value).".jpg"))) {?>url(img/co/<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
.jpg)<?php } else { ?><?php echo $_smarty_tpl->tpl_vars['value']->value['color'];?>
<?php }?><?php } else { ?>#CCC<?php }?>;" />
												<?php if (isset($_smarty_tpl->tpl_vars['value']->value['checked'])&&$_smarty_tpl->tpl_vars['value']->value['checked']) {?><input type="hidden" name="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" value="<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" /><?php }?>
											<?php } else { ?>
												<input type="checkbox" class="checkbox" name="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" id="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
<?php if ($_smarty_tpl->tpl_vars['id_value']->value||$_smarty_tpl->tpl_vars['filter']->value['type']=='quantity') {?>_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
<?php }?>" value="<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
<?php if ($_smarty_tpl->tpl_vars['filter']->value['id_key']) {?>_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
<?php }?>"<?php if (isset($_smarty_tpl->tpl_vars['value']->value['checked'])) {?> checked="checked"<?php }?><?php if (!$_smarty_tpl->tpl_vars['value']->value['nbr']) {?> disabled="disabled"<?php }?> /> 
											<?php }?>
											<label for="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
"<?php if (!$_smarty_tpl->tpl_vars['value']->value['nbr']) {?> class="disabled"<?php } else { ?><?php if (isset($_smarty_tpl->tpl_vars['filter']->value['is_color_group'])&&$_smarty_tpl->tpl_vars['filter']->value['is_color_group']) {?> name="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" class="layered_color" data-rel="<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
"<?php }?><?php }?>>
												<?php if (!$_smarty_tpl->tpl_vars['value']->value['nbr']) {?>
												<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['value']->value['name'], ENT_QUOTES, 'UTF-8', true);?>
<?php if ($_smarty_tpl->tpl_vars['layered_show_qties']->value) {?><span> (<?php echo $_smarty_tpl->tpl_vars['value']->value['nbr'];?>
)</span><?php }?>
												<?php } else { ?>
												<a href="<?php echo $_smarty_tpl->tpl_vars['value']->value['link'];?>
"<?php if (trim($_smarty_tpl->tpl_vars['value']->value['rel'])!='') {?> data-rel="<?php echo $_smarty_tpl->tpl_vars['value']->value['rel'];?>
"<?php }?>><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['value']->value['name'], ENT_QUOTES, 'UTF-8', true);?>
<?php if ($_smarty_tpl->tpl_vars['layered_show_qties']->value) {?><span> (<?php echo $_smarty_tpl->tpl_vars['value']->value['nbr'];?>
)</span><?php }?></a>
												<?php }?>
											</label>
										</li>
										<?php }?>
									<?php } ?>
								<?php } else { ?>
									<?php if ($_smarty_tpl->tpl_vars['filter']->value['filter_type']==1) {?>
									<?php  $_smarty_tpl->tpl_vars['value'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['value']->_loop = false;
 $_smarty_tpl->tpl_vars['id_value'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['filter']->value['values']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['fe']['index']=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['value']->key => $_smarty_tpl->tpl_vars['value']->value) {
$_smarty_tpl->tpl_vars['value']->_loop = true;
 $_smarty_tpl->tpl_vars['id_value']->value = $_smarty_tpl->tpl_vars['value']->key;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['fe']['index']++;
?>
										<?php if ($_smarty_tpl->tpl_vars['value']->value['nbr']||!$_smarty_tpl->tpl_vars['hide_0_values']->value) {?>
										<li class="nomargin <?php if ($_smarty_tpl->getVariable('smarty')->value['foreach']['fe']['index']>=$_smarty_tpl->tpl_vars['filter']->value['filter_show_limit']) {?>hiddable<?php }?>">
											<?php if (isset($_smarty_tpl->tpl_vars['filter']->value['is_color_group'])&&$_smarty_tpl->tpl_vars['filter']->value['is_color_group']) {?>
												<input class="radio color-option <?php if (isset($_smarty_tpl->tpl_vars['value']->value['checked'])&&$_smarty_tpl->tpl_vars['value']->value['checked']) {?>on<?php }?> <?php if (!$_smarty_tpl->tpl_vars['value']->value['nbr']) {?>disable<?php }?>" type="button" name="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" data-rel="<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
" id="layered_id_attribute_group_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" <?php if (!$_smarty_tpl->tpl_vars['value']->value['nbr']) {?>disabled="disabled"<?php }?> style="background: <?php if (isset($_smarty_tpl->tpl_vars['value']->value['color'])) {?><?php if (file_exists((@constant('_PS_ROOT_DIR_')).("/img/co/".((string)$_smarty_tpl->tpl_vars['id_value']->value).".jpg"))) {?>url(img/co/<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
.jpg)<?php } else { ?><?php echo $_smarty_tpl->tpl_vars['value']->value['color'];?>
<?php }?><?php } else { ?>#CCC<?php }?>;"/>
												<?php if (isset($_smarty_tpl->tpl_vars['value']->value['checked'])&&$_smarty_tpl->tpl_vars['value']->value['checked']) {?><input type="hidden" name="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" value="<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" /><?php }?>
											<?php } else { ?>
												<input type="radio" class="radio layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" name="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
<?php if ($_smarty_tpl->tpl_vars['filter']->value['id_key']) {?>_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
<?php } else { ?>_1<?php }?>" id="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
<?php if ($_smarty_tpl->tpl_vars['id_value']->value||$_smarty_tpl->tpl_vars['filter']->value['type']=='quantity') {?>_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
<?php if ($_smarty_tpl->tpl_vars['filter']->value['id_key']) {?>_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
<?php }?><?php }?>" value="<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
<?php if ($_smarty_tpl->tpl_vars['filter']->value['id_key']) {?>_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
<?php }?>"<?php if (isset($_smarty_tpl->tpl_vars['value']->value['checked'])) {?> checked="checked"<?php }?><?php if (!$_smarty_tpl->tpl_vars['value']->value['nbr']) {?> disabled="disabled"<?php }?> /> 
											<?php }?>
											<label for="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
"<?php if (!$_smarty_tpl->tpl_vars['value']->value['nbr']) {?> class="disabled"<?php } else { ?><?php if (isset($_smarty_tpl->tpl_vars['filter']->value['is_color_group'])&&$_smarty_tpl->tpl_vars['filter']->value['is_color_group']) {?> name="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" class="layered_color" data-rel="<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
"<?php }?><?php }?>>
												<?php if (!$_smarty_tpl->tpl_vars['value']->value['nbr']) {?>
													<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['value']->value['name'], ENT_QUOTES, 'UTF-8', true);?>
<?php if ($_smarty_tpl->tpl_vars['layered_show_qties']->value) {?><span> (<?php echo $_smarty_tpl->tpl_vars['value']->value['nbr'];?>
)</span><?php }?>
												<?php } else { ?>
													<a href="<?php echo $_smarty_tpl->tpl_vars['value']->value['link'];?>
"<?php if (trim($_smarty_tpl->tpl_vars['value']->value['rel'])!='') {?> data-rel="<?php echo $_smarty_tpl->tpl_vars['value']->value['rel'];?>
"<?php }?>><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['value']->value['name'], ENT_QUOTES, 'UTF-8', true);?>
<?php if ($_smarty_tpl->tpl_vars['layered_show_qties']->value) {?><span> (<?php echo $_smarty_tpl->tpl_vars['value']->value['nbr'];?>
)</span><?php }?></a>
												<?php }?>
											</label>
										</li>
										<?php }?>
									<?php } ?>
									<?php } else { ?>
										<select class="select form-control" <?php if ($_smarty_tpl->tpl_vars['filter']->value['filter_show_limit']>1) {?>multiple="multiple" size="<?php echo $_smarty_tpl->tpl_vars['filter']->value['filter_show_limit'];?>
"<?php }?>>
											<option value=""><?php echo smartyTranslate(array('s'=>'No filters','mod'=>'blocklayered'),$_smarty_tpl);?>
</option>
											<?php  $_smarty_tpl->tpl_vars['value'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['value']->_loop = false;
 $_smarty_tpl->tpl_vars['id_value'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['filter']->value['values']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['value']->key => $_smarty_tpl->tpl_vars['value']->value) {
$_smarty_tpl->tpl_vars['value']->_loop = true;
 $_smarty_tpl->tpl_vars['id_value']->value = $_smarty_tpl->tpl_vars['value']->key;
?>
											<?php if ($_smarty_tpl->tpl_vars['value']->value['nbr']||!$_smarty_tpl->tpl_vars['hide_0_values']->value) {?>
												<option style="color: <?php if (isset($_smarty_tpl->tpl_vars['value']->value['color'])) {?><?php echo $_smarty_tpl->tpl_vars['value']->value['color'];?>
<?php }?>" id="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type_lite'];?>
<?php if ($_smarty_tpl->tpl_vars['id_value']->value||$_smarty_tpl->tpl_vars['filter']->value['type']=='quantity') {?>_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
<?php }?>" value="<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
" <?php if (isset($_smarty_tpl->tpl_vars['value']->value['checked'])&&$_smarty_tpl->tpl_vars['value']->value['checked']) {?>selected="selected"<?php }?> <?php if (!$_smarty_tpl->tpl_vars['value']->value['nbr']) {?>disabled="disabled"<?php }?>>
													<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['value']->value['name'], ENT_QUOTES, 'UTF-8', true);?>
<?php if ($_smarty_tpl->tpl_vars['layered_show_qties']->value) {?><span> (<?php echo $_smarty_tpl->tpl_vars['value']->value['nbr'];?>
)</span><?php }?>
												</option>
											<?php }?>
											<?php } ?>
										</select>
									<?php }?>
								<?php }?>
							<?php } else { ?>
								<?php if ($_smarty_tpl->tpl_vars['filter']->value['filter_type']==0) {?>
								
									<label for="<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
">
										<?php echo smartyTranslate(array('s'=>'Range:','mod'=>'blocklayered'),$_smarty_tpl);?>

									</label> 
									<span id="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range"></span>
									<div class="layered_slider_container">
										<div class="layered_slider" id="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_slider" data-type="<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
" data-format="<?php echo $_smarty_tpl->tpl_vars['filter']->value['format'];?>
" data-unit="<?php echo $_smarty_tpl->tpl_vars['filter']->value['unit'];?>
"></div>
									</div>
								<?php } else { ?>
									<?php if ($_smarty_tpl->tpl_vars['filter']->value['filter_type']==1) {?>
									<li class="nomargin row">
	                                    <div class="col-xs-6 col-sm-12 col-lg-6 first-item">
	                                    	<?php echo smartyTranslate(array('s'=>'From','mod'=>'blocklayered'),$_smarty_tpl);?>
 
	                                    	<input class="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range layered_input_range_min layered_input_range form-control grey" id="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range_min" type="text" value="<?php echo $_smarty_tpl->tpl_vars['filter']->value['values'][0];?>
"/>
	                                    	<span class="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range_unit">
	                                    		<?php echo $_smarty_tpl->tpl_vars['filter']->value['unit'];?>

	                                    	</span>
	                                    </div>
	                                    <div class="col-xs-6 col-sm-12 col-lg-6">
	                                    	<?php echo smartyTranslate(array('s'=>'to','mod'=>'blocklayered'),$_smarty_tpl);?>
 
	                                    	<input class="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range layered_input_range_max layered_input_range form-control grey" id="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range_max" type="text" value="<?php echo $_smarty_tpl->tpl_vars['filter']->value['values'][1];?>
"/>
	                                    	<span class="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range_unit">
	                                    		<?php echo $_smarty_tpl->tpl_vars['filter']->value['unit'];?>

	                                    	</span>
	                                    </div>
										<span class="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_format" style="display:none;">
											<?php echo $_smarty_tpl->tpl_vars['filter']->value['format'];?>

										</span>
									</li>
									<?php } else { ?>
									<?php  $_smarty_tpl->tpl_vars['values'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['values']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['filter']->value['list_of_values']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['values']->key => $_smarty_tpl->tpl_vars['values']->value) {
$_smarty_tpl->tpl_vars['values']->_loop = true;
?>
										<li class="nomargin <?php if ($_smarty_tpl->tpl_vars['filter']->value['values'][1]==$_smarty_tpl->tpl_vars['values']->value[1]&&$_smarty_tpl->tpl_vars['filter']->value['values'][0]==$_smarty_tpl->tpl_vars['values']->value[0]) {?>layered_list_selected<?php }?> layered_list" onclick="$('#layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range_min').val(<?php echo $_smarty_tpl->tpl_vars['values']->value[0];?>
);$('#layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range_max').val(<?php echo $_smarty_tpl->tpl_vars['values']->value[1];?>
);reloadContent();">
											- <?php echo smartyTranslate(array('s'=>'From','mod'=>'blocklayered'),$_smarty_tpl);?>
 <?php echo $_smarty_tpl->tpl_vars['values']->value[0];?>
 <?php echo $_smarty_tpl->tpl_vars['filter']->value['unit'];?>
 <?php echo smartyTranslate(array('s'=>'to','mod'=>'blocklayered'),$_smarty_tpl);?>
 <?php echo $_smarty_tpl->tpl_vars['values']->value[1];?>
 <?php echo $_smarty_tpl->tpl_vars['filter']->value['unit'];?>

										</li>
									<?php } ?>
									<li style="display: none;">
										<input class="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range" id="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range_min" type="hidden" value="<?php echo $_smarty_tpl->tpl_vars['filter']->value['values'][0];?>
"/>
										<input class="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range" id="layered_<?php echo $_smarty_tpl->tpl_vars['filter']->value['type'];?>
_range_max" type="hidden" value="<?php echo $_smarty_tpl->tpl_vars['filter']->value['values'][1];?>
"/>
									</li>
									<?php }?>
								<?php }?>
							<?php }?>
							<?php if (count($_smarty_tpl->tpl_vars['filter']->value['values'])>$_smarty_tpl->tpl_vars['filter']->value['filter_show_limit']&&$_smarty_tpl->tpl_vars['filter']->value['filter_show_limit']>0&&$_smarty_tpl->tpl_vars['filter']->value['filter_type']!=2) {?>
								<span class="hide-action more"><?php echo smartyTranslate(array('s'=>'Show more','mod'=>'blocklayered'),$_smarty_tpl);?>
</span>
								<span class="hide-action less"><?php echo smartyTranslate(array('s'=>'Show less','mod'=>'blocklayered'),$_smarty_tpl);?>
</span>
							<?php }?>
						</ul>
					</div>
					<?php }?>
					
					<?php if ($_smarty_tpl->tpl_vars['filter']->value['id_key']==1) {?>

    
  <div class="yourslider_value"></div>
    <div id="crni23" style="width:91%; margin-left:20px; margin-bottom:21px;"> </div>
	<div id="vrvi" style="display:none">dafs</div>
  <div class="layered_slider yourslider"></div>
  <script type="text/javascript">
     $('#ul_layered_id_feature_1').hide(); 
    var filter = <?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_MODIFIER]['json_encode'][0][0]->jsonEncode($_smarty_tpl->tpl_vars['filter']->value);?>
;


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

<?php }?>
<?php if ($_smarty_tpl->tpl_vars['filter']->value['id_key']==11) {?>
<span class="layered_subtitle">Jezgro</span>
  <div class="yourslider_value2"></div>
  <div class="layered_slider2 yourslider2"></div>
  <script type="text/javascript">
    $('#ul_layered_id_feature_11').hide();
    var filter2 = <?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_MODIFIER]['json_encode'][0][0]->jsonEncode($_smarty_tpl->tpl_vars['filter']->value);?>
;
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
<?php }?> 
				<?php } ?>
				  <p class="heading-counter hcounter"></p>
			</div>
				<div style="padding:12px;margin-bottom:12px;height:100%; width:100%;border:1px solid rgba(6,4,3,0.1); border-top:3px solid #606163!important;overflow:hidden;"><p class="title_blockZ">Katalog</p><a id="katalogZen" href="#"><img style="margin:0 auto;" class="img-responsive" src="https://sdream.rs/upload/sdream-katalog.jpg" /></a><a style="width:100%; margin-top:8px;color:white; text-align:center;" class="button  btn btn-default" href="https://www.sdream.rs/upload/katalogS)Dream2016-1.pdf" target="_blank" title="Preuzmi Katalog"> Preuzmite katalog </a></div>
			<input type="hidden" name="id_category_layered" value="<?php echo $_smarty_tpl->tpl_vars['id_category_layered']->value;?>
" />
			<?php  $_smarty_tpl->tpl_vars['filter'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['filter']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['filters']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['filter']->key => $_smarty_tpl->tpl_vars['filter']->value) {
$_smarty_tpl->tpl_vars['filter']->_loop = true;
?>
				<?php if ($_smarty_tpl->tpl_vars['filter']->value['type_lite']=='id_attribute_group'&&isset($_smarty_tpl->tpl_vars['filter']->value['is_color_group'])&&$_smarty_tpl->tpl_vars['filter']->value['is_color_group']&&$_smarty_tpl->tpl_vars['filter']->value['filter_type']!=2) {?>
					<?php  $_smarty_tpl->tpl_vars['value'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['value']->_loop = false;
 $_smarty_tpl->tpl_vars['id_value'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['filter']->value['values']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['value']->key => $_smarty_tpl->tpl_vars['value']->value) {
$_smarty_tpl->tpl_vars['value']->_loop = true;
 $_smarty_tpl->tpl_vars['id_value']->value = $_smarty_tpl->tpl_vars['value']->key;
?>
						<?php if (isset($_smarty_tpl->tpl_vars['value']->value['checked'])) {?>
							<input type="hidden" name="layered_id_attribute_group_<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
" value="<?php echo $_smarty_tpl->tpl_vars['id_value']->value;?>
_<?php echo $_smarty_tpl->tpl_vars['filter']->value['id_key'];?>
" />
						<?php }?>
					<?php } ?>
				<?php }?>
			 	
			<?php } ?>
	</div>
		</form>

	<div id="layered_ajax_loader" style="display: none;">
		<p>
			<i class="fa fa-spinner fa-spin fa-3x" style="color:#f06423;" aria-hidden="true"></i>
			<br /><?php echo smartyTranslate(array('s'=>'Loading...','mod'=>'blocklayered'),$_smarty_tpl);?>

		</p>
	</div>
</div>
<?php } else { ?>
<div id="layered_block_left" class="block">
	<div class="block_content">
		<form action="#" id="layered_form">
			<input type="hidden" name="id_category_layered" value="<?php echo $_smarty_tpl->tpl_vars['id_category_layered']->value;?>
" />
		</form>
	</div>
	<div style="display: none;">
		<p>
			<i class="fa fa-spinner fa-spin fa-3x" style="color:#f06423;" aria-hidden="true"></i>
			<br /><?php echo smartyTranslate(array('s'=>'Loading...','mod'=>'blocklayered'),$_smarty_tpl);?>

		</p>
	</div>
</div>
<?php }?>
<?php if ($_smarty_tpl->tpl_vars['nbr_filterBlocks']->value!=0) {?>
<?php if (version_compare(@constant('_PS_VERSION_'),'1.5','>')) {?><?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['addJsDef'][0][0]->addJsDef(array('param_product_url'=>('#').($_smarty_tpl->tpl_vars['param_product_url']->value)),$_smarty_tpl);?>
<?php } else { ?><?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['addJsDef'][0][0]->addJsDef(array('param_product_url'=>''),$_smarty_tpl);?>
<?php }?><?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['addJsDef'][0][0]->addJsDef(array('blocklayeredSliderName'=>$_smarty_tpl->tpl_vars['blocklayeredSliderName']->value),$_smarty_tpl);?>
<?php if (isset($_smarty_tpl->tpl_vars['filters']->value)&&count($_smarty_tpl->tpl_vars['filters']->value)) {?><?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['addJsDef'][0][0]->addJsDef(array('filters'=>$_smarty_tpl->tpl_vars['filters']->value),$_smarty_tpl);?>
<?php }?>
<?php }?>
<?php }} ?>
