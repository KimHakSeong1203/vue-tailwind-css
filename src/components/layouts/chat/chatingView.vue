<template>
  <div class="flex p-4 flex-col h-screen ml-20 mr-4 bg-gray-900">
    <!-- 방 제목 -->
    <div class="font-bold text-white">
      {{ props.roomId ?? "Room Name" }}
    </div>

    <!-- 채팅 영역 -->
    <div
      class="flex-1 overflow-y-auto p-4 bg-gray-800 flex flex-col gap-3 rounded-lg"
    >
      <div v-for="message in messages" :key="message">
        <ChatMessage :message="message" />
      </div>
    </div>

    <!-- 입력 영역 -->
    <div class="bg-gray-900 mt-4">
      <SendMessage @send-message="addMessage" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import ChatMessage from "./chatComp/chatMessage.vue"; // 파일 경로 수정
import SendMessage from "./chatComp/sendMessage.vue";

const messages = ref(["chat1", "chat22222", "chat33333333"]);
const addMessage = (message) => {
  messages.value.push(message);
};
const props = defineProps({
  roomId: Number,
});
</script>

<style scoped></style>
