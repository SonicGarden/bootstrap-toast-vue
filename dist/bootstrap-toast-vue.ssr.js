'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var Vue=_interopDefault(require('vue')),bootstrapVue=require('bootstrap-vue');var script = Vue.extend({
  name: 'BootstrapToast',
  components: {
    BToast: bootstrapVue.BToast,
    BButton: bootstrapVue.BButton
  },
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
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('BToast', {
    attrs: {
      "no-close-button": "",
      "variant": _vm.variant,
      "solid": _vm.solid,
      "no-auto-hide": _vm.noAutoHide,
      "auto-hide-delay": _vm.autoHideDelay,
      "visible": _vm.isVisible
    },
    on: {
      "click": _vm.hide
    }
  }, [_vm._t("closeButton", [_c('BButton', {
    staticClass: "close-button text-black-50",
    attrs: {
      "size": "sm",
      "variant": "link"
    },
    on: {
      "click": _vm.hide
    }
  }, [_c('i', {
    staticClass: "fas fa-times"
  })])]), _vm._v(" "), _vm.component ? _c(_vm.component, _vm._b({
    tag: "Component"
  }, 'Component', _vm.props, false)) : [_vm._v(_vm._s(_vm.content))]], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-493d5cf5_0", {
    source: ".close-button[data-v-493d5cf5]{position:absolute;top:0;right:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-493d5cf5";
/* module identifier */

var __vue_module_identifier__ = "data-v-493d5cf5";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}var script$1 = Vue.extend({
  name: 'BootstrapToastMessages',
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
});/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', {
    staticClass: "bootstrap-toast-vue-messages"
  }, [_vm._ssrNode(_vm._ssrList(_vm.messages, function (message, k) {
    return "<li>" + _vm._ssrEscape(_vm._s(message)) + "</li>";
  }))]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-332efb47_0", {
    source: ".bootstrap-toast-vue-messages[data-v-332efb47]{list-style:disc;padding-left:20px;margin-bottom:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-332efb47";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-332efb47";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);var open = function open(propsData) {
  new __vue_component__({
    el: document.createElement("div"),
    propsData: propsData
  });
};

var showSuccess = function showSuccess(content) {
  var propsData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  open(_objectSpread2({
    content: content,
    variant: "success",
    autoHideDelay: 5000
  }, propsData));
};

var showError = function showError(content) {
  var propsData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  open(_objectSpread2({
    content: content,
    variant: "danger",
    autoHideDelay: 20000
  }, propsData));
};

var showErrors = function showErrors(messages) {
  var propsData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  open(_objectSpread2({
    component: __vue_component__$1,
    props: {
      messages: messages
    },
    variant: "danger",
    autoHideDelay: 20000
  }, propsData));
};// Import vue component
exports.default=__vue_component__;exports.open=open;exports.showError=showError;exports.showErrors=showErrors;exports.showSuccess=showSuccess;