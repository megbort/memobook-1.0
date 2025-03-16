<script setup lang="ts">
import { ref, watch } from 'vue';
import { Contacts } from '../mocks/contacts';
import type { Contact } from '../models/contact';

import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';
import Button from 'primevue/button';

const emit = defineEmits<{
  'update:selectedContact': [Contact];
}>();

const searchValue = ref('');
const contacts = ref<Contact[]>(Contacts);
const selectedContact = ref<Contact>(contacts.value[0]);
const filteredContacts = ref<Contact[]>(Contacts);

watch(searchValue, (newValue: string) => {
  filteredContacts.value = contacts.value.filter((contact) =>
    contact.name.toLowerCase().includes(newValue.toLowerCase()),
  );
});

watch(selectedContact, (newContact) => {
  if (newContact) {
    emit('update:selectedContact', newContact);
  }
});
</script>

<template>
  <div class="side-panel p-4 flex flex-col gap-2">
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

<style scoped lang="scss">
.side-panel {
  background-color: var(--color-primary);
  color: var(--color-neutral-soft);
}
</style>
