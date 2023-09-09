<script setup lang="ts">
interface IProps {
  image: string
  title: string
  link: string
}

const props = defineProps<IProps>()
</script>

<template lang="pug">
div(:class="[$style.block]")
    img(:class="[$style['block__image']]", :src="props.image", alt="article image" loading="lazy")
    h3(:class="[$style['block__header'], $style['header']]") {{ props.title }}
    nuxt-link(:to="`${link}`", :class="[$style['block__button']]")
        ButtonsBase(color="black", label="Читать")
</template>

<style lang="scss" module>
.block {
  display: flex;
  flex-direction: column;

  min-width: 300px;
  height: 476px;

  &__image {
    width: 100%;
    height: 320px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  &__button {
    margin-top: auto;
  }
}
.header {
  @include text-truncate(2, $line-height-lg);
}
</style>
