<script setup lang="ts">

</script>
<template>
  <div>about</div>
  <ul>
    <li>
      <NuxtLink to="/about">about</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about/a">a</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about/b">b</NuxtLink>
    </li>
  </ul>
  <main>
    <NuxtPage />
  </main>
</template>
<style lang="scss" scoped>
ul {
  display: flex;
  list-style: none;

  li {
    margin: 0 10px;
  }
}
</style>