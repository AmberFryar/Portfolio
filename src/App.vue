<template>
  <header>

  </header>
  <main>
    <RouterView />
  </main>
  <hr>
  <footer>
    <AppFooter />
    <Socials />
  </footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import Socials from './components/Socials.vue';

</script>

<style >
footer {
  display: inline-flex;
}
</style>                                                                                                                  
