<template>
  <div class="flex bg-white h-[150px] flex-col w-full">
    <div class="flex flex-col h-20 items-center">
      <div class="flex items-center justify-between w-7xl pt-3 h-[64px]">
        <img src="@/assets/Logo.png" alt="">
        <div class="flex w-50 justify-between items-center">
          <div class="bg-[#F1F1F3] rounded flex p-2 gap-4">
            <span>Account</span>
            <img class="w-6 h-6 bg-[#00AE69] p-1 rounded" src="@/assets/user.png" alt="">
          </div>
          <img class="items-center cursor-pointer w-8 h-8" src="@/assets/logout.png" alt="">
        </div>
      </div>
      <div class="flex w-7xl pt-5 h-[48px] bg-[#FFFFFF]">
        <div class="flex justify-between w-full h-[40px]">
          <div class="flex items-center justify-between w-[540px] rounded border-2 border-[#E0E7FF]">
            <div class="flex items-center w-full h-full text-[#3366FF99]">
              <span class="w-[180px] cursor-pointer hover:bg-[#3366FF] hover:text-white rounded-bl rounded-tl flex justify-center border-r-2 border-[#E0E7FF] items-center h-full"><router-link to="/dashboard">Dashboard</router-link></span>
              <span class="w-[180px] cursor-pointer hover:bg-[#3366FF] hover:text-white flex justify-center h-full items-center"><router-link to="/sponsor">Homiylar</router-link></span>
              <span class="w-[180px] cursor-pointer hover:bg-[#3366FF] hover:text-white rounded-br rounded-tr flex justify-center border-l-2 border-[#E0E7FF] h-full items-center"><router-link to="/student">Talabalar</router-link></span></div>
          </div>
          <div class="flex h-full w-[420px] items-center justify-between">
            <div class="flex rounded w-[280px] p-2 gap-2 bg-[#E8E8E8] items-center">
              <img src="@/assets/search.png" alt="">
              <input
                class="text-[#B1B1B8] w-full"
                type="text"
                placeholder="Izlash"
              >
            </div>
            <div class="bg-[#EDF1FD] flex rounded justify-center items-center gap-4 w-[120px] h-full">
              <button
                class="flex cursor-pointer"
                type="button">
                <img src="@/assets/filter.png" alt="">
              </button>
              <span class="text-[#3365FC]">Filter</span>
            </div>
          </div>
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
