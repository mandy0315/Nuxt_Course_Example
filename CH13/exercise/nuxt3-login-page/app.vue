<script setup>
// import { useLogingStore } from '~~/stores/login'

const authCookie1 = useCookie('auth');
const logingStore = useLogingStore();

const token = authCookie1.value?.token;
// onMounted 只有在 client 端執行
onMounted(() => {
  logingStore.checkAuth();

  const id = setInterval(() => {
    const authCookie2 = useCookie('auth');
    if (token !== authCookie2.value?.token) {
      window.location.reload();
      clearInterval(id);
    }
  }, 100);
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  background-color: #f1e4db;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
