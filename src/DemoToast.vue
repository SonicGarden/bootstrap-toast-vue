<template>
  <div>
    <div class="d-flex align-items-center">
      <BAvatar></BAvatar>
      <strong class="ml-2 flex-grow-1">Tester</strong>
      <small class="text-muted" ml-auto mr-3>10 minutes ago</small>
    </div>
    <div class="mt-3">hogehogehoge</div>
  </div>
</template>

<script lang="ts">
import { BAvatar } from 'bootstrap-vue'

export default {
  components: { BAvatar },
}
</script>
