<script setup lang="ts">
interface IProps {
  data: string[]
}

const props = defineProps<IProps>()
</script>

<template lang="pug">
div
    Swiper(
        :class="$style.swiper"
        :width="900"
        :height="300"
        centered-slides
        navigation
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        effect="creative"
        :autoplay="{ delay: 8000, disableOnInteraction: false }"
        :creative-effect="{\
            prev: { shadow: false, translate: ['-20%', 0, -1] },\
            next: { translate: ['100%', 0, 0] }\
        }"
    )
        SwiperSlide(
            v-for="(slide, idx) in props.data"
            :key="idx"
            lazy
        )
            img(:src="slide", alt="slide image", loading="lazy")
</template>

<style module lang="scss">
.swiper {
  width: 100%;
  & img {
    width: 100%;
  }
}

.image {
  width: 100%;
  object-fit: cover;
}
</style>
