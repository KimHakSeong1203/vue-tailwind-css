<template>
  <fwb-input
    class=""
    v-model="sendMessage"
    label=" "
    placeholder="Message"
    size="md"
  >
    <template #suffix>
      <fwb-button @click="sendingMessage()" size="sm">Send</fwb-button>
    </template>
  </fwb-input>
</template>
<script setup>
import { ref, defineEmits } from "vue";
import { FwbButton, FwbInput } from "flowbite-vue";

const sendMessage = ref("");
const emit = defineEmits(["send-message"]);
const sendingMessage = () => {
  emit("send-message", sendMessage.value); // 부모에게 이벤트 전달
  sendMessage.value = ""; // 메시지 초기화
};
</script>
