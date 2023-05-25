<script setup lang="ts">
  import { STATE_INJECT_KEY } from '../../composables/usePageState'

  console.log('trying to inject')
  const { state } = inject(STATE_INJECT_KEY)

  await new Promise<void>((resolve) => setTimeout(() => resolve(), 100))
</script>
<template>
  <div>Second Page Child</div>
  <span>{{ state }}</span>
</template>
