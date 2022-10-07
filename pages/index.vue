<script lang="ts" setup>
const searchKeyword = ref('');
</script>

<template>
    <div>
        Search

        <CommonInputDebounced
            v-model="searchKeyword"
            class="block w-full"
            placeholder="City, neighborhood, address, etc."
        />
    </div>
</template>
