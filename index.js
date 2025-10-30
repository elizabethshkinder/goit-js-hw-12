import{a as w,S as L,i as n}from"./assets/vendor-BgmC94F3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const b="https://pixabay.com/api/",S="52986014-6c248434ffeaf5f82fd167a25";async function g(s,e=1,t=15){const o={key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:t},{data:a}=await w.get(b,{params:o});return a}const m=document.querySelector(".gallery"),v=new L(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const e=s.map(t=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${t.webformatURL}"
                    alt="${t.tags}"
                />
            </a>

            <ul class="stats">
                <li class="stats-item">
                    <span class="stats-label">Likes</span>
                    <span class="stats-value">${t.likes}</span>
                </li>
                <li class="stats-item">
                    <span class="stats-label">Views</span>
                    <span class="stats-value">${t.views}</span>
                </li>
                <li class="stats-item">
                    <span class="stats-label">Comments</span>
                    <span class="stats-value">${t.comments}</span>
                </li>
                <li class="stats-item">
                    <span class="stats-label">Downloads</span>
                    <span class="stats-value">${t.downloads}</span>
                </li>
            </ul>
        </li>
        `).join("");m.insertAdjacentHTML("beforeend",e),v.refresh()}function q(){m.innerHTML=""}function u(s,e=!0){const t=s==="top"?"[data-loader-top]":"[data-loader-bottom]",o=document.querySelector(t);o==null||o.classList.toggle("is-hidden",!e)}function i(s=!0){const e=document.querySelector("[data-load-more]");e==null||e.classList.toggle("is-hidden",!s)}const y=document.querySelector("form"),P=document.querySelector("[data-load-more]"),d=15;let p="",l=1,c=0;y.addEventListener("submit",R);P.addEventListener("click",B);async function R(s){s.preventDefault();const e=s.currentTarget.elements["search-text"].value.trim();if(!e){n.error({message:"Please enter a search query.",position:"topRight"});return}p=e,l=1,q(),i(!1),u("top",!0);try{const t=await g(p,l,d);if(c=t.totalHits??0,!t.hits||t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"",class:"toast-error"});return}h(t.hits);const o=l*d;i(c>o),c<=o&&n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight",icon:"",class:"toast-error"})}finally{u("top",!1),y.reset()}}async function B(){l+=1,i(!1),u("bottom",!0);try{const s=await g(p,l,d);h(s.hits),E(),l*d>=c?(i(!1),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):i(!0)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight",icon:"",class:"toast-error"})}finally{u("bottom",!1)}}function E(){const s=document.querySelector(".gallery .gallery-item");if(!s)return;const{height:e}=s.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
