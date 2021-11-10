# bootstrap-toast-vue

![Image from Gyazo](https://i.gyazo.com/fbc5d9e2e59c755116df52d5dc6d212d.gif)]

## Install

```
yarn add https://github.com/SonicGarden/bootstrap-toast-vue.git#v0.5.2
```

## Required

- vue
- bootstrap
- bootstrap-vue

## Usage

```javascript
import { showSuccess, showError, showErrors, open } from 'bootstrap-toast-vue'

showSuccess('Success!')
showError('Error!')
showErrors(['Error1!', 'Error2!'])

open({
  variant: 'primary',
  autoHideDelay: 10_000,
  component: MyComponent,
  props: myComponentProps,
})

const hide = showSuccess('Success!')
hide()
```

_More about the API_

https://github.com/SonicGarden/bootstrap-toast-vue/blob/master/dist/programmatic.d.ts

### Compiles and hot-reloads for development

```
yarn serve
```
