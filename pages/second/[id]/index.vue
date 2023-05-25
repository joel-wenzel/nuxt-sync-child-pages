<script setup lang="ts">
  import { STATE_INJECT_KEY, usePageState } from './composables/usePageState'

  const state = usePageState()
  console.log('providing')
  provide(STATE_INJECT_KEY, state)

  await new Promise<void>((resolve) => setTimeout(() => resolve(), 100))
</script>
<template>
  <div>
    Second Page Details
    <hr />
    <NuxtPage></NuxtPage>
  </div>
</template>
