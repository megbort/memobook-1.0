<template>
  <div class="main-page-content">
    <MainBanner />
    <main>
      <p>Main contact information</p>
    </main>
  </div>
</template>

<script setup lang="ts">
import MainBanner from '../components/MainBanner.vue'
</script>

<style scoped lang="scss">
.main-page-content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>
