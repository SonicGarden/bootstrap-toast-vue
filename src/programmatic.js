import Vue from "vue";
import BootstrapToast from "./BootstrapToast.vue";
import BootstrapToastMessages from "./BootstrapToastMessages.vue";

const open = propsData => {
  const ToastComponent = Vue.extend(BootstrapToast);
  return new ToastComponent({
    el: document.createElement("div"),
    propsData
  });
};

const showSuccess = (content, propsData = {}) => {
  open({
    content,
    variant: "success",
    autoHideDelay: 5000,
    ...propsData
  });
};

const showError = (content, propsData = {}) => {
  open({
    content,
    variant: "danger",
    autoHideDelay: 20000,
    ...propsData
  });
};

const showErrors = (messages, propsData = {}) => {
  open({
    component: BootstrapToastMessages,
    props: { messages },
    variant: "danger",
    autoHideDelay: 20000,
    ...propsData
  });
};

export { open, showSuccess, showError, showErrors };
