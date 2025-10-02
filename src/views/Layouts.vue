<template>
  <div class="flex flex-col bg-[#F5F5F7]">
    <Header/>
    <div class="flex h-full w-7xl py-10 m-auto container bg-[#F5F5F7]">
      <router-view/>
    </div>
  </div>
</template>


<script setup lang="ts">
import Header from '@/components/Header.vue';

defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layouts',
  components: {
    Header,
  }
})
</script>

<style></style>
