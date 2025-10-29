import{a as u,S as p,i as n}from"./assets/vendor-w71Y5U1_.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();const f="https://pixabay.com/api/",d="52986014-6c248434ffeaf5f82fd167a25";function m(r){const a={key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"};return u.get(f,{params:a}).then(e=>e.data).catch(e=>{throw e})}const i=document.querySelector(".gallery"),c=document.querySelector("[data-loader]"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const a=r.map(e=>`
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
        `).join("");i.insertAdjacentHTML("beforeend",a),h.refresh()}function g(){i.innerHTML=""}function L(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}const w=document.querySelector("form");w.addEventListener("submit",S);function S(r){r.preventDefault();const a=r.currentTarget.elements["search-text"].value.trim();if(a===""){n.error({message:"Please enter a search query.",position:"topRight"});return}g(),L(),m(a).then(e=>{if(!e.hits||e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"",class:"toast-error"});return}y(e.hits)}).catch(e=>{console.error(e),n.error({message:"Something went wrong. Please try again later.",position:"topRight",icon:"",class:"toast-error"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
