<?php /* Smarty version Smarty-3.1.19, created on 2022-09-21 08:14:30
         compiled from "/home/sdream/public_html/sdream.rs/modules/cronjobs/views/templates/admin/configure.tpl" */ ?>
<?php /*%%SmartyHeaderCode:776801811632aabc62b5a85-20343103%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '27033f396458b0acce55f3e0174f82e48f11fc36' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/modules/cronjobs/views/templates/admin/configure.tpl',
      1 => 1494957456,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '776801811632aabc62b5a85-20343103',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'module_dir' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_632aabc632a662_33924141',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_632aabc632a662_33924141')) {function content_632aabc632a662_33924141($_smarty_tpl) {?>

<div class="panel">
    <h3><?php echo smartyTranslate(array('s'=>'What does this module do?','mod'=>'cronjobs'),$_smarty_tpl);?>
</h3>
    <p>
        <img src="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['module_dir']->value, ENT_QUOTES, 'UTF-8', true);?>
/logo.png" class="pull-left" id="cronjobs-logo" />
        <?php echo smartyTranslate(array('s'=>'Originally, cron is a Unix system tool that provides time-based job scheduling: you can create many cron jobs, which are then run periodically at fixed times, dates, or intervals.','mod'=>'cronjobs'),$_smarty_tpl);?>

        <br/>
        <?php echo smartyTranslate(array('s'=>'This module provides you with a cron-like tool: you can create jobs which will call a given set of secure URLs to your PrestaShop store, thus triggering updates and other automated tasks.','mod'=>'cronjobs'),$_smarty_tpl);?>

    </p>
</div>
<?php }} ?>
