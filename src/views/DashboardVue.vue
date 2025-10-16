<template>
  <div class="flex flex-col w-full">
    <div class="flex h-[88px] flex-col">
      <div class="flex justify-between bg-gray-50 w-full h-full">
        <div class="flex w-7xl m-auto py-6 h-full">
          <div class="flex justify-between w-full h-full">
            <div
              class="flex items-center justify-between w-[540px] rounded border-2 border-[#E0E7FF]"
            >
              <div class="flex items-center w-full text-[#3366FF99]">
                <span
                  class="w-[180px] h-[40px] cursor-pointer bg-[#3366FF] hover:bg-blue-700 text-white rounded-bl rounded-tl flex justify-center border-r-2 border-[#E0E7FF] items-center"
                  ><router-link to="/dashboard">Dashboard</router-link></span
                >
                <span
                  class="w-[180px] h-[40px] cursor-pointer hover:bg-blue-700 hover:text-white flex justify-center items-center"
                  ><router-link to="/sponsors">Homiylar</router-link></span
                >
                <span
                  class="w-[180px] h-[40px] cursor-pointer hover:bg-blue-700 hover:text-white rounded-br rounded-tr flex justify-center border-l-2 border-[#E0E7FF] items-center"
                  ><router-link to="/students">Talabalar</router-link></span
                >
              </div>
            </div>
            <div class="flex h-full w-[420px] items-center justify-between">
              <div class="flex rounded w-[280px] p-2 gap-2 bg-[#E8E8E8] items-center">
                <img src="@/assets/search.png" alt="" />
                <input class="text-[#B1B1B8] w-full" type="text" placeholder="Izlash" />
              </div>
              <button
                class="bg-[#EDF1FD] rounded justify-center items-center gap-4 w-[120px] h-full cursor-pointer flex"
                type="button"
              >
                <img src="@/assets/filter.png" alt="" />
                <span class="text-[#3365FC]">Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-7xl m-auto py-12 flex-col">
        <div class="flex h-[96px]  justify-between w-full">
          <div class="flex gap-4 h-full p-6 w-[380px] bg-white rounded-md">
            <img class="w-12 h-12" src="@/assets/money.png" alt="" />
            <div class="flex flex-col h-9 w-full">
              <span class="text-sm font-normal font-rubik text-[#7A7A9D]">Jami to'langan summa</span>
              <span class="flex gap-1.5 font-medium text-xl"
                >{{ dashboardForm?.['total_must_pay'] }} <span class="text-[#B2B7C1]">UZS</span>
              </span>
            </div>
          </div>
          <div class="flex gap-4 h-full p-6 w-[380px] bg-white rounded-md">
            <img class="w-12 h-12 text-[#EDC7001A]" src="@/assets/money2.png" alt="" />
            <div class="flex flex-col h-9 w-full">
              <span class="flex text-sm text-[#7A7A9D]">Jami so'ralgan summa</span>
              <span class="flex gap-1.5 font-medium text-xl"
                >{{ dashboardForm?.['total_need'] }}<span class="text-[#B2B7C1]">UZS</span>
              </span>
            </div>
          </div>
          <div class="flex gap-4 h-full p-6 w-[380px] bg-white rounded-md">
            <img class="w-12 h-12" src="@/assets/money3.png" alt="" />
            <div class="flex flex-col h-9 w-full">
              <span class="flex text-sm text-[#7A7A9D]">To'lanishi kerak summa</span>
              <span class="flex gap-1.5 font-medium text-xl"
                >{{ dashboardForm?.['total_paid'] }}<span class="text-[#B2B7C1]">UZS</span>
              </span>
            </div>
          </div>
        </div>
        <div class="h-[400px] container mx-auto">
          <LineCharts />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import { ApiServices } from '@/service/ApiService.ts'
import LineCharts from '@/components/LineCharts.vue'
const dashboardForm = ref([])

const loadDashboard = async () => {
  try {
    const response = await ApiServices.getDashboard()
    dashboardForm.value = response ? response : null
    console.log(dashboardForm.value)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  loadDashboard()
})
</script>
