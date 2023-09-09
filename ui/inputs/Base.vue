<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
  value: string
  placeholder: string
}

const props = defineProps<IProps>()

const emit = defineEmits<{
  (event: 'update:value', value: string): void
}>()

const valueData = computed({
  get () {
    return props.value
  },
  set (val) {
    emit('update:value', val)
  }
})
</script>

<template>
  <input v-model="valueData" type="text" :class="$style.input" :placeholder="props.placeholder" />
</template>

<style lang="scss" module>
.input {
  border: none;
  border-bottom: 1px solid $gray;
  outline: none;
  background-color: inherit;

  color: $white;
  text-transform: capitalize;

  transition: all 0.3s;
}

.input::placeholder {
  color: $gray;
}

.input:focus {
  border-bottom-color: $blue;
}

.input:focus::placeholder {
  color: transparent;
  opacity: 0;
}

.input:not(:placeholder-shown) {
  border-bottom-color: $white;
}
</style>
