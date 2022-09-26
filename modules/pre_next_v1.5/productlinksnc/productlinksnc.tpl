{if $prevLink != NULL OR $nextLink != NULL}
    <p id="nextprev_links">{if $prevLink != NULL}<a href="{$prevLink}" id="prev_link" title="{$prevName}">&laquo; {l s='Previous' mod='productlinksnc'}</a>{/if} {if $nextLink != NULL}<a href="{$nextLink}" id="next_link" title="{$nextName}">{l s='Next' mod='productlinksnc'} &raquo;</a>{/if}</p>
{/if}