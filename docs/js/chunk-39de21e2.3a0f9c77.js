(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39de21e2"],{3511:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"py-8 pb-12"},[r("figcaption",[r("h4",{domProps:{textContent:t._s(t.title)}})]),r("v-lazy",{attrs:{options:{thresold:.5},transition:"fade-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[t.clickable?r("img",{staticClass:"pointer-cursor fill-width mt-6",attrs:{src:t.baseurl+"/image/"+t.title+"/poster.jpg","data-title":t.title},on:{click:t.exhibit}}):r("img",{staticClass:"fill-width mt-6",attrs:{src:t.baseurl+"/image/"+t.title+"/poster.jpg"}})]),r("figcaption",{staticClass:"text-right"},[r("h4",[t._v("poster by "),r("a",{attrs:{target:"_blank",href:"https://www.instagram.com/"+t.author+"/"}},[t._v("@"+t._s(t.author))])])])],1)},n=[],a={data:function(){return{isActive:!1}},props:{baseurl:{type:String,required:!0},title:{type:String,required:!0},author:{type:String,required:!0},clickable:{type:Boolean,default:!0}},methods:{exhibit:function(t){var e=t.target.dataset.title;this.$router.push("/exhibition/".concat(e))}}},s=a,o=r("2877"),c=Object(o["a"])(s,i,n,!1,null,null,null);e["a"]=c.exports},"7db0":function(t,e,r){"use strict";var i=r("23e7"),n=r("b727").find,a=r("44d2"),s=r("ae40"),o="find",c=!0,l=s(o);o in[]&&Array(1)[o]((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(o)},"98d7":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[void 0!==t.pic?[r("poster-component",{attrs:{title:t.title,author:t.pic[0][1],clickable:!1,baseurl:t.baseurl}}),t._l(t.pic.slice(1),(function(e,i){return r("pictures-component",{key:i,attrs:{title:t.title,pic:e,baseurl:t.baseurl}})}))]:t._e(),r("div",{staticClass:"py-10"})],2)},n=[];r("7db0");function a(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function s(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],i=!0,n=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(i=(s=o.next()).done);i=!0)if(r.push(s.value),e&&r.length===e)break}catch(c){n=!0,a=c}finally{try{i||null==o["return"]||o["return"]()}finally{if(n)throw a}}return r}}r("a630"),r("fb6a"),r("b0c0"),r("25f0");function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function c(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){return a(t)||s(t,e)||c(t,e)||l()}var p=r("3511"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("h2",{staticClass:"pt-12"},[r("a",{attrs:{target:"_blank",href:"https://www.instagram.com/"+t.owner+"/"}},[t._v("@"+t._s(t.owner))])]),t._l(t.numero,(function(e){return r("picture-component",{key:e,staticClass:"mt-8",attrs:{src:t.baseurl+"/image/"+t.title+"/"+t.owner+"/"+e+".jpg"}})}))],2)},d=[],h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-responsive",{attrs:{"aspect-ratio":4/3}},[r("v-lazy",{staticClass:"fill-height pointer-cursor d-flex justify-center",class:{black:t.isActive},attrs:{options:{threshold:.5},transition:"fade-transition"},on:{click:t.viewImage},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[r("figure",{staticClass:"align-self-center"},[r("img",{staticClass:"d-block fill-width",attrs:{src:t.src}})])])],1)},b=[],m={data:function(){return{isActive:!1}},props:{src:{type:String,required:!0}},methods:{viewImage:function(){window.open(this.src,"_blank")}}},v=m,g=r("2877"),y=Object(g["a"])(v,h,b,!1,null,null,null),w=y.exports,_={components:{PictureComponent:w},props:{baseurl:{type:String,required:!0},title:{type:String,required:!0},pic:{type:Array,required:!0}},computed:{owner:function(){return this.pic[0]},numero:function(){return this.pic[1]}}},k=_,A=Object(g["a"])(k,f,d,!1,null,null,null),C=A.exports,x={name:"Exhibition",components:{PosterComponent:p["a"],PicturesComponent:C},props:["env"],computed:{title:function(){return this.$route.params.title},pic:function(){var t=this;return(this.env.pic||[]).find((function(e){var r=u(e,1),i=r[0];return i[0]===t.title}))},baseurl:function(){return this.env.baseurl}},watch:{pic:function(t){void 0===t&&this.$router.push("/404")}}},j=x,S=Object(g["a"])(j,i,n,!1,null,null,null);e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-39de21e2.3a0f9c77.js.map