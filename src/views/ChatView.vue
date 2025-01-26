<template>
  <div class="flex flex-col h-screen bg-gray-900">
    <SideBar />
    <div v-if="roomId">
      <ChatingView :roomId="roomId" />
    </div>
    <div v-else class="ml-20 p-2 mt-2 text-white">
      <p>채널을 선택해주세요</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import ChatingView from "../components/layouts/chat/chatingView.vue";
import SideBar from "../components/layouts/sideBar/SideBar.vue";

const route = useRoute();
const roomId = route.params.roomId ?? null; // roomId가 없을 경우 null로 처리
</script>

<style scoped></style>
