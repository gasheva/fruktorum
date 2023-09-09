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
                    Icon(:class="$style['footer-info__brand-icon']", name="ic:baseline-facebook")
                    Icon(:class="$style['footer-info__brand-icon']", name="entypo-social:vk-with-circle")
                    span(:class="$style['instagram-icon']")
                        Icon(:class="$style['footer-info__brand-icon']", name="radix-icons:instagram-logo")
                    Icon(:class="$style['footer-info__brand-icon']", name="ic:baseline-telegram")
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
    margin-top: 30px
  }
    &__brand-icon {
        font-size: 30px;
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

.instagram-icon {
    display: inline-block;
    width: 30px;

    text-align: center;
    line-height: 27px;
    background: $black;
    border-radius: 50%;

    & > svg {
        font-size: 20px;
    }

    & path {
        color: white;
    }
}
</style>
