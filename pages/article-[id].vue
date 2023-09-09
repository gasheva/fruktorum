<script setup lang="ts">
const Components = {
  ArticleIntroBlock: resolveComponent('ArticleIntroBlock'),
  TextBlock: resolveComponent('TextBlock'),
  SliderBlock: resolveComponent('SliderBlock'),
  SubscribeFormBlock: resolveComponent('SubscribeFormBlock'),
  ArticleListBlock: resolveComponent('ArticleListBlock'),
  CtaFormBlock: resolveComponent('CtaFormBlock'),
  ImageBlock: resolveComponent('ImageBlock')
}

const { id } = useRoute().params
const content = (await useFetch(`/api/article-${id}`, { key: id.toString() })).data

const resolveComponentByName = (name: string) => {
  const resolvedName = name.replace(/(?:^|[-_])(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
  const resolvedComponent = Components[resolvedName as keyof typeof Components]
  if (!resolvedComponent) {
    console.error(`Component "${resolvedName}" not found`)
  }
  return resolvedComponent
}
</script>

<template lang="pug">
div(v-if="content?.body" :class="$style.article")
    component(
        :is="resolveComponentByName(c.type)"
        v-for="c in content.body"
        :key="c.id"
        v-bind="c"
        :class="$style['article__block']")
</template>

<style lang="scss" module>
.article {
  &__block {
    margin-bottom: 100px;
  }
}

@media (max-width: $screen-sm) {
  .article {
    &__block {
      margin-bottom: 50px;
    }
  }
}
</style>
