import{BToast as e,BButton as t}from"bootstrap-vue";import n from"vue";var o={components:{BToast:e,BButton:t},props:{content:{type:String,default:null},variant:{type:String,default:null},autoHideDelay:{type:Number,default:5e3},noAutoHide:{type:Boolean,default:!1},solid:{type:Boolean,default:!1},component:{type:[Object,Function],default:null},props:{type:Object,default:null}},data:function(){return{isVisible:!0}},methods:{hide:function(){this.isVisible=!1}}};var a,i=function(e,t,n,o,a,i,s,r,d,l){"boolean"!=typeof s&&(d=r,r=s,s=!1);var c,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,a&&(u.functional=!0)),o&&(u._scopeId=o),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):t&&(c=s?function(){t.call(this,l(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),c)if(u.functional){var p=u.render;u.render=function(e,t){return c.call(t),p(e,t)}}else{var m=u.beforeCreate;u.beforeCreate=m?[].concat(m,c):[c]}return n},s="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var r={};var d=function(e){return function(e,t){return function(e,t){var n=s?t.media||"default":e,o=r[n]||(r[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var i=t.source;if(t.map&&(i+="\n/*# sourceURL="+t.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===a&&(a=document.head||document.getElementsByTagName("head")[0]),a.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(i),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var d=o.ids.size-1,l=document.createTextNode(i),c=o.element.childNodes;c[d]&&o.element.removeChild(c[d]),c.length?o.element.insertBefore(l,c[d]):o.element.appendChild(l)}}}(e,t)}},l=i({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BToast",{attrs:{"no-close-button":"",variant:e.variant,solid:e.solid,"no-auto-hide":e.noAutoHide,"auto-hide-delay":e.autoHideDelay,visible:e.isVisible},on:{click:e.hide}},[e._t("closeButton",[n("BButton",{staticClass:"close-button text-black-50",attrs:{size:"sm",variant:"link"},on:{click:e.hide}},[n("i",{staticClass:"fas fa-times"})])]),e._v(" "),e.component?n(e.component,e._b({tag:"Component"},"Component",e.props,!1)):[e._v(e._s(e.content))]],2)},staticRenderFns:[]},function(e){e&&e("data-v-4235bb6a_0",{source:".close-button[data-v-4235bb6a]{position:absolute;top:0;right:0}",map:void 0,media:void 0})},o,"data-v-4235bb6a",!1,void 0,d,void 0),c=i({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"messages"},e._l(e.messages,function(t,o){return n("li",{key:o,domProps:{textContent:e._s(t)}})}),0)},staticRenderFns:[]},function(e){e&&e("data-v-f9d68b3e_0",{source:".messages[data-v-f9d68b3e]{list-style:disc;padding-left:20px;margin-bottom:0}",map:void 0,media:void 0})},{props:{messages:{type:Array,required:!0}}},"data-v-f9d68b3e",!1,void 0,d,void 0),u=function(e){return new(n.extend(l))({el:document.createElement("div"),propsData:e})},p=function(e,t){void 0===t&&(t={}),u(Object.assign({},{content:e,variant:"success",autoHideDelay:5e3},t))},m=function(e,t){void 0===t&&(t={}),u(Object.assign({},{content:e,variant:"danger",autoHideDelay:2e4},t))},f=function(e,t){void 0===t&&(t={}),u(Object.assign({},{component:c,props:{messages:e},variant:"danger",autoHideDelay:2e4},t))};export default l;export{u as open,m as showError,f as showErrors,p as showSuccess};
