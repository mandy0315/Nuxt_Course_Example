<script setup lang="ts">
import type { Course } from '~~/types';

const route = useRoute();
const { data } = await useFetch<Course>(`https://vue-lessons-api.vercel.app/courses/${route.params.id}`); 
</script>
<template>
  <div>
    <div>{{ data }}</div>
    <div>
      <NuxtLink :to="`/courses/${route.params.id}`">課程首頁</NuxtLink>
      <NuxtLink :to="`/courses/${route.params.id}/a`">a</NuxtLink>
      <NuxtLink :to="`/courses/${route.params.id}/b`">b</NuxtLink>

      <NuxtPage />
    </div>
  </div>

</template>

<style lang="scss" scoped>
a {
  margin: 0 10px;
}
</style>