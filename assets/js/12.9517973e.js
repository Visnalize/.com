(window.webpackJsonp=window.webpackJsonp||[]).push([[12,22],{304:function(t,e,n){},311:function(t,e,n){"use strict";n(304)},332:function(t,e,n){},349:function(t,e,n){"use strict";n.r(e);var r={props:{href:String}},s=(n(311),n(16)),o=Object(s.a)(r,(function(){var t=this,e=t._self._c;return t.href?e("router-link",{staticClass:"a-button",attrs:{to:t.href}},[t._t("default")],2):e("button",{staticClass:"a-button",on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,"fb25c132",null);e.default=o.exports},380:function(t,e,n){"use strict";n(332)},409:function(t,e,n){"use strict";n.r(e);n(47);var r={components:{AButton:n(349).default},data:()=>({errors:[]}),methods:{send({target:t}){let{subject:e,content:n}=t;if(this.errors=[],!e.value)return this.errors.push("subject");if(!n.value)return this.errors.push("content");e=encodeURIComponent(e.value),n=encodeURIComponent(n.value);const r=document.createElement("a");r.href=`mailto:visnalize@gmail.com?subject=${e}&body=${n}`,r.target="_blank",r.click(),this.errors=[]}}},s=(n(380),n(16)),o=Object(s.a)(r,(function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.send.apply(null,arguments)}}},[e("div",[e("input",{class:{error:t.errors.includes("subject")},attrs:{type:"text",name:"subject",placeholder:"Subject"}})]),t._v(" "),e("div",[e("textarea",{class:{error:t.errors.includes("content")},attrs:{name:"content",placeholder:"Content"}})]),t._v(" "),e("div",[e("a-button",{attrs:{type:"submit"}},[t._v("Send")])],1)])}),[],!1,null,"54f740f6",null);e.default=o.exports}}]);