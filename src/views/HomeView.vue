<template><div @click="gotoChat">Go Chat</div></template>
<script setup>
import router from "@/router";

const gotoChat = () => {
  router.push({ name: "Chat" });
};
</script>
