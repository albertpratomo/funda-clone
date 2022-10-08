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
</script>

<template>
    <div>
        <!-- TODO: Only show swiper in mobile and tablet. In desktop, show a grid of photos. When a photo is clicked, open swiper in a modal. -->
        <PropertyMediaSwiper
            :alt="property.Adres"
            class="lg:ml-0 lg:max-w-4xl"
            :medias="photos"
        />
    </div>
</template>
