<template>
  <fwb-modal
    class="h-screen absolute z-2"
    v-if="isShowModal"
    @close="closeModal"
  >
    <template #header>
      <div class="flex items-center font-normal text-lg">
        새로운 채널을 추가해보세요
      </div>
    </template>
    <template #body>
      <fwb-input
        v-model="ChannelName"
        placeholder="4~20 자리 영어, 숫자"
        label="Channel Name"
      />
    </template>
    <template #footer>
      <div class="flex justify-end gap-4">
        <fwb-button @click="closeModal" color="alternative"> 취소 </fwb-button>
        <fwb-button @click="closeModal" color="blue">추가</fwb-button>
      </div>
    </template>
  </fwb-modal>

  <div>
    <div
      class="fixed top-0 h-screen w-16 m-0 flex flex-col bg-gray-600 text-white shadow"
    >
      <i v-for="i in 5" :key="i">
        <SideBarIcon
          :class="{ 'bg-gray-400': String(route.params.roomId) === String(i) }"
          @click="gotoChat(i)"
          :iconValue="i"
        />
      </i>
      <div
        @click="addChatServer()"
        class="cursor-pointer mb-4 w-full h-full flex items-end justify-center"
      >
        <i class="pi pi-plus-circle" style="font-size: 2.5rem"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { FwbButton, FwbModal, FwbInput } from "flowbite-vue";
import { ref } from "vue";
import SideBarIcon from "./SideBarComp/SideBarIcon.vue";
const isShowModal = ref(false);
const ChannelName = ref("");
function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}
const router = useRouter();
const route = useRoute();

const gotoChat = (roomId) => {
  router.push({ name: "ChatById", params: { roomId } });
};

const addChatServer = () => {
  showModal();
};
</script>

<style scoped></style>
