<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { contactApi } from '../services/contacts';
import type { Contact } from '../models/contact';

import DemoBanner from '../components/DemoBanner.vue';
import MainBanner from '../components/AppHeader.vue';
import SidePanel from '../components/SidePanel.vue';
import ContactView from '../components/ContactView.vue';
import ProgressSpinner from 'primevue/progressspinner';

const contacts = ref<Contact[]>([]);
const selectedContact = ref<Contact | null>(null);
const isLoading = ref<boolean>(true);
const error = ref<string | null>(null);

const fetchContacts = async () => {
  try {
    isLoading.value = true;
    error.value = null;
    const data = await contactApi.getAllContacts();
    contacts.value = data;
    if (data.length > 0) {
      selectedContact.value = data[0];
    }
  } catch (err) {
    error.value =
      'Failed to load contacts. Please check your connection and try again.';
    console.error('Error loading contacts:', err);
  } finally {
    isLoading.value = false;
  }
};

const updateSelectedContact = (contact: Contact) => {
  selectedContact.value = contact;
};

onMounted(() => {
  fetchContacts();
});
</script>

<template>
  <div class="dashboard">
    <DemoBanner />
    <MainBanner />
    <main class="flex h-full">
      <SidePanel
        v-if="!isLoading && !error"
        :contacts="contacts"
        @update:selectedContact="updateSelectedContact"
      />
      <div v-if="selectedContact && !isLoading && !error" class="flex-grow flex flex-col h-full">
        <ContactView :contact="selectedContact" />
      </div>
      <div v-if="isLoading" class="flex items-center justify-center grow">
        <div class="flex flex-col items-center gap-4">
          <ProgressSpinner />
          <p class="text-memobook-dark-grey">Loading contacts...</p>
        </div>
      </div>
      <div v-if="error" class="flex items-center justify-center grow">
        <div class="flex flex-col items-center gap-4 p-8 text-center">
          <i class="pi pi-exclamation-triangle text-4xl text-memobook-dark-grey"></i>
          <p class="text-memobook-black dark:text-memobook-white">{{ error }}</p>
          <button
            @click="fetchContacts"
            class="bg-memobook-green hover:bg-memobook-dark-green text-memobook-white px-4 py-2 rounded-lg font-medium"
          >
            Retry
          </button>
        </div>
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
