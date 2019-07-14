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

const showSuccess = content => {
  open({
    content,
    variant: "success",
    autoHideDelay: 5000
  });
};

const showError = content => {
  open({
    content,
    variant: "danger",
    autoHideDelay: 20000
  });
};

const showErrors = messages => {
  open({
    component: BootstrapToastMessages,
    props: { messages },
    variant: "danger",
    autoHideDelay: 20000
  });
};

export { open, showSuccess, showError, showErrors };
