<script lang="ts" setup>
import Property from '@/models/Property';

const route = useRoute();

const endpoint = `/api/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/${route.params.id}/`;

const {data: property, pending} = await useFetch<Property>(endpoint, {
    initialCache: false,
    server: false,
});
</script>

<template>
    <div v-if="property">
        <PropertyMediaGrid :property="property" />

        <h1 class="text-3xl font-semibold">
            {{ property.Adres }}
        </h1>
    </div>
</template>
