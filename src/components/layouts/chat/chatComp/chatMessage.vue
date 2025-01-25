<template>
  <div
    class="flex flex-col gap-2 p-2 rounded-lg bg-slate-700 min-w-5 max-w-max"
  >
    <p class="font-bold text-white">NickName</p>
    <span class="text-white">{{ props.message }}</span>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  message: String,
});
</script>
