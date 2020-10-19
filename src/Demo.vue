<template>
  <div id="demo">
    <BootstrapToast content="Welcome to Your Vue.js" />
    <div>
      <button type="button" class="btn btn-primary" @click="showSuccess">success</button>
      <button type="button" class="btn btn-danger ml-1" @click="showError">error</button>
      <button type="button" class="btn btn-danger ml-1" @click="showErrors">errors</button>
      <button type="button" class="btn btn-info ml-1" @click="showSolid">solid & noAutoHide</button>
    </div>
  </div>
</template>

<script lang="ts">
import BootstrapToast, { showSuccess, showError, showErrors } from "./index";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";

export default {
  components: {
    BootstrapToast
  },
  methods: {
    showSuccess() {
      showSuccess("success!");
    },
    showError() {
      showError("error!");
    },
    showErrors() {
      showErrors(["error1!", "error2!"]);
    },
    showSolid() {
      showSuccess("solid!", { solid: true, noAutoHide: true });
    }
  }
};
</script>

<style>
#demo {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
