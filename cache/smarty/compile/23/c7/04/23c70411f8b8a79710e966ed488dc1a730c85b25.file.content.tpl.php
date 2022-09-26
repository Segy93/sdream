<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:18:23
         compiled from "/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/content.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1241287576324314f389f00-28450508%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '23c70411f8b8a79710e966ed488dc1a730c85b25' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/admin391vuvlux/themes/default/template/content.tpl',
      1 => 1494956980,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1241287576324314f389f00-28450508',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'content' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324314f3c0036_32325439',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324314f3c0036_32325439')) {function content_6324314f3c0036_32325439($_smarty_tpl) {?>
<div id="ajax_confirmation" class="alert alert-success hide"></div>

<div id="ajaxBox" style="display:none"></div>


<div class="row">
	<div class="col-lg-12">
		<?php if (isset($_smarty_tpl->tpl_vars['content']->value)) {?>
			<?php echo $_smarty_tpl->tpl_vars['content']->value;?>

		<?php }?>
	</div>
</div><?php }} ?>
