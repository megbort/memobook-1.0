<script setup lang="ts">
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
</script>

<template>
  <div class="side-panel p-4 flex flex-col gap-2">
    <h2>Contacts</h2>
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="value1" placeholder="Search" />
    </IconField>
  </div>
</template>

<style scoped lang="scss">
.side-panel {
  background-color: var(--color-primary);
  color: var(--color-neutral-soft);
}
</style>
