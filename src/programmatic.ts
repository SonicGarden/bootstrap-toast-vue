import Vue from "vue";
import BootstrapToast from "./BootstrapToast.vue";
import BootstrapToastMessages from "./BootstrapToastMessages.vue";

type Props = Record<string, any>

const open = (propsData: Props) => {
  const ToastComponent = Vue.extend(BootstrapToast);
  return new ToastComponent({
    el: document.createElement("div"),
    propsData
  });
};

const showSuccess = (content: string, propsData: Props = {}) => {
  open({
    content,
    variant: "success",
    autoHideDelay: 5000,
    ...propsData
  });
};

const showError = (content: string, propsData: Props = {}) => {
  open({
    content,
    variant: "danger",
    autoHideDelay: 20000,
    ...propsData
  });
};

const showErrors = (messages: string[], propsData: Props = {}) => {
  open({
    component: BootstrapToastMessages,
    props: { messages },
    variant: "danger",
    autoHideDelay: 20000,
    ...propsData
  });
};

export { open, showSuccess, showError, showErrors };
