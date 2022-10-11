<script lang="ts" setup>
import {PropType} from 'vue';
import Property from '@/models/Property';

defineProps({
    property: {
        type: Object as PropType<Property>,
        required: true,
    },
});
</script>

<template>
    <NuxtLink
        class="group"
        :to="`/properties/${property.Id}`"
    >
        <div class="overflow-hidden rounded-lg">
            <img
                :alt="property.Adres"
                class="transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                :src="property.FotoLarge"
            >
        </div>

        <h2 class="mt-2 font-semibold">
            {{ property.Adres }}
        </h2>

        <h4 class="text-sm">
            {{ property.Postcode }} {{ property.Woonplaats }}
        </h4>

        <div class="text-sm">
            {{ property.Woonoppervlakte }} m²
            / {{ property.Perceeloppervlakte }} m²
            • {{ property.AantalKamers }} rooms
        </div>

        <!-- eslint-disable vue/no-v-html -->
        <div
            class="mt-2 text-sm font-semibold"
            v-html="property.PrijsGeformatteerdHtml"
        />
        <!-- eslint-enable vue/no-v-html -->
    </NuxtLink>
</template>
