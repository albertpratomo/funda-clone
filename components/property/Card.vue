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
    <div>
        <img
            :alt="property.Adres"
            class="rounded-lg"
            loading="lazy"
            :src="property.FotoLarge"
        >

        <h2 class="mt-2 font-semibold">
            {{ property.Adres }}
        </h2>

        <h4 class="mt-1 text-sm">
            {{ property.Postcode }} {{ property.Woonplaats }}
        </h4>

        <div class="text-sm">
            {{ property.Woonoppervlakte }} m²
            / {{ property.Perceeloppervlakte }} m²
            • {{ property.AantalKamers }} rooms
        </div>

        <div
            class="mt-2 text-sm font-semibold"
            v-html="property.PrijsGeformatteerdHtml"
        />
    </div>
</template>
