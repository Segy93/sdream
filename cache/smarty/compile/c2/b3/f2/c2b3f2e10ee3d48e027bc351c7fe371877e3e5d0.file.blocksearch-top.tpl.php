<?php /* Smarty version Smarty-3.1.19, created on 2022-09-16 10:11:27
         compiled from "/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/blocksearch/blocksearch-top.tpl" */ ?>
<?php /*%%SmartyHeaderCode:159063489263242faf00c512-69770733%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c2b3f2e10ee3d48e027bc351c7fe371877e3e5d0' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/SDreamShopTheme/modules/blocksearch/blocksearch-top.tpl',
      1 => 1572381139,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '159063489263242faf00c512-69770733',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'link' => 0,
    'search_query' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_63242faf027892_07041128',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_63242faf027892_07041128')) {function content_63242faf027892_07041128($_smarty_tpl) {?>
<!-- Block search module TOP -->
<div id="search_block_top" class="col-sm-4 clearfix">
	<form id="searchbox" method="get" action="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['link']->value->getPageLink('search',null,null,null,false,null,true), ENT_QUOTES, 'UTF-8', true);?>
" >
		<input type="hidden" name="controller" value="search" />
		<input type="hidden" name="orderby" value="position" />
		<input type="hidden" name="orderway" value="desc" />
		<input class="search_query form-control" type="text" id="search_query_top" name="search_query" placeholder="<?php echo smartyTranslate(array('s'=>'Search','mod'=>'blocksearch'),$_smarty_tpl);?>
" value="<?php echo stripslashes(mb_convert_encoding(htmlspecialchars($_smarty_tpl->tpl_vars['search_query']->value, ENT_QUOTES, 'UTF-8', true), "HTML-ENTITIES", 'UTF-8'));?>
" />
		<button type="submit" name="submit_search" class="btn btn-default button-search">
			<span><?php echo smartyTranslate(array('s'=>'Search','mod'=>'blocksearch'),$_smarty_tpl);?>
</span>
		</button>
	</form>
</div>
<!-- /Block search module TOP --><?php }} ?>
