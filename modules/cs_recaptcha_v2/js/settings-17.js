/*
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

$(document).ready(function(){
    $('form input[name=submitMessage]').parent().prepend("<div class=\"form-group row\"><div class=\"offset-md-3\"><div class=\"col-md-9\"><div class=\"g-recaptcha\" data-sitekey=\"" + recaptchaKey + "\"></div></div></div></div>");
});



