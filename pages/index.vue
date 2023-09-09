<script setup lang="ts">
const content = (await useFetch('/api/home')).data
</script>

<template lang="pug">
ArticleListBlock(v-if="content?.body" :data="content.body?.[0].data")
</template>
