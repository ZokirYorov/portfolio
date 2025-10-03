<template>
<div class="flex flex-col w-full">
  <div class="flex bg-gray-50 h-[88px] flex-col w-full">
    <div class="flex items-center w-7xl gap-3 m-auto">
      <button class="bg-gray-200 cursor-pointer w-7 h-7 rounded-sm" @click="$router.back()"><img src="@/assets/arrowLeft.png" alt=""></button>
      <h2 class="font-medium text-2xl text-6 text-6">Amonov Ilhom Aliyevich</h2>
      <span class="flex items-center justify-center bg-[#DDFFF2] rounded w-[100px] h-[25px] leading-snug p-2 text-[#00CF83]">Tasdiqlangan</span>
    </div>
  </div>
  <div class="flex flex-col items-center mx-[300px] mt-10 justify-between p-6 w-4xl bg-white">
    <div class="flex flex-col gap-6 w-[790px] h-260px]">
      <div class="flex items-center justify-between">
        <h2 class="font-semibold text-2xl">Homiy haqida</h2>
        <button class="flex text-[#3365FC] bg-[#EDF1FD] rounded w-[165px] h-[42px] cursor-pointer justify-center items-center gap-1"><img src="@/assets/edit.png" alt=""> Tahrirlash</button>
      </div>
      <div class="flex w-full flex-col">
        <div class="flex items-center h-[64px] gap-5">
          <img src="@/assets/person.png" alt="">
          <span class="w-[165px] h-42px] font-medium">Amonov Ilhom Aliyevich</span>
        </div>
        <div class="flex items-center h-[64px]">

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
</script>
