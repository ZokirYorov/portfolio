<template>
  <div class="flex items-center w-full h-full justify-center min-h-screen m-auto flex-col bg-[#F5F5F7]">
    <div class="flex h-8">
      <img src="@/assets/group_title.png" alt="">
    </div>
    <div class="w-[380px] mt-12 h-[460px] gap-5 bg-white items-center justify-center p-6 rounded-md shadow-md flex flex-col">
      <h2 class="font-medium text-lg/7">Kirish</h2>
      <div class="flex w-full gap-2 flex-col">
        <label>LOGIN</label>
        <input class="bg-[#E0E7FF33] border-[#E0E7FF]-1 px-2 text-[#2E384D59] rounded h-10" type="text">
      </div>
      <div class="flex w-full gap-2 flex-col">
        <label class="h-4 flex" for="">PAROL</label>
        <input class="bg-[#E0E7FF33] border-[#E0E7FF]-1 px-2 text-[#2E384D] rounded h-10" type="password">
      </div>
      <div class="flex items-center h-14 justify-between bg-[#FAFAFA] border-[#FAFAFA]-1 p-3 w-full gap-2">
        <div class="flex w-full items-center gap-2">
          <input class="w-4 h-4 border-[#C1C1C1]-2 cursor-pointer" type="checkbox">
          <span>I'm not a robot</span>
        </div>
        <img class="flex w-14 h-14" src="@/assets/captcha.png" alt="">
      </div>
      <button class="flex mt-2 text-white cursor-pointer w-full items-center justify-center bg-[#2E5BFF] h-[50px] rounded">Kirish</button>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>
<style>

</style>
