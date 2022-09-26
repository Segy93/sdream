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
    gtag('config', 'AW-{/literal}{$snippet_id|escape:'htmlall':'UTF-8'}{literal}');
  </script>
  <script>
    {/literal}
      {foreach from=$product_ids item=curr}
        {literal}
          gtag('event', 'page_view', {
            {/literal}
              'send_to': 'AW-{$snippet_id|escape:'htmlall':'UTF-8'}',
              'ecomm_pagetype': '{$current_page|escape:'htmlall':'UTF-8'}',
              'ecomm_prodid': '{$curr|escape:'htmlall':'UTF-8'}'
            {literal}
          });
        {/literal}
      {/foreach}
    {literal}
  </script>
{/literal}