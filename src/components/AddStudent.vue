<template>
  <div class="flex flex-col items-center w-full h-full">
    <div class="flex bg-gray-50 h-[88px] flex-col w-full">
      <div class="flex items-center w-7xl gap-3 m-auto">
        <button
          class="bg-gray-200 hover:bg-gray-300 flex cursor-pointer w-11 items-center justify-center h-8 rounded-sm"
          @click="closeAddForm"
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
        <form
          @submit.prevent="saveForm"
          class="flex flex-col gap-6 w-full">
          <div class="flex items-center gap-7 justify-between">
            <div class="w-full flex flex-col h-[64px] gap-2">
              <span class="flex text-sm font-medium uppercase">F.i.sh (Familiya ism sharif)</span>
              <input
                v-model="form.full_name"
                type="text"
                placeholder="Familiya ism sharif"
                class="flex px-4 py-3 rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[40px] w-full"
              />
            </div>
            <div class="w-full h-[64px] flex flex-col gap-2">
              <span class="flex text-sm font-medium uppercase">Telefon raqam</span>
              <input
                v-model="form.phone"
                type="number"
                placeholder="+99890 00 000-00-00"
                class="flex px-4 py-3 rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[42px] w-full"
              />
            </div>
          </div>
          <div class="w-full flex flex-col gap-2 h-[70px]">
            <span class="font-medium text-sm uppercase text-sm">Otm</span>
            <select
              v-model="form.institute"
              class="flex rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[45px] w-full"
            >
              <option value="" disabled selected class="uppercase">Institutni tanlang</option>
              <option v-for="(item, index) in menuItems" :key="index" :value="item.id">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="w-full flex h-[70px] gap-7">
            <div class="w-full h-full flex flex-col gap-2">
              <span class="uppercase font-medium text-sm">Talabalik turi</span>
              <select
                v-model="form.type"
                class="flex rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[42px] w-full"
              >
                <option value="" disabled>Talaba turini tanlang</option>
                <option :value="item.id" v-for="(item, index) in studentType" :key="index">
                  {{ Number(item.type) }}
                </option>
              </select>
            </div>
            <div class="w-full h-full flex flex-col gap-2">
              <span class="uppercase font-medium text-sm">Kontrakt summa</span>
              <input
                v-model="form.summa"
                type="number"
                placeholder="Summani kiriting"
                class="flex px-4 py-3 rounded-md bg-[#E0E7FF33] border border-[#E0E7FF] h-[42px] w-full"
              />
            </div>
          </div>
          <span class="w-full h-0.75 bg-[#F5F5F7]"></span>
          <div class="w-full justify-end flex">
            <button
              type="submit"
              class="w-[155px] h-[42px] gap-2.5 flex items-center justify-center bg-[#3366FF] rounded text-white hover:bg-blue-700 cursor-pointer right-0"
            >
              <img class="w-6 h-6" src="@/assets/plus.png" alt="" /> Qo'shish
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ApiService from '@/service/ApiService.ts'
import { onMounted, ref } from 'vue'
import type { CreatedStudent } from '@/models/projectModel.ts'

const emit = defineEmits(['studentAdded', 'close'])

const studentType = ref([
  {
    id: 1,
    type: 1,
  },
  {
    id: 2,
    type: 2,
  }
])


const closeAddForm = () => {
  emit('close')
}

const menuItems = ref([
  {
    id: 0,
    name: '',
  },
])

const form = ref<CreatedStudent>({
  id: null,
  full_name: '',
  phone: '',
  institute: null,
  type: null,
  summa: null
});

const saveForm = async () => {
  try {
    const res = await ApiService.createdStudent(form.value)

    emit('studentAdded', res)
    emit('close')

    form.value = {
      id: null,
      full_name: '',
      phone: '',
      institute: null,
      type: null,
      summa: null
    }
  }
  catch (error) {
    console.error(error)
  }
}

const instituteList = async () => {
  try {
    menuItems.value = await ApiService.getInstituteList()
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  instituteList()
})
</script>
