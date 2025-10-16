<template>
  <Sponsor
    :sponsorData="selectedSponsor"
    v-if="visibleSponsorForm"
    @close="visibleSponsorForm = false"
  />
  <div v-else class="flex flex-col w-full">
    <div class="flex flex-col bg-gray-50 h-[88px] w-full">
      <div class="flex w-7xl m-auto pt-5 h-[88px]">
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
                class="w-[180px] cursor-pointer bg-[#3366FF] text-white hover:bg-blue-700 hover:text-white flex justify-center h-full items-center"
                ><router-link to="/sponsors">Homiylar</router-link></span
              >
              <span
                class="w-[180px] cursor-pointer hover:bg-blue-700 hover:text-white rounded-br rounded-tr flex justify-center border-l-2 border-[#E0E7FF] h-full items-center"
                ><router-link to="/students">Talabalar</router-link></span
              >
            </div>
          </div>
          <div class="flex h-full w-[420px] items-center justify-between">
            <div class="flex rounded w-[280px] p-2 gap-2 bg-[#E8E8E8] items-center">
              <img src="@/assets/search.png" alt="" />
              <input class="w-full p-1" type="text" v-model="searchText" placeholder="Izlash (F.I.SH yoki tel raqam)" />
            </div>
            <button
              @click="formVisible()"
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
    <div class="flex flex-col w-7xl m-auto items-center justify-center h-full">
      <div class="flex mt-12 w-full h-full">
        <table class="w-full h-full border-separate border-spacing-y-[12px] pb-5">
          <colgroup>
            <col style="width: 1%" />
            <col style="width: 20%" />
            <col style="width: 16%" />
            <col style="width: 16%" />
            <col style="width: 18%" />
            <col style="width: 14%" />
            <col style="width: 10%" />
            <col style="width: 8%" />
          </colgroup>

          <thead class="bg-gray-100 font-500 text-[#B1B1B8]">
            <tr class="h-10">
              <th class="px-2 text-center">#</th>
              <th class="px-2 text-left">F.I.SH</th>
              <th class="px-2 text-center">TEL RAQAMI</th>
              <th class="px-2 text-center">HOMIYLIK SUMMASI</th>
              <th class="px-2 text-center">SARFLANGAN SUMMA</th>
              <th class="px-2 text-center">SANA</th>
              <th class="px-2 text-center">HOLAT</th>
              <th class="px-2 text-center">AMALLAR</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(sponsor, index) in filteredSponsors"
              :key="index"
              class="bg-white mt-3 rounded-md p-4 hover:bg-gray-50"
            >
              <td class="px-2">{{ index + 1 }}</td>
              <td class="px-2 text-left">{{ sponsor['full_name'] }}</td>
              <td class="px-2 text-center">{{ sponsor.phone }}</td>
              <td class="px-2 flex items-center justify-center gap-2 h-full">
                {{ sponsor['sum'] }}<span class="text-gray-400">UZS</span>
              </td>
              <td class="px-2 text-center gap-2">
                {{ sponsor['spent'] }}<span class="text-gray-400">UZS</span>
              </td>
              <td class="px-2 text-center">{{ formatDate(sponsor['created_at']) }}</td>
              <td :class="['px-2 text-center', sponsorsStatuses[sponsor['get_status_display']]]">
                {{ sponsor['get_status_display'] }}
              </td>
              <td class="px-2 text-center">
                <button type="button" class="cursor-pointer" @click="clickSponsor(sponsor)">
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
        <div class="w-[560px] h-[600px] items-start bg-white rounded-lg flex flex-col p-7 gap-4">
          <div class="flex items-center w-full justify-between">
            <h2 class="font-medium text-xl">Filter</h2>
            <button @click="filterClose()" class="cursor-pointer flex">
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
            <label class="mb-2 font-semibold uppercase" for="status">Ariza holati</label>
            <select
              v-model="selectedStatus"
              id="status"
              class="border rounded-lg bg-[#E0E7FF33] border-[#E0E7FF] p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Barchasi</option>
              <option v-for="(item, index) in sponsorList" :key="index" :value="item">
<!--                {{ item['get_status_display'] }}-->
                {{item['get_status_display']}}
              </option>
            </select>
          </div>
          <div class="w-full flex gap-4 items-start flex-col">
            <h2 class="mb-2 font-semibold uppercase">Homiylik summasi</h2>

            <div class="flex h-full gap-4 w-full">
              <div class="grid grid-cols-4 justify-between items-center w-full gap-3">
                <button
                  :class="selectedSum === 'all' ? 'border-2 border-[#2E5BFF]' : ''"
                  type="button"
                  class="flex relative cursor-pointer items-center justify-center rounded-sm w-[120px] h-13 bg-[#E0E7FF]"
                  @click="selectAll"
                >
                  <img
                    v-if="selectedSum === 'all'"
                    src="@/assets/check.png"
                    alt=""
                    class="absolute top-[-6px] right-[-6px] w-4 h-4"
                  />
                  Barchasi
                </button>
                <button
                  v-for="(item, index) in allMoneys"
                  :key="index"
                  :class="
                    selectedSum === item.id
                      ? 'border-2 border-[#2E5BFF]'
                      : 'border border-[#E0E7FF]'
                  "
                  @click="selectedSum = item.id"
                  class="flex relative cursor-pointer bg-[#FFFFFF] gap-0.5 font-500 items-center justify-center rounded-sm w-[120px] h-13"
                >
                  <img
                    v-if="selectedSum === item.id"
                    src="@/assets/check.png"
                    alt=""
                    class="absolute top-[-6px] right-[-6px] w-4 h-4"
                  />
                  {{ item['summa'] }}<span class="text-[#2E5BFF]">UZS</span>
                </button>
              </div>
            </div>
          </div>
          <div class="w-full flex gap-2 items-start flex-col">
            <h2 class="mb-2 font-semibold uppercase">Sana</h2>
            <input
              v-model="dataInput"
              class="w-[250px] h-[42px] rounded bg-[#E0E7FF33] p-[10px] border border-[#E0E7FF]"
              type="date"
            />
          </div>
          <span class="w-full h-1 bg-[#F5F5F7]"></span>
          <div class="flex items-center gap-4 h-[42px] justify-end w-full">
            <button
              @click="clearAll"
              class="flex text-[#B2B7C1] bg-gray-100 hover:bg-gray-200 cursor-pointer rounded w-[145px] border border-[#B2B7C1] gap-[2px] h-[40px] items-center justify-center px-8 py-2"
            >
              <img src="@/assets/clear.png" alt="" /> Tozalash
            </button>
            <button
              @click="clickFilterVisibleClose"
              type="button"
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
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ApiServices } from '@/service/ApiService.ts'
import Sponsor from '@/components/Sponsor.vue'

const router = useRouter()
const filterVisible = ref(false)
const searchText = ref('')
const selectedStatus = ref('')
const dataInput = ref<string>('')
const visibleSponsorForm = ref(false)

const sponsorList = ref([])
const allMoneys = ref<any[]>([])
const selectedSum = ref<string | number | null>('all')
const selectedSponsor = ref(null)

const sponsorsStatuses: Record<string, string> = {
  Yangi: 'text-[#5BABF2]',
  Moderatsiyada: 'text-[#FFA445]',
  Tasdiqlangan: 'text-[#00CF83]',
  Bekor_qilingan: 'text-[#979797]',
}

const formVisible = () => {
  filterVisible.value = true
}
const filterClose = () => {
  filterVisible.value = false
}

const getSponsorsList = async () => {
  try {
    const response = await ApiServices.getSponsorList()
    sponsorList.value = response?.results ? response?.results : []
  } catch (error) {
    console.log(error)
  }
}

const loadAllMoney = async () => {
  try {
    allMoneys.value = await ApiServices.getAllMoneys()
  } catch (error) {
    console.log(error)
  }
}

const selectAll = () => {
  selectedSum.value = 'all'
}
const selectItem = (id: number) => {
  selectedSum.value = id
}

const clickFilterVisibleClose = () => {
  filterVisible.value = false
}

const clearAll = () => {
  selectedStatus.value = ''
  selectedSum.value = 'all'
  dataInput.value = ''
  searchText.value = ''
}

const formatDate = (isoString: string): string => {
  const date = new Date(isoString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

const clickSponsor = (item) => {
  selectedSponsor.value = item
  visibleSponsorForm.value = true
}

const filteredSponsors = computed(() => {
  return sponsorList.value.filter((item) => {
    const search = searchText.value.trim().toLowerCase()

    const matchesSearch =
      item['full_name'].toLowerCase().includes(search) ||
      item['phone'].includes(search)

    const matchesStatus =
      selectedStatus.value
        ? item['get_status_display'] === selectedStatus.value
        : true

    const matchesSum =
      selectedSum.value === "all"
        ? true
        : item['sum_id'] === selectedSum.value

    const matchesDate = dataInput.value
      ? item['created_at']?.startsWith(dataInput.value)
      : true

    return matchesSearch && matchesStatus && matchesSum && matchesDate
  })
})

onMounted(() => {
  getSponsorsList()
  loadAllMoney()
})
watch( filteredSponsors, (val) => {
  console.log("Filtrlanganlar", val)
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
