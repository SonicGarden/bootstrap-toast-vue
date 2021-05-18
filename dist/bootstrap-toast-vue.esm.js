import Vue from 'vue';
import { BToast, BButtonClose } from 'bootstrap-vue';

var script$1 = Vue.extend({
  name: 'BootstrapToast',
  components: {
    BToast,
    BButtonClose
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

  data() {
    return {
      isVisible: true
    };
  },

  methods: {
    hide() {
      this.isVisible = false;
    }

  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
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
  }, [_vm._t("closeButton", [_c('BButtonClose', {
    staticClass: "bootstrap-toast__close-button",
    on: {
      "click": _vm.hide
    }
  })]), _vm._v(" "), _vm.component ? _c(_vm.component, _vm._b({
    tag: "Component"
  }, 'Component', _vm.props, false)) : [_vm._v(_vm._s(_vm.content))]], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-8da2c1fe_0", {
    source: ".bootstrap-toast__close-button[data-v-8da2c1fe]{position:absolute;top:.2rem;right:.5rem;font-size:1.2rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-8da2c1fe";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

var script = Vue.extend({
  name: 'BootstrapToastMessages',
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
});

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', {
    staticClass: "bootstrap-toast-vue-messages"
  }, _vm._l(_vm.messages, function (message, k) {
    return _c('li', {
      key: k,
      domProps: {
        "textContent": _vm._s(message)
      }
    });
  }), 0);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-332efb47_0", {
    source: ".bootstrap-toast-vue-messages[data-v-332efb47]{list-style:disc;padding-left:20px;margin-bottom:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-332efb47";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

const open = propsData => {
  const component = new __vue_component__$1({
    el: document.createElement('div'),
    propsData
  });
  return () => component.hide();
};

const showSuccess = (content, propsData = {}) => {
  return open({
    content,
    variant: 'success',
    autoHideDelay: 5000,
    ...propsData
  });
};

const showError = (content, propsData = {}) => {
  return open({
    content,
    variant: 'danger',
    autoHideDelay: 20000,
    ...propsData
  });
};

const showErrors = (messages, propsData = {}) => {
  return open({
    component: __vue_component__,
    props: {
      messages
    },
    variant: 'danger',
    autoHideDelay: 20000,
    ...propsData
  });
};

// Import vue component

export default __vue_component__$1;
export { open, showError, showErrors, showSuccess };
