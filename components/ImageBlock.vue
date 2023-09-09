<script setup lang="ts">
interface IData {
  src: string
  caption: string
}
interface IProps {
  data: IData
}

const props = defineProps<IProps>()
</script>

<template lang="pug">
ImagesBase(:src="props.data.src", :caption="props.data.caption")
</template>

<style scoped lang="scss"></style>
