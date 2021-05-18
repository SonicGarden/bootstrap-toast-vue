<template>
  <div id="demo">
    <BootstrapToast content="Welcome to Your Vue.js" />
    <div>
      <button type="button" class="btn btn-primary" @click="showSuccess">
        success
      </button>
      <button type="button" class="btn btn-danger ml-1" @click="showError">
        error
      </button>
      <button type="button" class="btn btn-danger ml-1" @click="showErrors">
        errors
      </button>
      <button type="button" class="btn btn-info ml-1" @click="showSolid">
        solid & noAutoHide
      </button>
      <button type="button" class="btn btn-success ml-1" @click="showCustom">
        custom
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import BootstrapToast, {
  showSuccess,
  showError,
  showErrors,
  open,
} from './index'
import DemoToast from './DemoToast.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components: { BootstrapToast },
  methods: {
    showSuccess() {
      showSuccess('success!')
    },
    showError() {
      showError('error!')
    },
    showErrors() {
      showErrors(['error1!', 'error2!'])
    },
    showSolid() {
      showSuccess('solid!', { solid: true, noAutoHide: true })
    },
    showCustom() {
      open({ component: DemoToast })
    },
  },
}
</script>

<style>
#demo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
