<template>
    <div v-html="renderedContent"></div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';
  
  const props = defineProps({
    content: {
      type: String,
      required: true
    }
  });
  
  const renderedContent = computed(() => {
    return katex.renderToString(props.content, {
      throwOnError: false
    });
  });
  </script>