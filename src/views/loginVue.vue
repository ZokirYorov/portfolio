<template>
  <div class="flex items-center w-full h-full justify-center min-h-screen m-auto flex-col bg-[#F5F5F7]">
    <div class="flex h-8">
      <img src="@/assets/group_title.png" alt="">
    </div>
    <form
      @submit.prevent="saveForm"
      class="w-[380px] mt-12 h-[460px] gap-5 bg-white items-center justify-center p-6 rounded-md shadow-md flex flex-col">
      <h2 class="font-medium text-lg/7">Kirish</h2>
      <div class="flex w-full gap-2 flex-col">
        <label>LOGIN</label>
        <input
          v-model="form.username"
          placeholder="Login kiriting"
          class="bg-[#E0E7FF33] border-[#E0E7FF]-1 px-2 rounded h-10" type="text">
      </div>
      <div class="flex w-full gap-2 flex-col">
        <label class="h-4 flex" for="">PAROL</label>
        <input
          v-model="form.password"
          placeholder="Parol kiriting"
          class="bg-[#E0E7FF33] border-[#E0E7FF]-1 px-2 text-[#2E384D] rounded h-10" type="password">
      </div>
      <div class="flex items-center h-19 justify-between bg-[#FAFAFA] border-[#FAFAFA]-1 p-3 w-full gap-2">
        <div class="flex w-full items-center gap-2">
          <input
            v-model="form.check"
            class="w-4 h-4 border-[#C1C1C1]-2 cursor-pointer" type="checkbox">
          <span>I'm not a robot</span>
        </div>
        <img class="flex w-14 h-14" src="@/assets/captcha.png" alt="">
      </div>
      <p v-if="errorMessage" class="text-red-600 text-sm">{{errorMessage}}</p>
      <button
        type="submit"
        class="flex mt-2 text-white cursor-pointer w-full items-center justify-center bg-[#2E5BFF] h-[50px] rounded"
      >Kirish
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter} from 'vue-router'
import { useAuthStore} from '@/stores/store.ts'
import ApiServices from '@/service/ApiService.ts'
import { ref } from 'vue'
import type { authLogin } from '@/models/projectModel.ts'

const router = useRouter();
const authStore = useAuthStore();

const errorMessage = ref('');

const form = ref<authLogin>({
  username: '',
  password: '',
  check: false
});

const saveForm = async () => {
  if (!form.value.username || !form.value.password) {
    errorMessage.value = "Iltimos, login va parolni kiriting."
    return;
  }
  if (!form.value.check) {
    errorMessage.value = "Iltimos, robit emasligingizni tasdiqlang!"
    return;
  }
  errorMessage.value = "";
  try {
    const response = await ApiServices.login(form.value);
    const token = response?.access || response?.data?.access;
    if (token) {
      authStore.setToken(token)
      alert('Muvaffaqiyatli kirildi!')
      await router.push('/dashboard')
    } else {
      errorMessage.value = 'Login yoki parol noto‘g‘ri.';
    }
  }
  catch (error) {
    errorMessage.value = error.response?.data?.message || "Kirishda xatolik yuz berdi.";
  }
}


</script>
<style>

</style>
