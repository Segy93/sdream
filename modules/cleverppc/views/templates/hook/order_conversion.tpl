<?php
/**

* NOTICE OF LICENSE

*

* This file is licenced under the Software License Agreement.

* With the purchase or the installation of the software in your application

* you accept the licence agreement.

*

* You must not modify, adapt or create derivative works of this source code

*

*  @author    Carlos García Vega

*  @copyright 2010-2020 CleverPPC S.L.

*  @license   LICENSE.txt

*/
?>
{literal}
	<script async src="https://www.googletagmanager.com/gtag/js?id=AW-{/literal}{$snippet_id|escape:'htmlall':'UTF-8'}{literal}"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'AW-{/literal}{$snippet_id|escape:'htmlall':'UTF-8'}{literal|escape:'htmlall':'UTF-8'}');
	</script>
	<script>
	  gtag('event', 'conversion', {
	  	{/literal}
	      'send_to': 'AW-{$snippet_id|escape:'htmlall':'UTF-8'}/{$snippet_label|escape:'htmlall':'UTF-8'}',
	      'value': '{$total_paid|escape:'htmlall':'UTF-8'}',
	      'currency': '{$currency|escape:'htmlall':'UTF-8'}',
	      'transaction_id': ''
	    {literal}
	  });
	</script>
{/literal}