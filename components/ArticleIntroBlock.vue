<script setup lang="ts">
interface IData {
  title: string
  image: string
  reading_time: number
  views_count: number
  short_description: string
}
interface IProps {
  data: IData
}

const props = defineProps<IProps>()
</script>

<template lang="pug">
div(:class="$style.intro")
    ImagesBase(:src="props.data.image", :class="$style['intro__image']")
    div(:class="$style['intro__info']")
        h1(:class="$style['intro__header']") {{ props.data.title }}
        div(:class="$style['intro__secondary']")
            Icon(:class="$style['intro__icon']", name="mdi:clock")
            | {{ props.data.reading_time }} мин. время чтения
        div(:class="$style['intro__secondary']")
            Icon(:class="$style['intro__icon']", name="mdi:eye")
            | {{ props.data.views_count }} прочитали эту статью
        div(:class="$style['intro__description']") {{props.data.short_description}}
</template>

<style lang="scss" module>
.intro {
  display: flex;
  align-items: center;
  gap: 30px;
  margin: auto;

  &__icon {
    & > path {
      color: $gray;
    }
    margin-right: 8px;
    color: $gray;
  }

  &__secondary {
    @include text-secondary;
    margin-bottom: 10px;
  }

  &__header {
    margin-bottom: 30px;
  }

  &__image {
    width: 541px;
    height: 580px;
    flex-shrink: 0;
  }

  &__description {
    margin-top: 50px;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: $screen-xl) {
  .intro {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: $screen-sm) {
  .intro {
    &__image {
      width: 100%;
      height: auto;
    }
  }
}
</style>
