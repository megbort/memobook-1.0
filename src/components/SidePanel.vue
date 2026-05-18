<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import type { Contact } from '../models/contact';

import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';
import Button from 'primevue/button';

const props = defineProps<{
  contacts: Contact[];
}>();

const emit = defineEmits<{
  'update:selectedContact': [Contact];
}>();

const searchValue = ref('');
const selectedContact = ref<Contact | null>(props.contacts[0] ?? null);

const filteredContacts = computed(() => {
  if (!searchValue.value) {
    return props.contacts;
  }
  return props.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.value.toLowerCase()),
  );
});

watch(selectedContact, (newContact) => {
  if (newContact) {
    emit('update:selectedContact', newContact);
  }
});

watch(
  () => props.contacts,
  (newContacts) => {
    if (newContacts.length > 0 && !selectedContact.value) {
      selectedContact.value = newContacts[0];
    }
  },
);
</script>

<template>
  <div class="bg-memobook-green text-memobook-white p-4 flex flex-col gap-2">
    <div class="flex justify-between">
      <h2>Contacts</h2>
      <Button icon="pi pi-plus" aria-label="Save" />
    </div>

    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="searchValue" placeholder="Search" />
    </IconField>
    <Listbox v-model="selectedContact" :options="filteredContacts" optionLabel="name" />
  </div>
</template>
