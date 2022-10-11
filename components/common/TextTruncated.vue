<script lang="ts" setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
    untruncrateText: {
        type: String,
        required: true,
    },
});

const truncated = ref(true);
</script>

<template>
    <div>
        <div
            class="relative whitespace-pre-line"
            :class="{'h-[30vh] overflow-hidden': truncated}"
        >
            {{ text }}

            <div
                v-if="truncated"
                class="absolute inset-x-0 bottom-0"
            >
                <div class="h-12 bg-gradient-to-t from-white" />

                <button
                    class="flex w-full items-center bg-white font-medium"
                    @click="truncated = false"
                >
                    <IconPlus
                        class="mr-2"
                        size="h-4 w-4"
                    />

                    {{ untruncrateText }}
                </button>
            </div>
        </div>
    </div>
</template>
