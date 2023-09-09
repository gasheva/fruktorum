<script setup lang="ts">
interface IProps {
  src: string
  caption?: string
}

const props = defineProps<IProps>()
</script>

<template>
  <figure :class="$style['image-block']">
    <img :class="$style['image-block__image']" :src="props.src" alt="article image" />
    <figcaption v-if="caption" :class="$style['image-block__caption']">
      {{ props.caption }}
    </figcaption>
  </figure>
</template>

<style lang="scss" module>
.image-block {
  &__image {
    width: 100%;
    height: 100%;
    border-top-right-radius: 200px;
  }

  &__caption {
    @include text-secondary;
    margin-top: 15px;
    text-align: end;
  }
}
</style>
