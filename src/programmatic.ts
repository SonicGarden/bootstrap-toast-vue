import BootstrapToast from './BootstrapToast.vue'
import BootstrapToastMessages from './BootstrapToastMessages.vue'

type Props = {
  content?: string
  variant?: string
  autoHideDelay?: number
  noAutoHide?: boolean
  solid?: boolean
  component?: any
  props?: any
}

type HideFunction = () => void

const open = (propsData: Props): HideFunction => {
  const component = new BootstrapToast({
    el: document.createElement('div'),
    propsData,
  })

  return () => (component as any).hide()
}

const showSuccess = (content: string, propsData: Props = {}): HideFunction => {
  return open({
    content,
    variant: 'success',
    autoHideDelay: 5000,
    ...propsData,
  })
}

const showError = (content: string, propsData: Props = {}): HideFunction => {
  return open({
    content,
    variant: 'danger',
    autoHideDelay: 20000,
    ...propsData,
  })
}

const showErrors = (
  messages: string[],
  propsData: Props = {}
): HideFunction => {
  return open({
    component: BootstrapToastMessages,
    props: { messages },
    variant: 'danger',
    autoHideDelay: 20000,
    ...propsData,
  })
}

export { open, showSuccess, showError, showErrors }
