<script setup lang="ts">
interface IProps {
  label: string
  color?: 'blue' | 'black'
}
const props = withDefaults(defineProps<IProps>(), {
  color: 'black'
})

const emit = defineEmits<{
  (event: 'click'): void
}>()
</script>

<template>
  <button :class="[$style.button, $style[`button--${props.color}`]]" @click="emit('click')">
    {{ props.label }}
  </button>
</template>

<style lang="scss" module>
.button {
  color: $white;
  padding: 8px 20px;

  &--black {
    background-color: $black;
    border: 1px solid $black;
  }

  &--black:hover {
    background-color: $blue;
    border-color: $blue;
  }

  &--blue {
    background-color: $blue;
    border: 1px solid $blue;
  }

  &--blue:hover {
    background-color: transparent;
  }
}
</style>
