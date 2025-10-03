<template>
  <div class="flex flex-col min-h-screen bg-[#F5F5F7]">
    <Header/>
    <div class="flex h-full min-h-screen w-full">
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
