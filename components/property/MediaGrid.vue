<script lang="ts" setup>
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/vue';
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

const swiper = ref();
</script>

<template>
    <div>
        <Swiper
            class="relative"
            :loop="true"
            @swiper="swiper = $event"
        >
            <SwiperSlide
                v-for="photo in photos"
                :key="photo.IndexNumber"
            >
                <img
                    :alt="property.Adres"
                    class="mx-auto"
                    :src="photo.MediaItems[2]?.Url"
                >
                <!-- <img data-src="path/to/picture-1.jpg" class="swiper-lazy" /> -->
            </SwiperSlide>

            <div
                v-if="swiper"
                class="absolute bottom-2 right-2 z-10 rounded bg-black/50 py-0.5 px-2 text-xs text-white"
            >
                {{ swiper.realIndex + 1 }} / {{ photos.length }}
            </div>
        </Swiper>
    </div>
</template>
