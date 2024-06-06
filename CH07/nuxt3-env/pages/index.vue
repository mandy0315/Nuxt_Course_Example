<script setup>
const config = useRuntimeConfig();
// console.log('apiUrl=>', config.public.apiUrl);
// console.log('token=>', config.token);

console.log("ENV=>", process.env.ENV);
console.log("WEB_URL=>", process.env.WEB_URL);
</script>

<template>
  <div>
    <h1>首頁</h1>
  </div>
</template>

<style scoped></style>
