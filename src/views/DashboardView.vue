<script setup lang="ts">
import MainBanner from '../components/MainBanner.vue'
import SidePanel from '../components/SidePanel.vue'
import ContactHeader from '../components/ContactHeader.vue'
</script>

<template>
  <div class="dashboard">
    <MainBanner />
    <main class="flex h-full">
      <SidePanel />
      <div>
        <ContactHeader />
      </div>
    </main>
  </div>
</template>

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
