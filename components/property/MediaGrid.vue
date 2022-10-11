<script lang="ts" setup>
import {PropType} from 'vue';
import MediaCategory from '@/enums/MediaCategory';
import Property from '@/models/Property';

const props = defineProps({
    property: {
        type: Object as PropType<Property>,
        required: true,
    },
});

const photos = props.property.Media.filter(m => m.Categorie === MediaCategory.Photo);

const sidePhotos = photos.slice(1, 4);
</script>

<template>
    <div class="lg:grid lg:grid-cols-4 lg:grid-rows-3 lg:items-center lg:gap-4">
        <div class="lg:col-span-3 lg:row-span-3">
            <!-- TODO: Only show swiper in mobile and tablet. In desktop, show a grid of photos. When a photo is clicked, open swiper in a modal. -->
            <PropertyMediaSwiper
                :alt="property.Adres"
                :medias="photos"
            />
        </div>

        <img
            v-for="photo in sidePhotos"
            :key="photo.IndexNumber"
            class="hidden rounded-lg lg:block"
            :src="photo.MediaItems.at(-2).Url"
        >
    </div>
</template>
