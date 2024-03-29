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
<p><strong>
{if $state == 'pending'}
    {l s='Your payment is pending, it should validated by Payplug in a few seconds.' mod='payplug'}<br>
    {l s='An email will be sent to your email address to confirm payment.' mod='payplug'}
{elseif $state == 'paid'}
    {l s='Your payment has been validated !' mod='payplug'}<br>
    {l s='An email has been sent to your email address to confirm payment.' mod='payplug'}
{/if}

</strong></p>
<p>
{l s='Order summary :' mod='payplug'}<br>
<ul>
{if isset($reference)}
    <li>{l s='Reference : ' mod='payplug'}<span id="pp_ref">{$reference|escape:'htmlall':'UTF-8'}</span></li>
{/if}
    <li>{l s='Total amount : ' mod='payplug'}<span id="pp_amount">{$totalPaid|escape:'htmlall':'UTF-8'} €</span></li>
</ul>
</p>