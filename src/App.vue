<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import NavBar from './components/NavBar.vue'

</script>

<template>
<NavBar />
  <main>
     <RouterView />
  </main>
</template>

<style scoped>

</style>
