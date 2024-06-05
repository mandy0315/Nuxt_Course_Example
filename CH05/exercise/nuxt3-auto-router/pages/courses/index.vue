<script setup lang="ts">
import type { Course } from '~~/types';

const { data } = await useFetch<Course[]>('https://vue-lessons-api.vercel.app/courses/list')
</script>
<template>
  <h2>course list</h2>
  <main>
    <CardList :courses="data" />
  </main>

</template>
