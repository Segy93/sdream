<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:14:53
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/footer.tpl" */ ?>
<?php /*%%SmartyHeaderCode:5620132096324307db81a57-21036958%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3b19b99f4ef91c007fa3506164883247d1a1ef6d' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/footer.tpl',
      1 => 1562026898,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '5620132096324307db81a57-21036958',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'content_only' => 0,
    'right_column_size' => 0,
    'HOOK_RIGHT_COLUMN' => 0,
    'HOOK_FOOTER' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_6324307dba92a4_69462301',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_6324307dba92a4_69462301')) {function content_6324307dba92a4_69462301($_smarty_tpl) {?>
<?php if (!isset($_smarty_tpl->tpl_vars['content_only']->value)||!$_smarty_tpl->tpl_vars['content_only']->value) {?>
					</div><!-- #center_column -->
					<?php if (isset($_smarty_tpl->tpl_vars['right_column_size']->value)&&!empty($_smarty_tpl->tpl_vars['right_column_size']->value)) {?>
						<div id="right_column" class="col-xs-12 col-sm-<?php echo intval($_smarty_tpl->tpl_vars['right_column_size']->value);?>
 column"><?php echo $_smarty_tpl->tpl_vars['HOOK_RIGHT_COLUMN']->value;?>
</div>
					<?php }?>
					</div><!-- .row -->
				</div><!-- #columns -->
			</div><!-- .columns-container -->
			<?php if (isset($_smarty_tpl->tpl_vars['HOOK_FOOTER']->value)) {?>
				<!-- Footer -->
				<div class="footer-container">
					<center style="background: radial-gradient(rgba(0,0,0,.1), transparent);float: none;padding: 8px;padding-bottom: 0px;">
					    <footer id="footer"  class="container" style="margin-bottom: 0;">
						<div class="row"><?php echo $_smarty_tpl->tpl_vars['HOOK_FOOTER']->value;?>
</div>
					</footer>
					</center>
				</div><!-- #footer -->
			<?php }?>
		</div><!-- #page -->
<?php }?>
<?php echo $_smarty_tpl->getSubTemplate (((string)$_smarty_tpl->tpl_vars['tpl_dir']->value)."./global.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

	</body>
</html><?php }} ?>
