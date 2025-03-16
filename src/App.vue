<template>
  <div id="dashboard">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-neutral-soft);
}
</style>
