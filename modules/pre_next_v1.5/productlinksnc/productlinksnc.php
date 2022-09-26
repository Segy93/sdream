<?php

/**
 * This module displays next and previous links on the product page to go to the the next and previous products in the category.
 * This version is for Prestashop v1.2.
 * @author Nethercott Constructions <info@nethercottconstructions.com>
 * Please visit http://www.nethercottconstructions.com/content/3-terms-and-conditions-of-use for licensing information.
 */
class ProductLinksNC extends Module
{
	function __construct()
	{
		$this->name = 'productlinksnc';
		$this->tab = 'Nethercott Constructions';
		$this->version = '1.5';

		parent::__construct(); // The parent construct is required for translations

		$this->page = basename(__FILE__, '.php');
		$this->displayName = $this->l('Product Links');
		$this->description = $this->l('Adds links on the product page that go to the next and previous products in the category');
	}

	function install()
	{
		if (!parent::install() OR 
			!$this->registerHook('header') OR !$this->registerHook('productFooter') OR !$this->registerHook('home') OR
			Configuration::updateValue('PRODUCT_LINKS_NC_HOMEPAGE', 1) == false)
			return false;
		return true;
	}
	
	function uninstall()
	{
		if (!Configuration::deleteByName('PRODUCT_LINKS_NC_HOMEPAGE') OR
			!parent::uninstall())
			return false;
		return true;
	}
	
	public function getContent()
	{
		$output = '<h2><a style="color: #268ccd" href="http://www.nethercottconstructions.com">'.$this->displayName.'</a></h2>';
		if (Tools::isSubmit('submitProductLinksNC'))
		{
			$homepage = intval(Tools::getValue('homepage'));
			$loop = intval(Tools::getValue('loop'));
			
			if ($homepage != 0 AND $homepage != 1)
				$output .= '<div class="alert error">'.$this->l('Homepage navigation: Invalid choice.').'</div>';
			elseif ($loop != 0 AND $loop != 1)
				$output .= '<div class="alert error">'.$this->l('Loop products: Invalid choice.').'</div>';
			else
			{
				Configuration::updateValue('PRODUCT_LINKS_NC_HOMEPAGE', intval($homepage));
				Configuration::updateValue('PRODUCT_LINKS_NC_LOOP', intval($loop));
				$output .= '<div class="conf confirm"><img src="../img/admin/ok.gif" alt="'.$this->l('Confirmation').'" /> '.$this->l('Settings updated').'</div>';
			}
		}
		return $output.$this->displayForm();
	}
	
	public function displayForm()
	{
		return '
		<form action="'.$_SERVER['REQUEST_URI'].'" method="post">
			<fieldset>
				<legend><a href="http://www.nethercottconstructions.com"><img src="'.$this->_path.'logo.gif" alt="" title="" /></a>'.$this->l('Settings').'</legend>
				<label>'.$this->l('Homepage navigation').'</label>

				<div class="margin-form">
					<select name="homepage" id="homepage">
						<option value="1" '.(Configuration::get('PRODUCT_LINKS_NC_HOMEPAGE') ? 'selected' : '').'>'.$this->l('Featured products').'</option>
						<option value="0" '.(!Configuration::get('PRODUCT_LINKS_NC_HOMEPAGE') ? 'selected' : '').'>'.$this->l('Default category').'</option>
					</select>								
					<p class="clear">'.$this->l('Whether to navigate through featured products or the product\'s default category on the homepage').'</p>
				</div>

				<label>'.$this->l('Loop products').'</label>
				
				<div class="margin-form">
					<input type="radio" name="loop" id="loop_on" value="1" '.(Tools::getValue('loop', Configuration::get('PRODUCT_LINKS_NC_LOOP')) ? 'checked="checked" ' : '').'/>
					<label class="t" for="loop_on"> <img src="../img/admin/enabled.gif" alt="'.$this->l('Enabled').'" title="'.$this->l('Enabled').'" /></label>
					<input type="radio" name="loop" id="loop_off" value="0" '.(!Tools::getValue('loop', Configuration::get('PRODUCT_LINKS_NC_LOOP')) ? 'checked="checked" ' : '').'/>
					<label class="t" for="loop_off"> <img src="../img/admin/disabled.gif" alt="'.$this->l('Disabled').'" title="'.$this->l('Disabled').'" /></label>
					<p class="clear">'.$this->l('Whether to add a next link on the last product that returns to the first product').'</p>
				</div>
				
			<center><input type="submit" name="submitProductLinksNC" value="'.$this->l('Save').'" class="button" /></center>
			</fieldset>
		</form>';
	}	
	
	public function hookHeader($params)
	{
		return $this->display(__FILE__, 'productlinksnc-header.tpl');
	}
	
	public function hookProductFooter($params)
	{
		global $smarty, $cookie, $link;

		$id_product = intval(Tools::getValue('id_product'));
		
		if (!$id_product)
			return true;
		
		$product = new Product($id_product, false, intval($cookie->id_lang));
		$productInLastVisitedCategory = Product::idIsOnCategoryId(intval($_GET['id_product']), array('0' => array('id_category' => intval($cookie->last_visited_category))));

		if ((!isset($cookie->last_visited_category) OR !$productInLastVisitedCategory) AND Validate::isLoadedObject($product))
			$cookie->last_visited_category = intval($product->id_category_default);

		$category = new Category(intval($cookie->last_visited_category), intval($cookie->id_lang));
		$cat_products = $category->getProducts(intval($cookie->id_lang), 1, 1000000);

		$loop = Configuration::get('PRODUCT_LINKS_NC_LOOP');

		$prevLink = NULL;
		$prevName = NULL;
		$nextLink = NULL;
		$nextName = NULL;

		if (is_array($cat_products))
			for ($i = 0; $i < sizeof($cat_products); $i++)
			{
				if ($cat_products[$i]['id_product'] == $id_product)
				{
					if ($i > 0)
					{
						$cat_product = new Product($cat_products[$i - 1]['id_product'], false, intval($cookie->id_lang));
						$prevLink = $link->getProductLink($cat_products[$i - 1]['id_product'], $cat_product->link_rewrite, $category->link_rewrite, $cat_product->ean13);
						$prevName = $cat_products[$i - 1]['name'];
					}
					elseif ($loop AND sizeof($cat_products) > 1)
					{
						$cat_product = new Product($cat_products[sizeof($cat_products) - 1]['id_product'], false, intval($cookie->id_lang));
						$prevLink = $link->getProductLink($cat_products[sizeof($cat_products) - 1]['id_product'], $cat_product->link_rewrite, $category->link_rewrite, $cat_product->ean13);
						$prevName = $cat_products[sizeof($cat_products) - 1]['name'];
					}
					
					if ($i < sizeof($cat_products) - 1)
					{
						$cat_product = new Product($cat_products[$i + 1]['id_product'], false, intval($cookie->id_lang));
						$nextLink = $link->getProductLink($cat_products[$i + 1]['id_product'], $cat_product->link_rewrite, $category->link_rewrite, $cat_product->ean13);
						$nextName = $cat_products[$i + 1]['name'];
					}
					elseif ($loop AND sizeof($cat_products) > 1)
					{
						$cat_product = new Product($cat_products[0]['id_product'], false, intval($cookie->id_lang));
						$nextLink = $link->getProductLink($cat_products[0]['id_product'], $cat_product->link_rewrite, $category->link_rewrite, $cat_product->ean13);
						$nextName = $cat_products[0]['name'];
					}
				}
			}
			
		$homepage = Configuration::get('PRODUCT_LINKS_NC_HOMEPAGE');

		$smarty->assign(array('prevLink' => $prevLink, 'prevName' => $prevName, 'nextLink' => $nextLink, 'nextName' => $nextName));
		$smarty->assign('path', Tools::getFullPath($homepage ? $category->id : ($category->id == 1 ? $product->id_category_default : $category->id), $product->name));
	
		if (!$homepage AND $category->id == 1)
			$cookie->last_visited_category = intval($product->id_category_default);

		return $this->display(__FILE__, 'productlinksnc.tpl');
	}
	
	public function hookProductActions($params)
	{
		return $this->hookProductFooter($params);
	}
	
	public function hookExtraLeft($params)
    {
        return $this->hookProductFooter($params);
    }

    public function hookExtraRight($params)
    {
        return $this->hookProductFooter($params);
    }	
	
	public function hookHome($params)
	{
		global $cookie;
		
		$cookie->last_visited_category = 1;	
	}
}