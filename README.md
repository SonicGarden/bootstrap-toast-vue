# bootstrap-toast-vue

[![Image from Gyazo](https://i.gyazo.com/cb9c171434d5c2280448f6fb6fe46e54.gif)](https://gyazo.com/cb9c171434d5c2280448f6fb6fe46e54)

## Install

```
yarn add https://github.com/SonicGarden/bootstrap-toast-vue.git#v0.4.0
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
