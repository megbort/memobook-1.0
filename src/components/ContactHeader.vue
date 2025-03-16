<script setup lang="ts">
import type { Contact } from '../models/contact';

const props = defineProps<{
  contact: Contact;
}>();
</script>

<template>
  <div class="flex gap-4 p-8 items-center">
    <div class="avatar rounded-full w-22 h-22 overflow-hidden relative">
      <img
        :src="props.contact.avatar"
        :alt="props.contact.name"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="flex flex-col gap-1">
      <h2>{{ props.contact.name }}</h2>
      <p class="text-gray-400">{{ props.contact.description }}</p>
    </div>
  </div>
</template>
