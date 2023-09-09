<script setup lang="ts">
interface IProps {
  data: string
}

const props = defineProps<IProps>()
</script>

<template lang="pug">
div(:class="$style['text-block']")
    div(v-html="props.data")
</template>

<style module lang="scss">
.text-block {
  max-width: 900px;
  margin: auto;

  & h2 {
    margin-bottom: 50px;
  }

  & h3 {
    margin-bottom: 34px;
  }

  & p {
    margin-bottom: 1rem;
  }

  & blockquote {
    position: relative;
    margin-left: 100px;
    margin-top: 40px;

    & p {
      font-weight: 300;
      font-style: italic;
    }

    &:before {
      content: '';

      position: absolute;
      left: -100px;

      display: inline-block;
      width: 100px;
      height: 100px;

      background-image: url('/assets/icons/quotes.svg');
      background-repeat: no-repeat;
    }

    footer {
      color: $gray;
      line-height: $line-height-sm;
      font-size: $font-size-sm;
    }
  }
  & ul {
    max-width: 700px;
    margin-inline: auto;
    padding-left: 1em;
    margin-bottom: 16px;

    list-style-type: none;
  }

  & ul > li::before {
    content: '\25C6';
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
}
</style>
