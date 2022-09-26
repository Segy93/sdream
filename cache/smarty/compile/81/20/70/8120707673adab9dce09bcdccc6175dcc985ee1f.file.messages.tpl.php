<?php /* Smarty version Smarty-3.1.19, created on 2022-09-23 19:56:30
         compiled from "/home/sdream/public_html/sdream.rs/modules/themeconfigurator/views/templates/admin/messages.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1633367666632df34ed4bb57-39336219%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '8120707673adab9dce09bcdccc6175dcc985ee1f' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/modules/themeconfigurator/views/templates/admin/messages.tpl',
      1 => 1570417669,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1633367666632df34ed4bb57-39336219',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'id' => 0,
    'text' => 0,
    'class' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632df34edbf7e1_00629896',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632df34edbf7e1_00629896')) {function content_632df34edbf7e1_00629896($_smarty_tpl) {?>

<div id="<?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['id']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
-response" <?php if (!isset($_smarty_tpl->tpl_vars['text']->value)) {?>style="display:none;"<?php }?> class="message alert alert-<?php if (isset($_smarty_tpl->tpl_vars['class']->value)&&$_smarty_tpl->tpl_vars['class']->value=='error') {?>danger<?php } else { ?>success<?php }?>">
	<div><?php if (isset($_smarty_tpl->tpl_vars['text']->value)) {?><?php echo mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['text']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8');?>
<?php }?></div>
</div><?php }} ?>
