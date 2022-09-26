<?php /*%%SmartyHeaderCode:663410255d2fca85a86fb6-92443159%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '86b05d1bfe60d15f28697d441eaa419b2dd69b71' => 
    array (
      0 => '/home/sdream/public_html/sdream.rs/themes/default-bootstrap/modules/blocksearch/blocksearch-top.tpl',
      1 => 1494957238,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '663410255d2fca85a86fb6-92443159',
  'variables' => 
  array (
    'link' => 0,
    'search_query' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_5d2fca85a9c5a1_45159148',
  'cache_lifetime' => 31536000,
),true); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5d2fca85a9c5a1_45159148')) {function content_5d2fca85a9c5a1_45159148($_smarty_tpl) {?><div id="search_block_top" class="col-sm-4 clearfix"><form id="searchbox" method="get" action="//www.sdream.rs/sr/search" > <input type="hidden" name="controller" value="search" /> <input type="hidden" name="orderby" value="position" /> <input type="hidden" name="orderway" value="desc" /> <input class="search_query form-control" type="text" id="search_query_top" name="search_query" placeholder="Pronađi" value="" /> <button type="submit" name="submit_search" class="btn btn-default button-search"> <span>Pronađi</span> </button></form></div><?php }} ?>
