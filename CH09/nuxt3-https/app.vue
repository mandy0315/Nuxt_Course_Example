<script setup>
onMounted(async () => {
  const response = await $fetch("/VsWeb/api/GetLstDicCinema");
  console.log('response', response);
});


</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
