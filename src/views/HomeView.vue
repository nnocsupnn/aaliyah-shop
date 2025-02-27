<script setup lang="ts">
import ShopList from '@/components/ShopList.vue';
import { Analytics } from "@vercel/analytics/vue"

</script>

<template>
  <div id="app">
    <Analytics/>
    <ShopList />
  </div>
  <RouterView/>
</template>
