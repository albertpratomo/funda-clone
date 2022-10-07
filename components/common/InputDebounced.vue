<script lang="ts" setup>
import type {PropType} from 'vue';
import {useDebounceFn} from '@vueuse/core';

const props = defineProps({
    modelValue: {
        type: null as unknown as PropType<string | number | null>,
        validator: (v: any) => typeof v === 'string' || typeof v === 'number' || v === null,
        required: true,
    },
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: typeof props['modelValue']): void
}>();

const debouncedUpdate = useDebounceFn(
    e => emit('update:modelValue', e.target.value),
    500,
);
</script>

<template>
    <input
        class="rounded border p-2"
        :value="modelValue"
        @input="debouncedUpdate"
    >
</template>
