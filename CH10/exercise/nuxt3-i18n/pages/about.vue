<script setup>
import { xssParse } from '~~/lib/filterXss'
const { t } = useI18n()

const htmlContent = computed(() => xssParse(t('about_content')));
</script>
<template>
  <div v-html="htmlContent"></div>
</template>
<style scoped>
.about {
  width: 500px;
}

a {
  cursor: pointer;
  color: #84551c;
  font-size: 25px;
  margin-bottom: 20px;
}
</style>
