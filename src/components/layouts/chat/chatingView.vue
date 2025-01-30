<template>
  <div class="flex p-4 flex-col h-screen ml-20 mr-4 bg-gray-900">
    <!-- 방 제목 -->
    <div class="font-bold text-white">
      {{ props.roomId ?? "Room Name" }}
    </div>

    <!-- 채팅 영역 -->
    <div
      ref="chatContainer"
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
import { ref, defineProps, nextTick } from "vue";
import ChatMessage from "./chatComp/chatMessage.vue";
import SendMessage from "./chatComp/sendMessage.vue";

// 채팅 메시지 목록
const messages = ref(["chat1", "chat22222", "chat33333333"]);

// 채팅 컨테이너 참조 (스크롤을 내리기 위해 사용)
const chatContainer = ref(null);

// 새로운 메시지를 추가할 때 자동으로 스크롤을 내리는 함수
const addMessage = (message) => {
  messages.value.push(message);

  // DOM 업데이트 후 실행되도록 nextTick 사용
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  });
};

// roomId props 정의
const props = defineProps({
  roomId: Number,
});
</script>

<style scoped></style>
