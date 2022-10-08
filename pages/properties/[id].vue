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

        <h1 class="mt-6 text-3xl font-semibold">
            {{ property.Adres }}
        </h1>

        <h3 class="mt-1">
            {{ property.Postcode }} {{ property.Plaats }}
        </h3>

        <div class="mt-4 flex space-x-3 text-sm">
            <div>
                <span class="font-semibold">
                    {{ property.WoonOppervlakte }} m²
                </span>

                living area
            </div>

            <div>
                <span class="font-semibold">
                    {{ property.PerceelOppervlakte }} m²
                </span>

                plot size
            </div>

            <div>
                <span class="font-semibold">
                    {{ property.AantalKamers }}
                </span>

                rooms
            </div>
        </div>

        <div
            class="mt-4 text-xl font-semibold"
            v-html="property.PrijsGeformatteerd"
        />

        <div class="mt-4 whitespace-pre-line text-sm">
            {{ property.VolledigeOmschrijving }}
        </div>

        <div class="sticky bottom-0 mt-3 bg-white py-4">
            <NuxtLink
                class="btn-black w-full"
                target="_blank"
                :to="property.URL"
            >
                See more details
            </NuxtLink>
        </div>
    </div>
</template>
