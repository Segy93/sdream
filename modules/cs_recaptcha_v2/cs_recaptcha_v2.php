<?php
/**
 * cs_recaptcha_v2 front-end module version 1.0.0 for Prestashop 1.6, 1.7
 * Support contact : prestashop@comonsoft.com.
 *
 * NOTICE OF LICENSE
 *
 * This source file is the property of Com'onSoft
 * that is bundled with this package.
 * It is also available through the world-wide-web at this URL:
 * https://boutique.comonsoft.com/
 *
 * @category  front-end
 * @package   cs_recaptcha_v2
 * @author    Com'onSoft (http://www.comonsoft.com/)
 * @copyright 2016-2018 Com'onSoft and contributors
 * @version   1.0.0
 */
if (!defined('_PS_VERSION_'))
	exit;

class Cs_recaptcha_v2 extends Module
{

	private $_html = '';

	public function __construct()
	{
		$this->author = 'comonsoft';
		$this->name = 'cs_recaptcha_v2';
		$this->tab = 'front_office_features';
		$this->version = '1.0.0';
		$this->need_instance = 1;
		
		$this->bootstrap = true;
		parent::__construct();

		$this->displayName = $this->l('reCaptcha v2');
		$this->description = $this->l('Add a reCaptcha v2 to your website contact form');

		if ($this->active && (!Configuration::get('RECAPTCHA_PUBLIC_KEY') || !Configuration::get('RECAPTCHA_PRIVATE_KEY')) )
				$this->warning = $this->l('need to be configurated');

	}

	public function install()
	{


		if(floatval(_PS_VERSION_) >= 1.6 && floatval(_PS_VERSION_) < 1.7){

			if($contactFormTpl = file_get_contents(_PS_THEME_DIR_.'contact-form.tpl')){
				$pos = strpos($contactFormTpl, 'name="submitMessage"');
				if(!$pos){
					$this->_errors[] = $this->l('HTML tag button type="submit" name="submitMessage" not found in "contact-form.tpl"');
				}
			}else{
				$this->_errors[] = $this->l('Template "contact-form.tpl" was not found in your theme!');
			}

		}elseif(floatval(_PS_VERSION_) >= 1.7){

			if($contactFormTpl = file_get_contents(_PS_THEME_DIR_.'modules/contactform/views/templates/widget/contactform.tpl')){
				$pos = strpos($contactFormTpl, 'name="submitMessage"');
				if(!$pos){
					$this->_errors[] = $this->l('HTML tag input type="submit" name="submitMessage" not found in "contactform.tpl"');
				}
			}else{
				$this->_errors[] = $this->l('Template "contactform.tpl" was not found in your theme!');
			}

		}else{

			$this->_errors[] = Tools::displayError('Module incompatible with your version of Prestashop');

		}

		if(count($this->_errors)){
			return false;
		}elseif (!parent::install() || !$this->registerHook('header')){
			return false;
		}else{
			return true;
		}

	}

	public function uninstall()
	{
		if (!parent::uninstall())
			return false;

		if (!Configuration::deleteByName('RECAPTCHA_PUBLIC_KEY') || !Configuration::deleteByName('RECAPTCHA_PRIVATE_KEY'))
			return false;

		return true;
	}

	/**
	 * Soumission de la configuration dans l'admin
	 */
	public function postProcess()
	{
		if (Tools::isSubmit('SubmitCaptchaConfiguration'))
		{
			$output = false;

			$public_key = trim(strval(Tools::getValue('RECAPTCHA_PUBLIC_KEY')));
			if($public_key && !empty($public_key) && ValidateCore::isGenericName($public_key))
				Configuration::updateValue('RECAPTCHA_PUBLIC_KEY', Tools::getValue('RECAPTCHA_PUBLIC_KEY'));
			else
				$output .= $this->displayError($this->l('Please fill the captcha public key'));

			$private_key = trim(strval(Tools::getValue('RECAPTCHA_PRIVATE_KEY')));
			if($private_key && !empty($private_key) && ValidateCore::isGenericName($private_key))
				Configuration::updateValue('RECAPTCHA_PRIVATE_KEY', Tools::getValue('RECAPTCHA_PRIVATE_KEY'));
			else
				$output .= $this->displayError($this->l('Please fill the captcha private key'));

			if(!$output)
				$this->_html .= $this->displayConfirmation($this->l('Settings updated'));
			else
				return $output;

		}
	}

	private function _displayInfos()
	{
		return $this->display(__FILE__, 'views/templates/admin/infos.tpl');
	}

	public function getContent()
	{
		$this->_html .=$this->_displayInfos();
		$this->_html .=$this->postProcess();
		$this->_html .= $this->renderForm();

		return $this->_html;
	}

	/**
	 * Affichage du formulaire de configuration Admin
	 */
	public function renderForm(){

		$fields_form = array(
			'form' => array(
				'legend' => array(
					'title' => $this->l('reCaptcha v2 Configuration'),
					'icon' => 'icon-cogs'
				),
				'description' => $this->l('To get your own public and private keys please click on the folowing link').'<br /><a href="https://www.google.com/recaptcha/intro/index.html" target="_blank">https://www.google.com/recaptcha/intro/index.html</a>',
				'input' => array(
					array(
						'type' => 'text',
						'label' => $this->l('reCaptcha public key'),
						'name' => 'RECAPTCHA_PUBLIC_KEY',
						'required' => true,
						'empty_message' => $this->l('Please fill the captcha public key'),
					),
					array(
						'type' => 'text',
						'label' => $this->l('reCaptcha private key'),
						'name' => 'RECAPTCHA_PRIVATE_KEY',
						'required' => true,
						'empty_message' => $this->l('Please fill the captcha private key'),
					)
				),
				'submit' => array(
					'title' => $this->l('Save'),
					'class' => 'button btn btn-default pull-right',
				)
			),
		);

		$helper = new HelperForm();
		$helper->show_toolbar = false;
		$helper->table =  $this->table;
		$lang = new Language((int)Configuration::get('PS_LANG_DEFAULT'));
		$helper->default_form_language = $lang->id;
		$helper->allow_employee_form_lang = Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') ? Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') : 0;
		$this->fields_form = array();
		$helper->id = (int)Tools::getValue('id_carrier');
		$helper->identifier = $this->identifier;
		$helper->submit_action = 'SubmitCaptchaConfiguration';
		$helper->currentIndex = $this->context->link->getAdminLink('AdminModules', false).'&configure='.$this->name.'&tab_module='.$this->tab.'&module_name='.$this->name;
		$helper->token = Tools::getAdminTokenLite('AdminModules');
		$helper->tpl_vars = array(
			'fields_value' => $this->getConfigFieldsValues(),
			'languages' => $this->context->controller->getLanguages(),
			'id_language' => $this->context->language->id
		);

		return $helper->generateForm(array($fields_form));

	}
	
	public function getConfigFieldsValues()
	{
		return array(
			'RECAPTCHA_PUBLIC_KEY' => Tools::getValue('RECAPTCHA_PUBLIC_KEY', Configuration::get('RECAPTCHA_PUBLIC_KEY')),
			'RECAPTCHA_PRIVATE_KEY' => Tools::getValue('RECAPTCHA_PRIVATE_KEY', Configuration::get('RECAPTCHA_PRIVATE_KEY')),
		);
	}

	/**
	 * Hook Header for the contact form
	 */
	public function hookHeader($params)
	{
		// Display on the contact form
		if ($this->context->controller instanceof ContactController){
			if(floatval(_PS_VERSION_) >= 1.6 && floatval(_PS_VERSION_) < 1.7){
				$this->context->controller->addJS($this->_path.'js/settings-16.js');
			}elseif(floatval(_PS_VERSION_) >= 1.7){
				$this->context->controller->registerJavascript('settings-17',$this->_path.'js/settings-17.js');
			}

			Media::addJsDef(array('recaptchaKey' => Configuration::get('RECAPTCHA_PUBLIC_KEY')));
			return $this->displayCaptchaContactForm();
		}

	}

	/**
	 * reCaptcha display on the contact form page
	 */
	private function displayCaptchaContactForm()
	{
		$includes = '';
		$includes .= '<script src="https://www.google.com/recaptcha/api.js?hl='.$this->context->language->language_code.'" async defer></script>';

		return $includes;
	}


}




