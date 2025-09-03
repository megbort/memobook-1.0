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
        <h2 class="text-xl font-semibold text-memobook-black dark:text-memobook-white">
          {{ props.contact.name }}
        </h2>
        <p class="text-memobook-dark-grey">{{ props.contact.description }}</p>
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
            <div class="flex gap-6 justify-around">
              <!-- Personal Information -->
              <div class="flex flex-col gap-3 basis-1/2">
                <h3 class="text-lg font-semibold text-memobook-dark-green mb-2">
                  Personal Information
                </h3>

                <div class="flex gap-2 items-baseline flex-wrap">
                  <span
                    class="text-sm font-medium text-memobook-dark-grey min-w-[100px] flex-shrink-0"
                    >First Name:</span
                  >
                  <p class="contact-value text-memobook-black dark:text-memobook-white m-0">
                    {{ props.contact.firstName ?? '' }}
                  </p>
                </div>

                <div class="flex gap-2 items-baseline flex-wrap">
                  <span
                    class="text-sm font-medium text-memobook-dark-grey min-w-[100px] flex-shrink-0"
                    >Last Name:</span
                  >
                  <p class="contact-value text-memobook-black dark:text-memobook-white m-0">
                    {{ props.contact.lastName ?? '' }}
                  </p>
                </div>

                <div class="flex gap-2 items-baseline flex-wrap" v-if="props.contact.otherNames">
                  <span
                    class="text-sm font-medium text-memobook-dark-grey min-w-[100px] flex-shrink-0"
                    >Other Names:</span
                  >
                  <p class="contact-value text-memobook-black dark:text-memobook-white m-0">
                    {{ props.contact.otherNames }}
                  </p>
                </div>

                <div class="flex gap-2 items-baseline flex-wrap">
                  <span
                    class="text-sm font-medium text-memobook-dark-grey min-w-[100px] flex-shrink-0"
                    >Relation:</span
                  >
                  <p class="contact-value text-memobook-black dark:text-memobook-white m-0">
                    {{ props.contact.relation ?? '' }}
                  </p>
                </div>

                <div class="flex gap-2 items-baseline flex-wrap">
                  <span
                    class="text-sm font-medium text-memobook-dark-grey min-w-[100px] flex-shrink-0"
                    >Phone:</span
                  >
                  <p class="contact-value text-memobook-black dark:text-memobook-white m-0">
                    {{ props.contact.phone ?? '' }}
                  </p>
                </div>

                <div class="flex gap-2 items-baseline flex-wrap">
                  <span
                    class="text-sm font-medium text-memobook-dark-grey min-w-[100px] flex-shrink-0"
                    >Email:</span
                  >
                  <p class="contact-value text-memobook-black dark:text-memobook-white m-0">
                    {{ props.contact.email ?? '' }}
                  </p>
                </div>

                <div class="flex gap-2 items-baseline flex-wrap" v-if="props.contact.website">
                  <span
                    class="text-sm font-medium text-memobook-dark-grey min-w-[100px] flex-shrink-0"
                    >Website:</span
                  >
                  <a
                    :href="props.contact.website"
                    class="text-memobook-blue hover:text-memobook-dark-blue underline"
                    target="_blank"
                    >{{ props.contact.website }}</a
                  >
                </div>

                <div class="flex flex-col gap-2" v-if="props.contact.notes">
                  <span class="text-sm font-medium text-memobook-dark-grey block mb-2">Notes:</span>
                  <div
                    class="bg-memobook-light-grey dark:bg-memobook-dark-grey p-3 rounded-lg border border-memobook-dark-grey border-opacity-20"
                  >
                    <p class="text-memobook-black dark:text-memobook-white m-0">
                      {{ props.contact.notes }}
                    </p>
                  </div>
                </div>

                <button
                  class="text-button text-memobook-green hover:text-memobook-dark-green font-medium mt-2"
                >
                  + Add Field
                </button>
              </div>

              <!-- Address Information -->
              <div class="basis-1/2 flex flex-col gap-3">
                <h3 class="text-lg font-semibold text-memobook-dark-green mb-2">
                  Address Information
                </h3>

                <div class="flex gap-2 items-baseline flex-wrap">
                  <span
                    class="text-sm font-medium text-memobook-dark-grey min-w-[100px] flex-shrink-0"
                    >Address:</span
                  >
                  <p class="contact-value text-memobook-black dark:text-memobook-white m-0">
                    {{ props.contact.address ?? '' }}
                  </p>
                </div>

                <div class="flex gap-2 items-baseline flex-wrap">
                  <span
                    class="text-sm font-medium text-memobook-dark-grey min-w-[100px] flex-shrink-0"
                    >City:</span
                  >
                  <p class="contact-value text-memobook-black dark:text-memobook-white m-0">
                    {{ props.contact.city ?? '' }}
                  </p>
                </div>

                <div class="flex gap-2 items-baseline flex-wrap">
                  <span
                    class="text-sm font-medium text-memobook-dark-grey min-w-[100px] flex-shrink-0"
                    >Country:</span
                  >
                  <p class="contact-value text-memobook-black dark:text-memobook-white m-0">
                    {{ props.contact.country ?? '' }}
                  </p>
                </div>

                <div class="flex gap-2 items-baseline flex-wrap">
                  <span
                    class="text-sm font-medium text-memobook-dark-grey min-w-[100px] flex-shrink-0"
                    >Postal/Zip Code:</span
                  >
                  <p class="contact-value text-memobook-black dark:text-memobook-white m-0">
                    {{ props.contact.postalCode ?? '' }}
                  </p>
                </div>

                <button
                  class="text-button text-memobook-green hover:text-memobook-dark-green font-medium mt-2"
                >
                  + Add Field
                </button>
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
