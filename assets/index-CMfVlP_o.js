(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#navbar").innerHTML=`
  <nav class="bg-secondary">
      <div class="container flex justify-between">
        <img class="logo pt-4 pb-[15.43px]" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-white.png?raw=true" alt="logo">
        <ul class=" text-white flex items-center">
          <li><a class="pl-[64px] py-[25px]" href="#">系列鏡框</a></li>
          <li><a class="pl-[64px] py-[25px]" href="#">門市據點</a></li>
          <li><a class="pl-[64px] py-[25px]" href="#">部落格</a></li>
          <li><a class="pl-[64px] py-[25px]" href="#">常見問題</a></li>
        </ul>
      </div>
    </nav>
`;
