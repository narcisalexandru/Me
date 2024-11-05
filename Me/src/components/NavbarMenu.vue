<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const items = ref([
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' }
]);
</script>