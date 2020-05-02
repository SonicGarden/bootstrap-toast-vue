<template>
  <BToast
    no-close-button
    :variant="variant"
    :solid="solid"
    :no-auto-hide="noAutoHide"
    :auto-hide-delay="autoHideDelay"
    :visible="isVisible"
    @click="hide"
  >
    <slot name="closeButton">
      <BButton
        class="close-button text-black-50"
        size="sm"
        variant="link"
        @click="hide"
      >
        <i class="fas fa-times" />
      </BButton>
    </slot>
    <Component :is="component" v-if="component" v-bind="props" />
    <template v-else>{{ content }}</template>
  </BToast>
</template>

<script lang="ts">
import Vue from 'vue'
import { BButton, BToast } from 'bootstrap-vue'

export default Vue.extend({
  components: { BToast, BButton },
  props: {
    content: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: null,
    },
    autoHideDelay: {
      type: Number,
      default: 5000,
    },
    noAutoHide: {
      type: Boolean,
      default: false,
    },
    solid: {
      type: Boolean,
      default: false,
    },
    component: {
      type: [Object, Function],
      default: null,
    },
    props: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isVisible: true,
    }
  },
  methods: {
    hide() {
      this.isVisible = false
    },
  },
})
</script>

<style lang="css" scoped>
.close-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
