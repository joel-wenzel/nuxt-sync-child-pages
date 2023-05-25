<script setup lang="ts">
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 100))
</script>
<template>
  <div>
    First Page
    <hr />
    <NuxtPage></NuxtPage>
  </div>
</template>
