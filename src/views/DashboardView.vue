<template>
  <div class="dashboard">
    <MainBanner />
    <main class="flex h-full">
      <SidePanel />
      <h2 class="p-8">Main contact information</h2>
    </main>
  </div>
</template>

<script setup lang="ts">
import MainBanner from '../components/MainBanner.vue'
import SidePanel from '../components/SidePanel.vue'
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-content {
  display: flex;
  height: 100%;
}
</style>
