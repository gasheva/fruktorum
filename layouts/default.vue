<script setup lang="ts">
import { useStore } from '~/store'

const store = useStore()
</script>

<template lang="pug">
div
    TheHeader
    main.wrapper(:class="$style.content")
        div.error(v-if="store.error" :class="$style.error") {{ store.error }}
        slot(v-else)
    TheFooter
</template>

<style lang="scss" module>
.content {
  margin-bottom: 200px;
}
.error {
  color: red;
  text-align: center;
}
</style>
