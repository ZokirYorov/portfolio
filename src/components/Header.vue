<template>
  <div class="flex bg-white h-[64px] flex-col w-full">
    <div class="flex flex-col h-full items-center">
      <div class="flex items-center justify-between w-7xl py-4 h-[64px]">
        <img src="@/assets/Logo.png" alt="">
        <div class="flex w-50 justify-between gap-10 items-center">
          <div class="bg-[#F1F1F3] rounded flex p-2 gap-4">
            <span>Account</span>
            <img class="w-6 h-6 bg-[#00AE69] p-1 rounded" src="@/assets/user.png" alt="">
          </div>
          <button
            @click="clickLogOut"
            class="w-10 h-8 hover:bg-gray-200 flex cursor-pointer items-center justify-center rounded"
          >
            <img class="" src="@/assets/logout.png" alt="">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from '@/stores/store.ts'

const authStore = useAuthStore()
const router = useRouter();

const clickLogOut = () => {
  authStore.clearToken()
  router.push('/login')
}
</script>
<style>

</style>
