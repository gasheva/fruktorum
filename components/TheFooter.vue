<script setup lang="ts"></script>

<template lang="pug">
footer(:class="$style.footer")
    div.wrapper
        div(:class="[$style['footer__info'], $style['footer-info']]")
            div(:class="$style['footer-info__start']")
                div(:class="$style['footer-info__logo']")
                    IconsAppLogo
                span(:class="$style['footer-info__description']")
                    | Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
            div(:class="$style['footer-info__end']")
                div(:class="$style['footer-info__email']")
                    | email
                div
                    | testblogsupport@gmail.com
                span(:class="$style['footer-info__icons']")
        SubscribeFormBlock(:class="$style['footer__subscribe']")
</template>

<style lang="scss" module>
.footer {
  border-top: 1px solid $gray;
  padding-top: 50px;

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  &__subscribe {
    margin-top: 70px;
  }
}

.footer-info {
  &__start {
    max-width: 400px;
  }
  &__end {
  }

  &__description {
    @include text-secondary;
    margin-top: 20px;
  }

  &__icons {
    display: flex;
    gap: 20px;
  }
  &__email {
    @include text-secondary;
  }
}

@media (max-width: $screen-sm) {
  .footer-info {
    flex-direction: column;
    align-items: flex-start;

    &__logo {
      margin-bottom: 20px;
    }

    &__start {
      max-width: 100%;
    }
    &__end {
      margin-top: 20px;
    }
  }
}
</style>
