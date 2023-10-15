<template>
    INDEX

    <div>Fech Hello={{ username }}</div>
</template>

<script setup lang="ts">
const { data: username } = await useFetch('/api/user');
</script>
