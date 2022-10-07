<script lang="ts" setup>
import Property from '@/models/Property';

const searchKeyword = ref('');

const endpoint = computed(() => `/api/feeds/Aanbod.svc/json/ac1b0b1572524640a0ecc54de453ea9f/?type=koop&zo=/${searchKeyword.value}`);

interface Data {
    Objects: Property[];
}

const {data, pending} = await useFetch<Data>(endpoint, {
    server: false,
    watch: [endpoint],
});
</script>

<template>
    <div>
        <CommonInputDebounced
            v-model="searchKeyword"
            class="mb-6 block w-full"
            placeholder="City, neighborhood, address, etc."
        />

        <div class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
            <PropertyCard
                v-for="property in data?.Objects"
                :key="property.Id"
                :property="property"
            />
        </div>
    </div>
</template>
