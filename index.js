import{a as v,S as q,i}from"./assets/vendor-BgmC94F3.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const P="https://pixabay.com/api/",R="52986014-6c248434ffeaf5f82fd167a25";async function m(s,a=1,e=15){const r={key:R,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:e},{data:t}=await v.get(P,{params:r});return t}const p=document.querySelector(".gallery"),h=document.querySelector("[data-loader]"),y=document.querySelector("[data-load-more]"),B=new q(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const a=s.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${e.webformatURL}"
                    alt="${e.tags}"
                />
            </a>

            <ul class="stats">
                <li class="stats-item">
                    <span class="stats-label">Likes</span>
                    <span class="stats-value">${e.likes}</span>
                </li>
                <li class="stats-item">
                    <span class="stats-label">Views</span>
                    <span class="stats-value">${e.views}</span>
                </li>
                <li class="stats-item">
                    <span class="stats-label">Comments</span>
                    <span class="stats-value">${e.comments}</span>
                </li>
                <li class="stats-item">
                    <span class="stats-label">Downloads</span>
                    <span class="stats-value">${e.downloads}</span>
                </li>
            </ul>
        </li>
        `).join("");p.insertAdjacentHTML("beforeend",a),B.refresh()}function M(){p.innerHTML=""}function L(){h.classList.remove("is-hidden")}function w(){h.classList.add("is-hidden")}function b(){y.classList.remove("is-hidden")}function l(){y.classList.add("is-hidden")}const S=document.querySelector("form"),T=document.querySelector("[data-load-more]"),c=15;let d="",n=1,f=0;S.addEventListener("submit",$);T.addEventListener("click",E);async function $(s){s.preventDefault();const a=s.currentTarget.elements["search-text"].value.trim();if(!a){i.error({message:"Please enter a search query.",position:"topRight"});return}d=a,n=1,M(),l(),L();try{const e=await m(d,n,c);if(f=e.totalHits??0,!e.hits||e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"",class:"toast-error"});return}g(e.hits);const r=n*c;f>r?b():l()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight",icon:"",class:"toast-error"})}finally{setTimeout(()=>{w()},6e3),S.reset()}}async function E(){n+=1,l(),L();try{const s=await m(d,n,c);g(s.hits),x(),n*c>=f?(l(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight",icon:"",class:"toast-error"})}finally{setTimeout(()=>{w()},6e3)}}function x(){const s=document.querySelector(".gallery .gallery-item");if(!s)return;const{height:a}=s.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
