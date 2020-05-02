import Vue from "vue";
declare const open: (propsData: Record<string, any>) => import("vue/types/vue").CombinedVueInstance<Record<never, any> & Vue, object, object, object, Record<never, any>>;
declare const showSuccess: (content: string, propsData?: Record<string, any>) => void;
declare const showError: (content: string, propsData?: Record<string, any>) => void;
declare const showErrors: (messages: string[], propsData?: Record<string, any>) => void;
export { open, showSuccess, showError, showErrors };
