<template>
  <div class="flex flex-col items-center w-full h-full">
    <div class="flex bg-gray-50 h-[88px] flex-col w-full">
      <div class="flex items-center w-7xl gap-3 m-auto">
        <button
          class="bg-gray-200 flex cursor-pointer w-10 items-center justify-center h-8 rounded-sm"
          @click="$router.back()"
        >
          <img src="@/assets/arrowLeft.png" alt="" />
        </button>
        <h2 class="font-medium text-2xl">Amonov Ilhom Aliyevich</h2>
        <span
          class="flex items-center justify-center bg-[#DDFFF2] rounded w-[100px] h-[25px] leading-snug p-2 text-[#00CF83]"
          >Tasdiqlangan</span
        >
      </div>
    </div>
    <div class="flex flex-1 justify-center mt-10 h-[260px]">
      <div
        class="flex flex-col h-[260px] items-center justify-between p-8 w-[800px] bg-white rounded-xl shadow"
      >
        <div class="flex flex-col gap-6 w-full">
          <div class="flex items-center justify-between">
            <h2 class="font-semibold text-2xl">Homiy haqida</h2>
            <button
              class="flex text-[#3365FC] bg-[#EDF1FD] rounded w-[165px] h-[42px] cursor-pointer justify-center items-center gap-1"
              @click="clickForm()"
            >
              <img src="@/assets/edit.png" alt="" /> Tahrirlash
            </button>
          </div>
          <div class="flex gap-6 w-full flex-col">
            <div class="flex items-center h-[64px] gap-5">
              <img src="@/assets/person.png" alt="" />
              <span class="font-medium">{{sponsorUpdate}}</span>
            </div>
            <div class="flex items-center justify-between w-[500px] h-[47px]">
              <div class="flex justify-between flex-col w-[147px] h-full">
                <span class="text-[#B5B5C3] font-500 text-sm">TELEFON RAQAM</span>
                <span class="font-medium text-md">+99899 973-72-60</span>
              </div>
              <div class="flex justify-between flex-col w-[147px] h-full">
                <span class="text-[#B5B5C3] font-500 text-sm uppercase">homiylik summasi</span>
                <span class="font-medium text-md"
                  >30 000 000 <span class="uppercase">uzs</span></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-1 items-center justify-center mt-[174px] w-[820px] h-[610px]">
      <img src="@/assets/photoIcon.png" alt="" />
    </div>
    <div
      class="w-full bg-black/50 z-50 fixed inset-0 flex items-center justify-center"
      v-if="editingForm"
      @click.self="editingForm = false"
    >
      <form
        @submit.prevent="formSave"
        class="w-[560px] max-h-[650px] overflow-auto items-start bg-white rounded-lg flex flex-col p-6 gap-5"
      >
        <div class="flex items-center w-full justify-between">
          <h2 class="font-medium text-xl">Tahrirlash</h2>
          <button @click="filterClose()" class="cursor-pointer flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-7 h-7 text-[#B2B7C1] transition-colors duration-300 ease-linear hover:text-red-600"
              viewBox="0 0 640 640"
            >
              <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
              />
            </svg>
          </button>
        </div>
        <span class="w-full h-0.75 bg-[#F5F5F7]"></span>
        <div class="flex items-center h-[40px] w-full">
          <div
            class="flex items-center w-full border rounded-md border-[#E0E7FF] justify-between h-[40px]"
          >
            <button
              class="uppercase flex items-center justify-center h-full cursor-pointer rounded-bl-md rounded-tl-md hover:bg-blue-400 hover:text-white w-full border-[#E0E7FF] font-500"
              @click="setType('phsical')"
              :class="activeType === 'phsical' ? 'bg-[#3366FF] text-white' : 'text-[#3366FF99]'"
            >
              Jismoniy shaxs
            </button>
            <button
              class="uppercase flex items-center justify-center h-full cursor-pointer rounded-br-md rounded-tr-md hover:bg-blue-400 hover:text-white w-full font-500"
              @click="setType('legal')"
              :class="activeType === 'legal' ? 'bg-[#3366FF] text-white' : 'text-[#3366FF99]'"
            >
              Yuridik shaxs
            </button>
          </div>
        </div>
        <div class="flex flex-col w-full h-[64px] gap-2">
          <span class="uppercase text-sm h-[14px] flex font-medium"
            >F.i.sh (Familiya ism sharifingiz)</span
          >
          <input
            type="text"
            placeholder="Amonov Ilhom Aliyevich"
            class="flex px-4 py-3 rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[42px] w-full"
          />
        </div>
        <div class="flex flex-col w-full h-[64px] gap-2">
          <span class="uppercase text-sm h-[14px] flex font-medium">Telefon raqami</span>
          <input
            type="text"
            placeholder="+99899 973-72-60"
            class="flex px-4 py-3 rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[42px] w-full"
          />
        </div>
        <div class="flex flex-col w-full">
          <label class="mb-2 font-medium text-sm uppercase" for="status">Holati</label>
          <select
            id="status"
            class="rounded-lg bg-[#E0E7FF33] border border-[#E0E7FF] p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option v-for="item in menuItems" :key="item.value" :value="item.value">
              {{ item.label }}
            </option>
          </select>
        </div>
        <div class="flex flex-col w-full">
          <label class="mb-2 font-medium text-sm uppercase" for="status">Homiylik summasi</label>
          <select
            id="status"
            class="border rounded-lg bg-[#E0E7FF33] border-[#E0E7FF] p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option v-for="item in sponsorMoney" :key="item.value" :value="item.value">
              {{ item.label }}
            </option>
          </select>
        </div>
        <div class="flex flex-col w-full">
          <label class="mb-2 font-medium text-sm uppercase" for="status">To'lov turi</label>
          <select
            id="status"
            class="border rounded-lg bg-[#E0E7FF33] border-[#E0E7FF] p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option v-for="item in statusPayment" :key="item.value" :value="item.value">
              {{ item.label }}
            </option>
          </select>
        </div>
        <div v-if="activeType === 'legal'" class="flex flex-col w-full h-[64px] gap-2">
          <span class="uppercase h-[14px] text-sm flex font-medium">Tashkilot nomi</span>
          <input
            type="text"
            placeholder="Orient Group"
            class="flex px-4 py-3 rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[42px] w-full"
          />
        </div>
        <span class="w-full h-1 bg-[#F5F5F7]"></span>
        <div class="flex items-center gap-4 h-[40px] justify-end w-full">
          <button
            type="submit"
            class="flex cursor-pointer hover:bg-blue-400 text-white rounded px-8 py-2 gap-[10px] bg-[#3366FF]"
          >
            <img src="@/assets/save.png" alt="" />Saqlash
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ApiServices from '@/service/ApiService.ts'

const emit = defineEmits(['formSave'])
const editingForm = ref(false)
const sponsorUpdate = ref([])

const activeType = ref<'phsical' | 'legal'>('phsical')

const setType = (type: 'phsical' | 'legal') => {
  activeType.value = type
}
const filterClose = () => {
  editingForm.value = false
}

const clickForm = () => {
  editingForm.value = true
}

const sponsorEditForm = async () => {
  const response = await ApiServices.updateSponsor()
  sponsorUpdate.value = response.data

}
const formSave = () => {
  emit('formSave')
}
const menuItems = [
  {
    id: 1,
    label: 'Tasdiqlangan',
    value: 'tasdiqlangan',
  },
  {
    id: 2,
    label: 'Barchasi',
    value: 'barchasi',
  },
  {
    id: 3,
    label: 'Yangi',
    value: 'yangi',
  },
  {
    id: 4,
    label: 'Moderatsiya',
    value: 'moderatsiy',
  },
]

const sponsorMoney = [
  {
    id: 1,
    label: '30 000 000 UZS',
    value: '30 000 000 UZS',
  },
  {
    id: 2,
    label: '50 000 000 UZS',
    value: '50 000 000 UZS',
  },
  {
    id: 3,
    label: '1 000 000 UZS',
    value: '1 000 000 UZS',
  },
  {
    id: 4,
    label: '5 000 000 UZS',
    value: '5 000 000 UZS',
  },
  {
    id: 5,
    label: '7 000 000 UZS',
    value: '7 000 000 UZS',
  },
]

const statusPayment = [
  {
    id: 1,
    label: 'Pul utkazmalari',
    value: 'Pul utkazmalari',
  },
  {
    id: 2,
    label: 'Naqd tulov',
    value: 'Naqd tulov',
  },
  {
    id: 3,
    label: 'Karta orqali',
    value: 'Karta orqali',
  },
]

onMounted(() => {
  sponsorEditForm()
})
</script>
