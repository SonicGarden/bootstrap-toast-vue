import BootstrapToast from "./BootstrapToast.vue";
import BootstrapToastMessages from "./BootstrapToastMessages.vue";

type Props = {
  content?: string
  variant?: string
  autoHideDelay?: number
  noAutoHide?: boolean
  solid?: boolean
  component?: any
  props?: any
}

const open = (propsData: Props) => {
  new BootstrapToast({
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
