!function(){"use strict";for(var e=document,d=function(d){return e.querySelector(d)},a=function(e){return document.createElement(e)},n=d(".card"),t=a("div"),s=a("div"),i=a("button"),o=a("button"),c=d(".card header p").cloneNode(!0),r=a("div"),p=a("div"),l=d(".more"),u=0;u<4;u++){var m=a("div");m.className="stripe-".concat(String.fromCharCode(u+97)),p.append(m)}function f(){t.classList.add("flip"),t.classList.remove("unflip"),document.body.classList.add("flipped"),document.body.classList.remove("unflipped"),window.location.hash="#more"}t.className="wrap",i.className="card front",r.className="logo",p.className="stripes",s.className="scene",o.title="Flip",o.innerText="←",o.setAttribute("aria-hidden",!0),i.setAttribute("aria-hidden",!0),n.classList.add("back"),n.append(o),i.append(r),i.append(c),t.append(i),t.append(n),s.append(t),s.append(l),document.body.prepend(s),document.body.prepend(p),i.addEventListener("click",f),o.addEventListener("click",(function(){t.classList.add("unflip"),t.classList.remove("flip"),document.body.classList.remove("flipped"),document.body.classList.add("unflipped"),window.location.hash=""})),"#more"===window.location.hash&&f()}();