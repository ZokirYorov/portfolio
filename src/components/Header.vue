<template>
  <div class="flex bg-white h-[64px] flex-col w-full">
    <div class="flex flex-col h-full items-center">
      <div class="flex items-center justify-between w-7xl py-4 h-[64px]">
        <img src="@/assets/Logo.png" alt="">
        <div class="flex w-50 justify-between items-center">
          <div class="bg-[#F1F1F3] rounded flex p-2 gap-4">
            <span>Account</span>
            <img class="w-6 h-6 bg-[#00AE69] p-1 rounded" src="@/assets/user.png" alt="">
          </div>
          <img class="items-center cursor-pointer w-8 h-8" src="@/assets/logout.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: `Header`,
})
</script>
<style>

</style>
