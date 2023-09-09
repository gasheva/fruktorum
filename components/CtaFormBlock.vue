<script setup lang="ts">
const formData = {
  name: '',
  phone: '',
  email: ''
}
</script>

<template lang="pug">
div(:class="$style['form-block']")
    img(:class="$style['form-block__image']", src="~public/images/cta-form.png", alt="subscribe image" loading="lazy")
    div(:class="$style['form-block__form']")
        h2(:class="$style['form-block__header']") Стань участником проекта
        InputsBase(v-model:value="formData.name", :class="$style['form-block__input']", placeholder="Имя")
        InputsBase(v-model:value="formData.phone", :class="$style['form-block__input']", placeholder="Телефон")
        InputsBase(v-model:value="formData.email", :class="$style['form-block__input']", placeholder="Email")
        ButtonsBase(:class="$style['form-block__button']", label="Присоединиться", color="blue")
</template>

<style lang="scss" module>
.form-block {
  display: flex;
  gap: 60px;
  padding: 60px;
  background-color: $black;

  &__image {
    width: 50%;
    object-fit: cover;
  }

  &__form {
    display: flex;
    flex-direction: column;
    max-width: 35%;
  }

  &__input {
    margin-bottom: 25px;
  }

  &__header {
    margin-bottom: 50px;
    color: $white;
  }

  &__button {
    margin-top: 50px;
  }
}

@media (max-width: $screen-md) {
  .form-block {
    &__image {
      display: none;
    }

    &__form {
      max-width: 100%;
    }
  }
}
</style>
