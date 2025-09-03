<script setup lang="ts">
import { ref } from 'vue';
import { Contacts } from '../mocks/contacts';
import type { Contact } from '../models/contact';

import DemoBanner from '../components/DemoBanner.vue';
import MainBanner from '../components/AppHeader.vue';
import SidePanel from '../components/SidePanel.vue';
import ContactView from '../components/ContactView.vue';
import ProgressSpinner from 'primevue/progressspinner';

const selectedContact = ref<Contact>(Contacts[0]);
const isLoading = ref<boolean>(false);

const updateSelectedContact = (contact: Contact) => {
  isLoading.value = true;
  setTimeout(() => {
    selectedContact.value = contact;
    isLoading.value = false;
  }, 800);
};
</script>

<template>
  <div class="dashboard">
    <DemoBanner />
    <MainBanner />
    <main class="flex h-full">
      <SidePanel @update:selectedContact="updateSelectedContact" />
      <div v-if="selectedContact && !isLoading" class="flex-grow flex flex-col h-full">
        <ContactView :contact="selectedContact" />
      </div>
      <div v-if="isLoading" class="flex items-center grow">
        <ProgressSpinner />
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
</style>
