(window.webpackJsonp=window.webpackJsonp||[]).push([[6,12,36,38],{284:function(t,e,n){},286:function(t,e,n){},288:function(t,e,n){"use strict";n(284)},290:function(t,e,n){"use strict";n.r(e);n(48);var o={props:{format:{type:String,default:"auto"}},mounted(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}},s=(n(288),n(13)),a=Object(s.a)(o,(function(){return(0,this._self._c)("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-slot":"3336580675","data-ad-client":"ca-pub-5904323684803247","data-ad-format":this.format,"data-full-width-responsive":"true"}})}),[],!1,null,"18b37b7d",null);e.default=a.exports},292:function(t,e,n){"use strict";n(286)},296:function(t,e,n){"use strict";n.r(e);var o={data(){return{path:this.$route.path,interval:null}},mounted(){this.interval=setInterval(this.hideAds,2e3)},beforeDestroy(){clearInterval(this.interval)},methods:{hideAds(){const t=this.$el.querySelector("#disqus_thread").querySelector("iframe:first-child");null==t||t.style.setProperty("display","none","important")}}},s=(n(292),n(13)),a=Object(s.a)(o,(function(){var t=this._self._c;return t("section",[t("h2",{attrs:{id:"comments"}},[this._v("Comments")]),this._v(" "),t("disqus",{attrs:{identifier:this.path}})],1)}),[],!1,null,"2fa9e9ea",null);e.default=a.exports},300:function(t,e,n){"use strict";n.r(e);var o=n(306),s=n(296),a=n(290),i={props:{noSideAds:Boolean,noComments:Boolean},components:{ParentLayout:o.default,CommentSection:s.default,GoogleAds:a.default}},l=n(13),r=Object(l.a)(i,(function(){var t=this,e=t._self._c;return e("parent-layout",{scopedSlots:t._u([t.noSideAds?null:{key:"sidebar-bottom",fn:function(){return[e("div",{staticClass:"googleads"},[e("google-ads")],1)]},proxy:!0},t.noComments?null:{key:"page-bottom",fn:function(){return[e("google-ads"),t._v(" "),e("comment-section")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.default=r.exports},331:function(t,e,n){},378:function(t,e,n){"use strict";n(331)},457:function(t,e,n){"use strict";n.r(e);var o={components:{Visnalize:n(300).default}},s=(n(378),n(13)),a=Object(s.a)(o,(function(){return(0,this._self._c)("visnalize")}),[],!1,null,"20ccf1a2",null);e.default=a.exports}}]);