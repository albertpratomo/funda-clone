<script lang="ts" setup>
const searchKeyword = ref('');

const endpoint = computed(() => `/api/feeds/Aanbod.svc/json/ac1b0b1572524640a0ecc54de453ea9f/?type=koop&zo=/${searchKeyword.value}`);

const {data, pending} = await useFetch(endpoint, {
    server: false,
    watch: [endpoint],
});
</script>

<template>
    <div>
        Search

        <CommonInputDebounced
            v-model="searchKeyword"
            class="mb-4 block w-full"
            placeholder="City, neighborhood, address, etc."
        />

        <div
            v-for="property in data?.Objects"
            :key="property.Id"
        >
            {{ property.Adres }}
        </div>
    </div>
</template>
