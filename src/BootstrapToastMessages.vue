<template>
  <ul class="messages">
    <li v-for="(message, k) in messages" :key="k" v-text="message" />
  </ul>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="css">
.messages {
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 0;
}
</style>
