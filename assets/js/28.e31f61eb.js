(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{286:function(t,e,s){},292:function(t,e,s){"use strict";s(286)},296:function(t,e,s){"use strict";s.r(e);var i={data(){return{path:this.$route.path,interval:null}},mounted(){this.interval=setInterval(this.hideAds,2e3)},beforeDestroy(){clearInterval(this.interval)},methods:{hideAds(){const t=this.$el.querySelector("#disqus_thread").querySelector("iframe:first-child");null==t||t.style.setProperty("display","none","important")}}},n=(s(292),s(16)),r=Object(n.a)(i,(function(){var t=this._self._c;return t("section",[t("h2",{attrs:{id:"comments"}},[this._v("Comments")]),this._v(" "),t("disqus",{attrs:{identifier:this.path}})],1)}),[],!1,null,"2fa9e9ea",null);e.default=r.exports}}]);