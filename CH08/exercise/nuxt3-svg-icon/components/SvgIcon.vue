<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string;
  color?: string;
}>(), {
  color: "#333",
})
const svgName = computed(() => {
  return props.name.includes("/") ? `#${props.name}` : `#/${props.name}`;
});
</script>
<template>
  <svg aria-hidden="true">
    <use :xlink:href="svgName" :fill="props.color" />
  </svg>
</template>