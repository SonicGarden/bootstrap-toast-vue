<template>
  <ul class="bootstrap-toast-vue-messages">
    <li v-for="(message, k) in messages" :key="k" v-text="message" />
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'BootstrapToastMessages',
  props: {
    messages: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
})
</script>

<style scoped lang="css">
.bootstrap-toast-vue-messages {
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 0;
}
</style>
