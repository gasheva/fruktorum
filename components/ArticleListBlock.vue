<script setup lang="ts">
interface IArticle {
  image: string
  title: string
  link: string
}

interface IData {
  title: string
  articles: IArticle[]
}

interface IProps {
  data: IData
}

const props = defineProps<IProps>()
</script>

<template lang="pug">
div(:class="$style.articles")
    ArticleBlock(v-for="article in props.data.articles" :key="article.id" v-bind="article")
</template>

<style lang="scss" module>
.articles {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-row-gap: 50px;
  column-gap: 30px;
}

@media (max-width: $screen-xl) {
  .articles {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
}

@media (max-width: $screen-md) {
  .articles {
    grid-template-columns: repeat(1, minmax(300px, 600px));
    justify-content: center;
  }
}
</style>
