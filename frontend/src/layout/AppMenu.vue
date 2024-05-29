<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

/* https://primefaces.org/showcase/icons.xhtml?jfwid=34587 */

const model = ref([
  {
    label: 'Home',
    items: [{ label: '메인 페이지', icon: 'pi pi-fw pi-home', to: '/' }]
  },
  {
    label: '게시판',
    items: [
      { label: '해줘요', icon: 'pi pi-fw pi-list', to: '/request' },
      { label: '도와줘요', icon: 'pi pi-fw pi-list', to: '/howto' }
    ]
  },
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
