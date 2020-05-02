<script lang="ts">
import Vue from 'vue'
import Demo from '../src/Demo.vue'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Demo,
  },
})
</script>

<template>
  <div id="app">
    <demo />
  </div>
</template>
