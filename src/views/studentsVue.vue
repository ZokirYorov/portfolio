<template>
  <StudentInfo
    v-if="isEditing"
    :studentData="selectedStudents"
    @save-edits="saveEdits"
    :student-item="studentType"
    @close-form-page="isEditing = false"
  />
  <AddStudent v-else-if="addStudentForm" @close="formAddClose" @studentAdded="submitForm" />
  <div v-else class="flex flex-col h-full w-full">
    <div class="flex flex-col bg-gray-50 h-[88px] w-full">
      <div class="flex w-7xl m-auto pt-5 h-full">
        <div class="flex justify-between w-full h-[40px]">
          <div
            class="flex items-center justify-between w-[540px] rounded border-2 border-[#E0E7FF]"
          >
            <div class="flex items-center w-full h-full text-[#3366FF99]">
              <span
                class="w-[180px] cursor-pointer hover:bg-blue-700 hover:text-white rounded-bl rounded-tl flex justify-center border-r-2 border-[#E0E7FF] items-center h-full"
                ><router-link to="/dashboard">Dashboard</router-link></span
              >
              <span
                class="w-[180px] cursor-pointer hover:bg-blue-700 hover:text-white flex justify-center h-full items-center"
                ><router-link to="/sponsors">Homiylar</router-link></span
              >
              <span
                class="w-[180px] cursor-pointer bg-[#3366FF] text-white hover:bg-blue-700 hover:text-white rounded-br rounded-tr flex justify-center border-l-2 border-[#E0E7FF] h-full items-center"
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
              @click="visibleFilterForm"
            >
              <img src="@/assets/filter.png" alt="" />
              <span class="text-[#3365FC]">Filter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-7xl flex m-auto justify-end my-7 h-[42px]">
      <button
        class="right-10 gap-2.5 flex bg-[#3366FF] hover:bg-blue-700 cursor-pointer w-[190px] items-center justify-center text-white rounded"
        @click="addStudentItem"
      >
        <img class="w-6 h-6" src="@/assets/plus.png" alt="" />
        Talaba qo'shish
      </button>
    </div>
    <div class="flex flex-col w-7xl m-auto items-center justify-center h-full">
      <div class="flex w-full h-full">
        <table class="w-full h-full border-separate border-spacing-y-[12px]">
          <colgroup>
            <col style="width: 2%" />
            <col style="width: 12%" />
            <col style="width: 8%" />
            <col style="width: 14%" />
            <col style="width: 10%" />
            <col style="width: 10%" />
            <col style="width: 8%" />
          </colgroup>

          <thead class="bg-gray-100 font-500 text-[#B1B1B8]">
            <tr class="h-10">
              <th class="px-2 text-center">#</th>
              <th class="px-2 text-left">F.I.SH</th>
              <th class="px-2 text-center">TALABALIK TURI</th>
              <th class="px-2 text-center">OTM</th>
              <th class="px-2 text-center">AJRATILINGAN SUMMA</th>
              <th class="px-2 text-center">KONTRAKT MIQDORI</th>
              <th class="px-2 text-center">AMALLAR</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in getStudentsAll"
              :key="index"
              class="bg-white mt-3 items-center rounded-md p-4 hover:bg-gray-50"
            >
              <td class="px-3">{{ index + 1 }}</td>
              <td class="px-4 py-8 text-sm font-rubik font-medium text-left">{{ item['full_name']}}</td>
              <td class="px-4 py-8 text-sm font-rubik font-medium text-center" >{{ studentType[item.type] }}</td>
              <td class="px-4 py-8 text-sm font-rubik font-medium text-center">{{ item['institute'].name }}</td>
              <td class="px-4 py-8 text-sm font-rubik gap-2 font-medium text-center">
                {{ item[`given`] }}<span class="text-gray-400 ml-2">UZS</span>
              </td>
              <td class="px-4 py-8 text-sm font-rubik font-medium text-center">
                {{ item[`contract`] }}<span class="text-gray-400 ml-2">UZS</span>
              </td>
              <td class="px-2 text-center">
                <button type="button" class="cursor-pointer" @click="studentClick(item)">
                  <img src="@/assets/eye.png" alt="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="w-full bg-black/50 z-50 fixed inset-0 lex flex items-center justify-center"
        v-if="filterVisible"
        @click.self="filterVisible = false"
      >
        <div class="w-[560px] h-[390px] items-start bg-white rounded-lg flex flex-col p-6 gap-6">
          <div class="flex items-center w-full justify-between">
            <h2 class="font-medium text-xl">Filter</h2>
            <button @click="closeFilterForm()" class="cursor-pointer flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-7 h-7 text-[#B2B7C1] transition-colors duration-300 ease-linear hover:text-red-600"
                viewBox="0 0 640 640"
              >
                <path
                  d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                />
              </svg>
            </button>
          </div>
          <span class="w-full h-0.75 bg-[#F5F5F7]"></span>
          <div class="flex flex-col w-full">
            <label class="mb-2 font-semibold uppercase" for="status">Talabalik turi</label>
            <select
              v-model="selectedType"
              id="status"
              class="border rounded-lg bg-[#E0E7FF33] border-[#E0E7FF] p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Barchasi</option>
              <option v-for="(item, index) in getStudentsAll" :key="index">
                {{ studentType[item.type] }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full">
            <label class="mb-2 font-semibold uppercase" for="status">Otm</label>
            <select
              v-model="getInstitute"
              id="status"
              class="border rounded-lg bg-[#E0E7FF33] border-[#E0E7FF] p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Barchasi</option>
              <option v-for="(item, index) in institutesAll" :key="index">
                {{ item.name }}
              </option>
            </select>
          </div>
          <span class="w-full h-1 bg-[#F5F5F7]"></span>
          <div class="flex items-center gap-4 h-[40px] justify-end w-full">
            <button
              class="flex text-[#3366FF] hover:bg-gray-100 cursor-pointer rounded w-[145px] border border-[#3366FF] gap-1 h-[40px] items-center justify-center px-8 py-2"
            >
              <img class="text-[#3366FF]" src="@/assets/clear2.png" alt="" /> Tozalash
            </button>
            <button
              class="flex cursor-pointer text-white rounded px-8 py-2 gap-[10px] hover:bg-blue-400 bg-[#3366FF]"
            >
              <img src="@/assets/eye2.png" alt="" />Natijalarni ko'rish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ApiService from '@/service/ApiService.ts'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import StudentInfo from '@/components/StudentInfo.vue'
import AddStudent from '@/components/AddStudent.vue'
import { useAuthStore } from '@/stores/store.ts'

const authStore = useAuthStore()
const router = useRouter()
const getStudentsAll = ref([])
const filterVisible = ref(false)
const selectedType = ref('')
const getInstitute = ref('')
const isEditing = ref(false)
const selectedStudents = ref(null)
const addStudentForm = ref(false)

const institutesAll = ref([
  {
    id: 0,
    name: '',
  },
])

const studentType: Record<string, string> = {
  1: "Bakalavr",
  2: "Magistr"
}

const submitForm = async (newStudent: object) => {
  getStudentsAll.value.unshift(newStudent)
  addStudentForm.value = false
  isEditing.value = false
  await allStudents()
}

const saveEdits = (updated: any) => {
  const index = getStudentsAll.value.findIndex((s) => s.id === updated.id)
  if (index !== -1) {
    getStudentsAll.value[index] = { ...updated }
    authStore.updateStudents(getStudentsAll.value[index])
  }
    isEditing.value = false
}

const visibleFilterForm = () => {
  filterVisible.value = true
}
const closeFilterForm = () => {
  filterVisible.value = false
}

const formAddClose = () => {
  addStudentForm.value = false
}
const addStudentItem = () => {
  addStudentForm.value = true
}

const studentClick = (student) => {
  selectedStudents.value = student
  isEditing.value = true
}

const allStudents = async () => {
  try {
    const response = await ApiService.getAllStudents()
    getStudentsAll.value = response?.results
  } catch (error) {
    console.log(error)
  }
}

const getInstituteAll = async () => {
  try {
    institutesAll.value = await ApiService.getInstituteList()
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  allStudents()
  getInstituteAll()
  authStore.loadFromStorage()
})
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 12px;
}
tbody tr {
  height: 68px;
  margin-top: 12px;
}
</style>
