<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {PropType} from 'vue';
import Media from '@/models/Media';

defineProps({
    alt: {
        type: String,
        required: true,
    },
    medias: {
        type: Array as PropType<Media[]>,
        required: true,
    },
});

const swiper = ref();
</script>

<template>
    <Swiper
        auto-height
        class="group relative"
        loop
        @swiper="swiper = $event"
    >
        <SwiperSlide
            v-for="media in medias"
            :key="media.IndexNumber"
        >
            <!-- TODO: Use lazy-loaded srcset so that optimized images are used in different screens. -->
            <img
                :alt="alt"
                class="mx-auto"
                :src="media.MediaItems.at(-1).Url"
            >
        </SwiperSlide>

        <CommonButtonChevron
            v-if="swiper"
            class="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rotate-180 opacity-20 transition-opacity group-hover:opacity-80 lg:flex"
            @click="swiper.slidePrev()"
        />

        <CommonButtonChevron
            v-if="swiper"
            class="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 opacity-20 transition-opacity group-hover:opacity-80 lg:flex"
            @click="swiper.slideNext()"
        />

        <div
            v-if="swiper"
            class="absolute bottom-2 right-2 z-10 rounded bg-black/50 py-0.5 px-2 text-xs text-white"
        >
            {{ swiper.realIndex + 1 }} / {{ medias.length }}
        </div>
    </Swiper>
</template>
