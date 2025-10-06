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
        <h2 class="font-medium text-2xl">Talaba qo'shish</h2>
      </div>
    </div>
    <div class="flex flex-1 justify-center mt-10 w-[790px] h-[400px]">
      <div
        class="flex flex-col h-[400px] items-center justify-between p-8 w-full bg-white rounded-xl shadow"
      >
        <div class="flex flex-col gap-6 w-full">
          <div class="flex items-center gap-7 justify-between">
            <div class="w-full flex flex-col h-[64px] gap-2">
              <span class="flex text-sm font-medium uppercase">F.i.sh (Familiya ism sharif)</span>
              <input type="text"
                     placeholder="Familiya ism sharif"
                     class="flex px-4 py-3 rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[40px] w-full"
              />
            </div>
            <div class="w-full h-[64px] flex flex-col gap-2">
              <span class="flex text-sm font-medium uppercase">Telefon raqam</span>
              <input type="number"
                     placeholder="+99890 00 000-00-00"
                     class="flex px-4 py-3 rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[42px] w-full"
              />
            </div>

          </div>
          <div class="w-full flex flex-col gap-2 h-[64px]">
            <span class="font-medium text-sm uppercase text-sm">Otm</span>
            <select
              class="flex px-4 py-3 rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[42px] w-full"
              >
              <option value=""></option>
            </select>
          </div>
          <div class="w-full flex h-[64px] gap-7">
            <div class="w-full h-full flex flex-col gap-2">
              <span class="uppercase font-medium text-sm">Talabalik turi</span>
              <select
                class="flex px-4 py-3 rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[42px] w-full"
              >
                <option value=""></option>
              </select>
            </div>
            <div class="w-full h-full flex flex-col gap-2">
              <span class="uppercase font-medium text-sm">Kontrakt summa</span>
              <input type="number"
                     placeholder="Summani kiriting"
                     class="flex px-4 py-3 rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[42px] w-full"
              />
            </div>
          </div>
          <span class="w-full h-0.75 bg-[#F5F5F7]"></span>
          <div class="w-full justify-end flex">
            <button class="w-[155px] h-[42px] bg-[#3366FF] rounded text-white hover:bg-blue-700 cursor-pointer right-0">+ Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

import { ref } from 'vue'
const emit = defineEmits(["formSave"])
const editingForm = ref(false);

const activeType = ref<'phsical' | 'legal'>('phsical');

const setType = (type: 'phsical' | 'legal') => {
  activeType.value = type
}
const filterClose = () => {
  editingForm.value = false
}

const clickForm = () => {
  editingForm.value = true
}

const formSave = () => {
  emit("formSave", )

}
const menuItems = [
  {
    id: 1,
    label: "Tasdiqlangan",
    value: 'tasdiqlangan',
  },
  {
    id: 2,
    label: "Barchasi",
    value: 'barchasi',
  },
  {
    id: 3,
    label: "Yangi",
    value: 'yangi',
  },
  {
    id: 4,
    label: "Moderatsiya",
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
  }
]

</script>
