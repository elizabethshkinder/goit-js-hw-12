import{a as w,S as L,i as l}from"./assets/vendor-BgmC94F3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const b="https://pixabay.com/api/",S="52986014-6c248434ffeaf5f82fd167a25";async function m(s,e=1,t=15){const r={key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:t},{data:a}=await w.get(b,{params:r});return a}const g=document.querySelector(".gallery"),v=new L(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const e=s.map(t=>`
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
        `).join("");g.insertAdjacentHTML("beforeend",e),v.refresh()}function q(){g.innerHTML=""}function c(s,e=!0){const t=s==="top"?"[data-loader-top]":"[data-loader-bottom]",r=document.querySelector(t);r==null||r.classList.toggle("is-hidden",!e)}function i(s=!0){const e=document.querySelector("[data-load-more]");e==null||e.classList.toggle("is-hidden",!s)}const h=document.querySelector("form"),P=document.querySelector("[data-load-more]"),u=15;let p="",n=1,f=0;h.addEventListener("submit",R);P.addEventListener("click",B);async function R(s){s.preventDefault();const e=s.currentTarget.elements["search-text"].value.trim();if(!e){l.error({message:"Please enter a search query.",position:"topRight"});return}p=e,n=1,q(),i(!1),c("top",!0);try{const t=await m(p,n,u);if(f=t.totalHits??0,!t.hits||t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"",class:"toast-error"});return}y(t.hits);const r=n*u;i(f>r)}catch{l.error({message:"Something went wrong. Please try again later.",position:"topRight",icon:"",class:"toast-error"})}finally{c("top",!1),h.reset()}}async function B(){n+=1,i(!1),c("bottom",!0);try{const s=await m(p,n,u);y(s.hits),E(),n*u>=f?(i(!1),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):i(!0)}catch{l.error({message:"Something went wrong. Please try again later.",position:"topRight",icon:"",class:"toast-error"})}finally{c("bottom",!1)}}function E(){const s=document.querySelector(".gallery .gallery-item");if(!s)return;const{height:e}=s.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
