(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{312:function(t,e,n){"use strict";function s(t,e){var n;return"string"==typeof t?e?(null!==(n=e[t])&&void 0!==n||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}n.d(e,"a",(function(){return s}))},340:function(t,e,n){},409:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const s=t=>"function"==typeof t},415:function(t,e,n){"use strict";n(340)},432:function(t,e,n){"use strict";n.r(e);var s=n(312),o=n(409);const r={any:0,all:1};var i={mounted(){const t=this.$root.$el.querySelector(".navbar");!function(t,e,{root:n,margin:i,amount:c="any"}={}){if("undefined"==typeof IntersectionObserver)return()=>{};const a=Object(s.a)(t),l=new WeakMap,u=new IntersectionObserver(t=>{t.forEach(t=>{const n=l.get(t.target);if(t.isIntersecting!==Boolean(n))if(t.isIntersecting){const n=e(t);Object(o.a)(n)?l.set(t.target,n):u.unobserve(t.target)}else n&&(n(t),l.delete(t.target))})},{root:n,rootMargin:i,threshold:"number"==typeof c?c:r[c]});a.forEach(t=>u.observe(t))}(this.$el,()=>(t.classList.remove("show"),()=>{t.classList.add("show")}))},methods:{scroll(){window.scrollTo({top:this.$el.scrollHeight})}}},c=(n(415),n(16)),a=Object(c.a)(i,(function(){var t=this._self._c;return t("section",[t("button",{on:{click:this.scroll}},[this._m(0),this._v(" "),t("span",[this._v("Visnalize")])]),this._v(" "),this._m(1),this._v(" "),t("button",{staticClass:"indicator",attrs:{"aria-label":"scroll down"},on:{click:this.scroll}})])}),[function(){var t=this._self._c;return t("span",[t("img",{attrs:{src:"/assets/logo.png"}})])},function(){var t=this._self._c;return t("h1",[this._v("Recreating "),t("b",[this._v("Nostalgia")]),this._v(" for "),t("b",[this._v("Entertainment")])])}],!1,null,"27384760",null);e.default=a.exports}}]);