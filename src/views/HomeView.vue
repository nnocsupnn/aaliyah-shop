<script setup lang="ts">
import ShopList from '@/components/ShopList.vue';
import { Analytics } from "@vercel/analytics/vue";
import { SpeedInsights } from "@vercel/speed-insights/vue"

</script>

<template>
  <div id="app">
    <Analytics/>
    <SpeedInsights/>
    <ShopList />
  </div>
  <RouterView/>
</template>
