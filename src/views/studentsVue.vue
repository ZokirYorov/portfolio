<template>
  <div class="w-full">
    <div class="flex flex-col bg-gray-50 h-[88px] w-full">
      <div class="flex w-7xl m-auto pt-5 h-[88px]">
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
            <button
              class="bg-[#EDF1FD] rounded justify-center items-center gap-4 w-[120px] h-full cursor-pointer flex"
              type="button">
              <img src="@/assets/filter.png" alt="">
              <span class="text-[#3365FC]">Filter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
