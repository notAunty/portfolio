$("document").ready((function(){var e=document.querySelector("body"),t=document.getElementById("toggle"),o=document.getElementById("switch");t.addEventListener("click",(function(){o.checked?e.classList.remove("night"):e.classList.add("night")}));var n=document.querySelector(".intro").offsetHeight,r=document.getElementById("go-top-btn");window.addEventListener("scroll",(function(){window.scrollY>.8*n?r.style.transform="translateY(0px)":r.style.transform="translateY(64px)"}),!1),r.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),document.querySelectorAll("img").forEach((function(e){e.onerror=function(){this.style.display="none"}}));var s=document.querySelector(".emoji.wave-hand");setTimeout((function(){s.classList.add("wave"),setTimeout((function(){s.classList.remove("wave")}),2e3)}),1e3),s.addEventListener("mouseover",(function(){s.classList.add("wave")})),s.addEventListener("mouseout",(function(){s.classList.remove("wave")})),window.sr=ScrollReveal({reset:!1,duration:600,easing:"cubic-bezier(.694,0,.335,1)",scale:1,viewFactor:.3}),sr.reveal(".background"),sr.reveal(".skills"),sr.reveal(".experience",{viewFactor:.2}),sr.reveal(".featured-projects",{viewFactor:.1}),sr.reveal(".other-projects",{viewFactor:.05})}));