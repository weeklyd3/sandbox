// ==UserScript==
// @name         Community Diamond Restorer
// @version      0.1
// @description  Adds Community's diamond back.
// @author       https://stackoverflow.com/users/15578194
// @match        https://*.askubuntu.com/*
// @match        https://*.mathoverflow.net/*
// @match        https://*.serverfault.com/*
// @match        https://*.stackapps.com/*
// @match        https://*.stackexchange.com/*
// @match        https://*.stackoverflow.com/*
// @icon         https://www.google.com/s2/favicons?domain=stackexchange.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.href.endsWith("/users/-1/community")) {
        document.querySelector("#mainbar-full > div.ps-relative.mb16 > div.d-flex.ai-center.fw-wrap.gs16.md\\:fd-column.md\\:ai-start > div > div > div.flex--item.mb12.fs-headline2.lh-xs").innerHTML += "<div class=\"flex--item s-badge s-badge__moderator\">Moderator</div>";
        if (document.querySelector("#mainbar-full > div.ps-relative.mb16 > div.d-flex.ai-center.fw-wrap.gs16.md\\:fd-column.md\\:ai-start > div > div > div:nth-child(2)") != null) {
            document.querySelector("#mainbar-full > div.ps-relative.mb16 > div.d-flex.ai-center.fw-wrap.gs16.md\\:fd-column.md\\:ai-start > div > div > div:nth-child(2)").style.display = 'none';
        }
    }
    if (document.querySelector('span[title="Community Bot — not a real person. Replies to this bot are not monitored."]') != null) {
        document.querySelector('span[title="Community Bot — not a real person. Replies to this bot are not monitored."]').style.display = 'none';
        document.querySelector('span[title="Community Bot — not a real person. Replies to this bot are not monitored."]').parentNode.innerHTML += '<span class="flex--item s-badge ml2 s-badge__moderator s-badge__xs mtn2 fs-fine" title="Moderator">Mod</span>';
    }
})();
