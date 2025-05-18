<script setup lang="ts">
import { ref } from 'vue';
import type { Contact } from '../models/contact';

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const props = defineProps<{
  contact: Contact;
}>();

const activeTab = ref('0');
</script>

<template>
  <div class="p-8 flex flex-col gap-4 h-full">
    <!-- Contact Header -->
    <div class="flex gap-4 items-center">
      <div class="avatar rounded-full w-22 h-22 overflow-hidden relative">
        <img
          :src="props.contact.avatar"
          :alt="props.contact.name"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="flex flex-col gap-1">
        <h2 class="text-xl font-semibold">{{ props.contact.name }}</h2>
        <p>{{ props.contact.description }}</p>
      </div>
    </div>

    <!-- Contact Tab Strip -->
    <div class="card flex-grow flex flex-col">
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">Details</Tab>
          <Tab value="1">Media</Tab>
          <Tab value="2">Timeline</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex gap-2 justify-around">
              <!-- Place holders -->
              <div class="flex flex-col gap-2 basis-1/2">
                <p>First Name:</p>
                <p>Last Name:</p>
                <p>Other Names:</p>
                <p>Relation:</p>
                <p>Phone:</p>
                <p>Email:</p>
                <p>Website</p>
                <p>Notes:</p>
                <button class="text-button">Add Field +</button>
              </div>
              <div class="basis-1/2 flex flex-col gap-2">
                <p>Address:</p>
                <p>City:</p>
                <p>Country:</p>
                <p>Postal/Zip Code:</p>
                <button class="text-button">Add Field +</button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <p>Feature coming soon...</p>
          </TabPanel>
          <TabPanel value="2">
            <p>Feature coming soon...</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>
