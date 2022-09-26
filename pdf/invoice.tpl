{*
* 2007-2016 PrestaShop
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
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2016 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}

{$style_tab}


<table width="100%" id="body" border="0" cellpadding="0" cellspacing="0" style="margin:0;">
	<!-- Invoicing -->
	<tr>
		<td colspan="12">

			{$addresses_tab}

		</td>
	</tr>

	<tr>
		<td colspan="12" height="30">&nbsp;</td>
	</tr>

	<!-- TVA Info -->
	<tr>
		<td colspan="12">

			{$summary_tab}

		</td>
	</tr>

	<tr>
		<td colspan="12" height="20">&nbsp;</td>
	</tr>

	<!-- Product -->
	<tr>
		<td colspan="12">

			{$product_tab}

		</td>
	</tr>

	<tr>
		<td colspan="12" height="10">&nbsp;</td>
	</tr>

	<!-- TVA -->
	<tr>
		<!-- Code TVA -->
		<td colspan="6" class="left">

			{$tax_tab}

		</td>
		<td colspan="1">&nbsp;</td>
		<!-- Calcule TVA -->
		<td colspan="5" rowspan="5" class="right">

			{$total_tab}

		</td>
	</tr>
	
	{$note_tab}
	
	<tr>
		<td colspan="12" height="10">&nbsp;</td>
	</tr>

	<tr>
		<td colspan="6" class="left">

			{$payment_tab}

		</td>
		<td colspan="1">&nbsp;</td>
	</tr>

	<tr>
		<td colspan="6" class="left">

			{$shipping_tab}

		</td>
		<td colspan="1">&nbsp;</td>
	</tr>

	<tr>
		<td colspan="12" height="10">&nbsp;</td>
	</tr>

	<tr>
		<td colspan="7" class="left small">

			<table>
				<tr>
					<td>
						<p>{$legal_free_text|escape:'html':'UTF-8'|nl2br}</p>
					</td>
				</tr>
			</table>

		</td>
	</tr>
	<!-- Hook -->
	{if isset($HOOK_DISPLAY_PDF)}
	<tr>
		<td colspan="12" height="30">&nbsp;</td>
	</tr>

	<tr>
		<td colspan="2">&nbsp;</td>
		<td colspan="10">
			{$HOOK_DISPLAY_PDF}
		</td>
	</tr>
	{/if}
<table style="undefined;table-layout: fixed;"><colgroup><col ><col ></colgroup><tr><th><img src="https://www.sdream.rs/img/vapex-logo.png" alt="Vapex logo" height="40"></th><th><img src="https://www.sdream.rs/img/s-dream-shop-logo-1489705007.jpg" alt="S Dream Shop"  height="40"></th></tr><tr><td>www.vapeks.rs</td><td>Odgovorno lice za prijem reklamacija:</td></tr><tr><td>PIB: 103209922</td><td>Ljiljana Đoković</td></tr><tr><td>MB: 17533827</td><td>Telefon: +381 63 649 132</td></tr><tr><td>Šifra de. 2016</td><td>Email: ljiljana.djokovic@foamline.com</td></tr></table>

</table>
