'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var bootstrapVue=require('bootstrap-vue'),Vue=_interopDefault(require('vue'));//

var script = {
  components: { BToast: bootstrapVue.BToast, BButton: bootstrapVue.BButton },
  props: {
    content: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    autoHideDelay: {
      type: Number,
      default: 5000
    },
    noAutoHide: {
      type: Boolean,
      default: false
    },
    solid: {
      type: Boolean,
      default: false
    },
    component: {
      type: [Object, Function],
      default: null
    },
    props: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      isVisible: true
    };
  },
  methods: {
    hide: function hide() {
      this.isVisible = false;
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;function createInjectorSSR(context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__;
  }

  if (!context) { return function () {}; }

  if (!('styles' in context)) {
    context._styles = context._styles || {};
    Object.defineProperty(context, 'styles', {
      enumerable: true,
      get: function get() {
        return context._renderStyles(context._styles);
      }
    });
    context._renderStyles = context._renderStyles || renderStyles;
  }

  return function (id, style) {
    return addStyle(id, style, context);
  };
}

function addStyle(id, css, context) {
  var group =  css.media || 'default' ;
  var style = context._styles[group] || (context._styles[group] = {
    ids: [],
    css: ''
  });

  if (!style.ids.includes(id)) {
    style.media = css.media;
    style.ids.push(id);
    var code = css.source;

    style.css += code + '\n';
  }
}

function renderStyles(styles) {
  var css = '';

  for (var key in styles) {
    var style = styles[key];
    css += '<style data-vue-ssr-id="' + Array.from(style.ids).join(' ') + '"' + (style.media ? ' media="' + style.media + '"' : '') + '>' + style.css + '</style>';
  }

  return css;
}

var server = createInjectorSSR;/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BToast',{attrs:{"no-close-button":"","variant":_vm.variant,"solid":_vm.solid,"no-auto-hide":_vm.noAutoHide,"auto-hide-delay":_vm.autoHideDelay,"visible":_vm.isVisible},on:{"click":_vm.hide}},[_vm._t("closeButton",[_c('BButton',{staticClass:"close-button text-black-50",attrs:{"size":"sm","variant":"link"},on:{"click":_vm.hide}},[_c('i',{staticClass:"fas fa-times"})])]),_vm._v(" "),(_vm.component)?_c(_vm.component,_vm._b({tag:"Component"},'Component',_vm.props,false)):[_vm._v(_vm._s(_vm.content))]],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-4235bb6a_0", { source: ".close-button[data-v-4235bb6a]{position:absolute;top:0;right:0}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-4235bb6a";
  /* module identifier */
  var __vue_module_identifier__ = "data-v-4235bb6a";
  /* functional template */
  var __vue_is_functional_template__ = false;

  
  var component = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    server
  );//
//
//
//
//
//

var script$1 = {
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"messages"},[_vm._ssrNode((_vm._ssrList((_vm.messages),function(message,k){return ("<li>"+_vm._ssrEscape(_vm._s(message))+"</li>")})))])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-f9d68b3e_0", { source: ".messages[data-v-f9d68b3e]{list-style:disc;padding-left:20px;margin-bottom:0}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = "data-v-f9d68b3e";
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-f9d68b3e";
  /* functional template */
  var __vue_is_functional_template__$1 = false;

  
  var BootstrapToastMessages = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    server
  );var open = function (propsData) {
  var ToastComponent = Vue.extend(component);
  return new ToastComponent({
    el: document.createElement("div"),
    propsData: propsData
  });
};

var showSuccess = function (content, propsData) {
  if ( propsData === void 0 ) propsData = {};

  open(Object.assign({}, {content: content,
    variant: "success",
    autoHideDelay: 5000},
    propsData));
};

var showError = function (content, propsData) {
  if ( propsData === void 0 ) propsData = {};

  open(Object.assign({}, {content: content,
    variant: "danger",
    autoHideDelay: 20000},
    propsData));
};

var showErrors = function (messages, propsData) {
  if ( propsData === void 0 ) propsData = {};

  open(Object.assign({}, {component: BootstrapToastMessages,
    props: { messages: messages },
    variant: "danger",
    autoHideDelay: 20000},
    propsData));
};// Import vue component
exports.default=component;exports.open=open;exports.showError=showError;exports.showErrors=showErrors;exports.showSuccess=showSuccess;