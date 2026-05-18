<template>
  <div id="dashboard" class="flex justify-center items-center h-screen">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from './composables/useTheme'
useTheme()
</script>
