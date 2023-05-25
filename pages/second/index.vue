<script setup lang="ts">
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 100))
</script>
<template>
  <div>
    Second Page
    <hr />
    <RouterLink to="/second/1"> To Details</RouterLink>
  </div>
</template>
