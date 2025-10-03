<template>
  <div class="flex flex-col w-full">
    <div class="flex h-[88px] flex-col">
      <div class="flex justify-between bg-gray-50 w-full h-full">
        <div class="flex w-7xl m-auto py-6 h-full">
          <div class="flex justify-between w-full h-full">
            <div class="flex items-center justify-between w-[540px] rounded border-2 border-[#E0E7FF]">
              <div class="flex items-center w-full text-[#3366FF99]">
                <span class="w-[180px] h-[40px] cursor-pointer hover:bg-[#3366FF] hover:text-white rounded-bl rounded-tl flex justify-center border-r-2 border-[#E0E7FF] items-center"><router-link to="/dashboard">Dashboard</router-link></span>
                <span class="w-[180px] h-[40px] cursor-pointer hover:bg-[#3366FF] hover:text-white flex justify-center items-center"><router-link to="/sponsor">Homiylar</router-link></span>
                <span class="w-[180px] h-[40px] cursor-pointer hover:bg-[#3366FF] hover:text-white rounded-br rounded-tr flex justify-center border-l-2 border-[#E0E7FF] items-center"><router-link to="/student">Talabalar</router-link></span></div>
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
      <div class="flex w-7xl m-auto py-12 flex-col">
        <div class="flex h-[96px] justify-between w-full">
          <div class="flex items-center gap-2 h-full p-6 w-[380px] bg-white rounded-md">
            <img class="w-12 h-12" src="@/assets/money.png" alt="">
            <div class="flex flex-col h-9 w-full">
              <span class="flex text-sm text-[#7A7A9D]">Jami to'langan summa</span>
              <span class="flex gap-1.5 text-xl">1 684 325 000 <span class="text-[#B2B7C1]">UZS</span> </span>
            </div>
          </div>
          <div class="flex items-center gap-2 h-full p-6 w-[380px] bg-white rounded-md">
            <img class="w-12 h-12 text-[#EDC7001A]" src="@/assets/money2.png" alt="">
            <div class="flex flex-col h-9 w-full">
              <span class="flex text-sm text-[#7A7A9D]">Jami to'langan summa</span>
              <span class="flex gap-1.5 text-xl">14 098 530 000 <span class="text-[#B2B7C1]">UZS</span> </span>
            </div>
          </div>
          <div class="flex items-center gap-2 h-full p-6 w-[380px] bg-white rounded-md">
            <img class="w-12 h-12" src="@/assets/money3.png" alt="">
            <div class="flex flex-col h-9 w-full">
              <span class="flex text-sm text-[#7A7A9D]">Jami to'langan summa</span>
              <span class="flex gap-1.5 text-xl">12 414 205 000 <span class="text-[#B2B7C1]">UZS</span> </span>
            </div>
          </div>
        </div>
        <div class="flex mt-7 h-[400px] m-auto w-7xl">
          <div class="w-[1500px]">
            <img class="w-full" src="@/assets/Frame.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
