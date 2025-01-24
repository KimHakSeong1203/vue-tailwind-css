<template>
  <div>
    <div
      class="fixed top-0 h-screen w-16 m-0 flex flex-col bg-gray-600 text-white shadow"
    >
      <i v-for="i in 5" :key="i">
        <SideBarIcon :iconValue="i" />
      </i>
    </div>
  </div>
</template>
<script setup>
import SideBarIcon from "./SideBarComp/SideBarIcon.vue";
</script>
<style lang=""></style>
