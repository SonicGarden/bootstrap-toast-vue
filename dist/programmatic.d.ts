declare type Props = {
    content?: string;
    variant?: string;
    autoHideDelay?: number;
    noAutoHide?: boolean;
    solid?: boolean;
    component?: any;
    props?: any;
};
declare const open: (propsData: Props) => void;
declare const showSuccess: (content: string, propsData?: Props) => void;
declare const showError: (content: string, propsData?: Props) => void;
declare const showErrors: (messages: string[], propsData?: Props) => void;
export { open, showSuccess, showError, showErrors };
