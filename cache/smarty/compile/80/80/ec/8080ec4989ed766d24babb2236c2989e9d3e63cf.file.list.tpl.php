<?php /* Smarty version Smarty-3.1.19, created on 2022-09-23 19:54:23
         compiled from "/home/sdream/public_html/sdream.rs/modules/homeslider/views/templates/hook/list.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2064592173632df2cf4c7ac0-12603108%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '8080ec4989ed766d24babb2236c2989e9d3e63cf' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/modules/homeslider/views/templates/hook/list.tpl',
      1 => 1494957390,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2064592173632df2cf4c7ac0-12603108',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'link' => 0,
    'slides' => 0,
    'slide' => 0,
    'image_baseurl' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632df2cf65ff70_92440296',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632df2cf65ff70_92440296')) {function content_632df2cf65ff70_92440296($_smarty_tpl) {?>
<div class="panel"><h3><i class="icon-list-ul"></i> <?php echo smartyTranslate(array('s'=>'Slides list','mod'=>'homeslider'),$_smarty_tpl);?>

	<span class="panel-heading-action">
		<a id="desc-product-new" class="list-toolbar-btn" href="<?php echo $_smarty_tpl->tpl_vars['link']->value->getAdminLink('AdminModules');?>
&configure=homeslider&addSlide=1">
			<span title="" data-toggle="tooltip" class="label-tooltip" data-original-title="<?php echo smartyTranslate(array('s'=>'Add new','mod'=>'homeslider'),$_smarty_tpl);?>
" data-html="true">
				<i class="process-icon-new "></i>
			</span>
		</a>
	</span>
	</h3>
	<div id="slidesContent">
		<div id="slides">
			<?php  $_smarty_tpl->tpl_vars['slide'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['slide']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['slides']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['slide']->key => $_smarty_tpl->tpl_vars['slide']->value) {
$_smarty_tpl->tpl_vars['slide']->_loop = true;
?>
				<div id="slides_<?php echo $_smarty_tpl->tpl_vars['slide']->value['id_slide'];?>
" class="panel">
					<div class="row">
						<div class="col-lg-1">
							<span><i class="icon-arrows "></i></span>
						</div>
						<div class="col-md-3">
							<img src="<?php echo $_smarty_tpl->tpl_vars['image_baseurl']->value;?>
<?php echo $_smarty_tpl->tpl_vars['slide']->value['image'];?>
" alt="<?php echo $_smarty_tpl->tpl_vars['slide']->value['title'];?>
" class="img-thumbnail" />
						</div>
						<div class="col-md-8">
							<h4 class="pull-left">
								#<?php echo $_smarty_tpl->tpl_vars['slide']->value['id_slide'];?>
 - <?php echo $_smarty_tpl->tpl_vars['slide']->value['title'];?>

								<?php if ($_smarty_tpl->tpl_vars['slide']->value['is_shared']) {?>
									<div>
										<span class="label color_field pull-left" style="background-color:#108510;color:white;margin-top:5px;">
											<?php echo smartyTranslate(array('s'=>'Shared slide','mod'=>'homeslider'),$_smarty_tpl);?>

										</span>
									</div>
								<?php }?>
							</h4>
							<div class="btn-group-action pull-right">
								<?php echo $_smarty_tpl->tpl_vars['slide']->value['status'];?>


								<a class="btn btn-default"
									href="<?php echo $_smarty_tpl->tpl_vars['link']->value->getAdminLink('AdminModules');?>
&configure=homeslider&id_slide=<?php echo $_smarty_tpl->tpl_vars['slide']->value['id_slide'];?>
">
									<i class="icon-edit"></i>
									<?php echo smartyTranslate(array('s'=>'Edit','mod'=>'homeslider'),$_smarty_tpl);?>

								</a>
								<a class="btn btn-default"
									href="<?php echo $_smarty_tpl->tpl_vars['link']->value->getAdminLink('AdminModules');?>
&configure=homeslider&delete_id_slide=<?php echo $_smarty_tpl->tpl_vars['slide']->value['id_slide'];?>
">
									<i class="icon-trash"></i>
									<?php echo smartyTranslate(array('s'=>'Delete','mod'=>'homeslider'),$_smarty_tpl);?>

								</a>
							</div>
						</div>
					</div>
				</div>
			<?php } ?>
		</div>
	</div>
</div>
<?php }} ?>
