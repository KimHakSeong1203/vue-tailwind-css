<template>
  <div class="flex flex-col gap-3">
    <div class="font-bold text-white">{{ props.roomId ?? "Room Name" }}</div>

    <div class="chat-message" v-for="message in messages" :key="message">
      <ChatMessage :message="message" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import ChatMessage from "./chatComp/chatMessage.vue"; // 파일 경로 수정

const messages = ref(["chat1", "chat22222", "chat33333333"]);

const props = defineProps({
  roomId: Number,
});
</script>

<style scoped></style>
