{*
* 2017 PayPlug
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PayPlug SAS
*  @copyright 2017 PayPlug SAS
*  @license http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PayPlug SAS
*}
<div class="panel panel-login panel-remove">
    <div class="panel-heading">{l s='CONNECT' mod='payplug'}</div>
    <div class="panel-row">
        {if $connected}
            <div class="panel-row">
                <label>{l s='Account connected' mod='payplug'}</label>
                <div class="block-right">
                    <p class="ppmail">{$PAYPLUG_EMAIL|escape:'htmlall':'UTF-8'}</p>
                    <div class="ppconnectedbuttons">
                        <a class="" target="_blank" href="{$payplug_url|escape:'htmlall':'UTF-8'}/portal">{l s='Payplug Portal' mod='payplug'}</a>
                        <span class="separate_pipe">|</span>
                        <input type="submit" id="disconnect-button" name="submitDisconnect" value="{l s='Disconnect' mod='payplug'}">
                    </div>
                </div>
            </div>
        {else}
            <div class="panel-row">
                <label class="left-block">{l s='Email' mod='payplug'}</label>
                <div class="block-right ppemail">
                    <input class="validate validate_email" type="text" placeholder="{l s='E-mail address' mod='payplug'}" name="PAYPLUG_EMAIL" value="{if isset($PAYPLUG_EMAIL)}{$PAYPLUG_EMAIL|escape:'htmlall':'UTF-8'}{/if}" />
                                <span class="input-error">{$p_error|escape:'htmlall':'UTF-8'}
                                    <span id="error-email-regexp" class="hide">{l s='E-mail address is not valid.' mod='payplug'}</span>
                                </span>
                </div>
            </div>
            <div class="panel-row">
                <label class="left-block">{l s='Password' mod='payplug'}</label>
                <div class="block-right pppassword">
                    <input class="validate validate_password" id="pppwd" type="password" placeholder="{l s='Password' mod='payplug'}" name="PAYPLUG_PASSWORD" value="" />
                                <span class="input-error">{$p_error|escape:'htmlall':'UTF-8'}
                                    <span id="error-password-regexp" class="hide">{l s='Password must be a least 8 caracters long.' mod='payplug'}</span>
                                </span>
                </div>
            </div>
            <div class="panel-row">
                <label class="left-block"></label>
                <div class="block-right">
                    <a href="{$payplug_url|escape:'htmlall':'UTF-8'}/portal/forgot_password" class="forgot_pwd" target="_blank">{l s='Forgot your password?' mod='payplug'}</a>
                </div>
            </div>
            <div class="panel-row">
                <label class="left-block"></label>
                <div class="center-block">
                    <input type="submit" class="green-button" name ="submitAccount" value="{l s='Connect account' mod='payplug'}">
                    <p class="pptips login">{l s='Don\'t have an account?' mod='payplug'} <a href="{$payplug_url|escape:'htmlall':'UTF-8'}/portal/signup?origin=PrestashopV2Config" target="_blank">{l s='Sign up' mod='payplug'}</a></p>
                </div>
                <span class="block-right"><img class="loader" src="{$module_dir|escape:'htmlall':'UTF-8'}views/img/admin/spinner.gif" /></span>
            </div>
        {/if}
    </div>
</div>

<div class="panel panel-show panel-remove">
    <div class="panel-heading">{l s='Display to customers' mod='payplug'}</div>
    {if !$connected}
        <p class="ppwarning not_connected">{l s='Connect to your PayPlug account below to activate the module for your clients.' mod='payplug'}</p>
    {/if}
    <div class="panel-row">
        <label>{l s='Show Payplug to my customers' mod='payplug'}</label>
        <div class="block-right">
            <div class="switch switch-show{if !$connected} ppdisabled{/if}{if $PAYPLUG_SHOW} ppon{/if}">
                <input type="radio" class="switch-input{if !$connected} ppdisabled{/if}"
                       name="PAYPLUG_SHOW" value="0" id="payplug_show_off"
                       {if !$PAYPLUG_SHOW}checked="checked"{/if}>
                <label id="payplug_label_show_off" for="payplug_show_off" class="switch-label switch-label-off"></label>
                <input type="radio" class="switch-input{if !$connected} ppdisabled{/if}"
                       name="PAYPLUG_SHOW" value="1" id="payplug_show_on"
                       {if $PAYPLUG_SHOW}checked="checked"{/if}>
                <label id="payplug_label_show_on" for="payplug_show_on" class="switch-label switch-label-on"></label>
                <span class="switch-selection"></span>
            </div>
        </div>
    </div>
</div>

<div class="panel panel-remove">
    <div class="panel-heading">{l s='SETTINGS' mod='payplug'}</div>
    {if $connected && !$verified}
        <p class="ppwarning not_verified">{l s='You are able to perform only TEST transactions.' mod='payplug'} {l s='Please activate your account to perform LIVE transactions.' mod='payplug'}<a href="http://support.payplug.com/customer/portal/articles/1438899" target="_blank"><br />{l s='More information' mod='payplug'}</a></p>
    {/if}
    <div class="panel-row separate_margin_block">
        <label class="left-block">{l s='Mode' mod='payplug'}</label>
        <div class="block-right">
                    <span class="switch prestashop-switch fixed-width-lg">
                        <input type="radio" class="switch-input{if $verified} verified{/if}{if !$connected} ppdisabled{/if}" name="PAYPLUG_SANDBOX_MODE" value="0" id="payplug_sandbox_mode_off" {if !$PAYPLUG_SANDBOX_MODE}checked="checked" {/if}>
                        <label title="{l s='Payments in LIVE mode will generate real transactions' mod='payplug'}" for="payplug_sandbox_mode_off" class="switch-label switch-label-off{if !$connected} ppdisabled{/if}">{l s='Live' mod='payplug'}</label>
                        <input type="radio" class="switch-input" name="PAYPLUG_SANDBOX_MODE" value="1"
                               id="payplug_sandbox_mode_on" {if $PAYPLUG_SANDBOX_MODE}checked="checked" {/if}>
                        <label title="{l s='Payments in TEST mode will be simulations and will not generate real transactions.' mod='payplug'}" for="payplug_sandbox_mode_on" class="switch-label switch-label-on{if !$connected} ppdisabled{/if}">{l s='Test' mod='payplug'}</label>
                        <span class="switch-selection{if !$connected} ppdisabled{/if}"></span>
                        <a class="slide-button btn" {if $PAYPLUG_SANDBOX_MODE}style="left: 50%" {/if}></a>
                    </span>
        </div>
        <div class="panel-row">
            <div class="block-right">
                <p class="pptips">
                            <span{if !$PAYPLUG_SANDBOX_MODE} class="hide"{/if} id="mode_live_tips">
{l s='In TEST mode all payments will be simulations and will not generate real transactions.' mod='payplug'}<a href="http://support.payplug.com/customer/portal/articles/1701656" target="_blank">
{l s='Learn more.' mod='payplug'}</a>
                            </span>
                    <span{if $PAYPLUG_SANDBOX_MODE} class="hide"{/if} id="mode_sandbox_tips">{l s='In LIVE mode the payments will generate real transactions.' mod='payplug'}</span>
                </p>

            </div>
        </div>
    </div>

    <div class="panel-row separate_margin_block">
        <label class="left-block">{l s='Payment page' mod='payplug'}</label>
        <div class="block-right">
                    <span class="switch prestashop-switch fixed-width-lg">
                        <input type="radio" class="switch-input{if !$connected} ppdisabled{/if}" name="PAYPLUG_EMBEDDED_MODE" value="0" id="payplug_embedded_mode_off"
                                {if !$PAYPLUG_EMBEDDED_MODE} checked="checked" {/if}>
                        <label title="{l s='The customers will be redirected to a PayPlug payment page to finalize the transaction.' mod='payplug'}" for="payplug_embedded_mode_off" class="switch-label switch-label-off
                            {if !$connected} ppdisabled{/if}">{l s='Redirect' mod='payplug'}</label>
                        <input type="radio" class="switch-input{if !$connected} ppdisabled{/if}" name="PAYPLUG_EMBEDDED_MODE" value="1" id="payplug_embedded_mode_on"
                                {if $PAYPLUG_EMBEDDED_MODE} checked="checked" {/if}>
                        <label title="{l s='Payments are performed in an embeddable payment form on your website.' mod='payplug'}" for="payplug_embedded_mode_on" class="switch-label switch-label-on
                            {if !$connected} ppdisabled{/if}">{l s='Embedded' mod='payplug'}</label>
                        <span class="switch-selection{if !$connected} ppdisabled{/if}"></span>
                        <a class="slide-button btn" {if $PAYPLUG_EMBEDDED_MODE}style="left: 50%" {/if}></a>
                    </span>
        </div>
        <div class="panel-row">
            <div class="block-right">
                <p class="pptips">
                            <span{if !$PAYPLUG_EMBEDDED_MODE} class="hide"{/if} id="payment_page_embedded_tips">{l s='Payments are performed in an embeddable payment form.' mod='payplug'}<br>{l s='The customers will pay without being redirected.' mod='payplug'}<a href="http://support.payplug.com/customer/portal/articles/2563974" target="_blank">{l s='Learn more.' mod='payplug'}</a>
                            </span>
                            <span{if $PAYPLUG_EMBEDDED_MODE} class="hide"{/if} id="payment_page_redirect_tips">{l s='The customers will be redirected to a PayPlug payment page to finalize the transaction.' mod='payplug'}
                                <a href="http://support.payplug.com/customer/portal/articles/2018493" target="_blank">{l s='Learn more.' mod='payplug'}</a>
                            </span>
                </p>
            </div>
        </div>
    </div>

    <div class="panel-row">
        <div class="block-head">{l s='Advanced (Premium accounts only)' mod='payplug'}</div>
    </div>
    <div class="panel-row separate_margin_block">
        <label class="left-block">{l s='Enable one-click payments' mod='payplug'}</label>
        <div class="block-right">
                    <span class="switch prestashop-switch fixed-width-lg">
                        <input type="radio" class="switch-input{if !$connected} ppdisabled{/if}{if !$premium} not_premium{/if}" name="PAYPLUG_ONE_CLICK" value="1"
                               id="payplug_one_click_yes" {if $PAYPLUG_ONE_CLICK}checked="checked"{/if}>
                        <label title="{l s='Enable one-click payments' mod='payplug'}" for="payplug_one_click_yes"
                               class="switch-label switch-label-on{if !$connected} ppdisabled{/if}">{l s='YES' mod='payplug'}</label>
                        <input type="radio" class="switch-input{if !$connected} ppdisabled{/if}" name="PAYPLUG_ONE_CLICK" value="0" id="payplug_one_click_no"
                               {if !$PAYPLUG_ONE_CLICK}checked="checked"{/if}>
                        <label title="{l s='Disable one-click payments' mod='payplug'}" for="payplug_one_click_no"
                               class="switch-label switch-label-off{if !$connected} ppdisabled{/if}">{l s='NO' mod='payplug'}</label>
                        <span class="switch-selection{if !$connected} ppdisabled{/if}"></span>
                        <a class="slide-button btn" {if !$PAYPLUG_ONE_CLICK}style="left: 50%"{/if}></a>
                    </span>
        </div>
        <div class="panel-row">
            <div class="block-right">
                <p class="pptips">{l s='Allow customers to save their credit card information for later purchases' mod='payplug'}
                    <a href="http://support.payplug.com/customer/portal/articles/2563975" target="_blank">{l s='Learn more.' mod='payplug'}</a>
                </p>
            </div>
        </div>
    </div>

    <div class="block-button">
        <input id="submitSettings" class="green-button{if !$connected} ppdisabled{/if}{if $is_active} is_active{/if}" type="submit" name="submitSettings" value="{l s='Update settings' mod='payplug'}">
    </div>
</div>
