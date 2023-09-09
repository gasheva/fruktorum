<script setup lang="ts">
import { ref } from 'vue'
const email = ref('')
</script>

<template lang="pug">
div(:class="[$style['subscribe-block']]")
    h3(:class="[$style['subscribe-block__header']]") Подпишись на рассылку
    span(:class="[$style['subscribe-block__subscribe']]")
        InputsBase(v-model:value="email", placeholder="email")
        ButtonsBase(:class="[$style['subscribe-block__subscribe-button']]", color="blue", label="Подписаться")
</template>

<style module lang="scss">
.subscribe-block {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;
  background-color: $black;

  &__header {
    color: $white;
  }

  &__subscribe-button {
    margin-left: 37px;
  }
}

@media (max-width: $screen-lg) {
  .subscribe-block {
    flex-direction: column;
    align-items: flex-start;

    &__subscribe {
      margin-top: 20px;
    }

    &__subscribe-button {
      margin-left: 100px;
    }
  }
}

@media (max-width: $screen-sm) {
  .subscribe-block {
    &__subscribe {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }

    &__subscribe-button {
      margin-left: 0;
    }
  }
}
</style>
