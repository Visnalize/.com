(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{431:function(t,e,s){"use strict";s.r(e);var i={props:{selector:{type:String,default:".content__default"},content:{type:String}},data:()=>({isSupported:!0,isPlaying:!1,isPaused:!1}),watch:{$route(t,e){t.path!==e.path&&speechSynthesis.cancel()}},beforeDestroy(){speechSynthesis.cancel()},mounted(){this.isSupported="speechSynthesis"in window,this.$emit("supported",this.isSupported),this.emit("stopped")},methods:{getContent(){if(this.content)return this.content;const t=this.selector+" "+["h1","h2","h3","h4","h5","h6","p","li"].join(`,${this.selector} `),e=this.$root.$el.querySelectorAll(t);return Array.from(e).map(t=>t.textContent).join(". ")},toggle(){if(!this.isSupported)return;if(this.isPlaying&&!this.isPaused)return void speechSynthesis.pause();if(!this.isPlaying&&this.isPaused)return void speechSynthesis.resume();const t=new SpeechSynthesisUtterance(this.getContent());t.onstart=()=>{this.isPlaying=!0,this.emit("playing")},t.onend=()=>{this.isPlaying=!1,this.emit("stopped")},t.onpause=()=>{this.isPaused=!0,this.isPlaying=!1,this.emit("paused")},t.onresume=()=>{this.isPaused=!1,this.isPlaying=!0,this.emit("resumed")},speechSynthesis.cancel(),speechSynthesis.speak(t)},emit(t){this.$emit("statechange",t)}},render(){return this.$scopedSlots.default({toggle:this.toggle})}},n=s(16),h=Object(n.a)(i,void 0,void 0,!1,null,null,null);e.default=h.exports}}]);