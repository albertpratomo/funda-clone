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
    <div
        v-if="property"
        class="flex-col"
    >
        <PropertyMediaGrid :property="property" />

        <div class="mt-4 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:pb-4">
            <div class="lg:col-span-3">
                <h1 class="text-3xl font-semibold">
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
                <!-- eslint-disable vue/no-v-html -->

                <div
                    class="mt-4 text-xl font-semibold lg:hidden"
                    v-html="property.PrijsGeformatteerd"
                />
                <!-- eslint-enable vue/no-v-html -->

                <CommonTextTruncated
                    class="mt-4 max-w-xl text-sm"
                    :text="property.VolledigeOmschrijving"
                    untruncrate-text="Read the full description"
                />
            </div>

            <div class="hidden lg:block lg:text-right">
                <div class="sticky top-4">
                    <!-- eslint-disable vue/no-v-html -->
                    <div
                        class="text-2xl font-semibold"
                        v-html="property.PrijsGeformatteerd"
                    />
                    <!-- eslint-enable vue/no-v-html -->

                    <NuxtLink
                        class="btn-black mt-4 w-full"
                        target="_blank"
                        :to="property.URL"
                    >
                        See more details
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="sticky bottom-0 mt-auto bg-white py-4 lg:hidden">
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
