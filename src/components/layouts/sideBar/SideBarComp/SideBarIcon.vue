<template>
  <div class="sidebar-icon">{{ props.iconValue }}</div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  iconValue: Number,
});
</script>
<style scoped></style>
