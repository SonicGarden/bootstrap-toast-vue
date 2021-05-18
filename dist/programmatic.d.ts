declare type Props = {
    content?: string;
    variant?: string;
    autoHideDelay?: number;
    noAutoHide?: boolean;
    solid?: boolean;
    component?: any;
    props?: any;
};
declare type HideFunction = () => void;
declare const open: (propsData: Props) => HideFunction;
declare const showSuccess: (content: string, propsData?: Props) => HideFunction;
declare const showError: (content: string, propsData?: Props) => HideFunction;
declare const showErrors: (messages: string[], propsData?: Props) => HideFunction;
export { open, showSuccess, showError, showErrors };
