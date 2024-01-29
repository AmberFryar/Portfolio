<template>
  <main>
    <div>
      <img id="logo" src="../assets/Name.png" />
    </div>
    <section class="projects">
      <Menu />
    </section>
  </main>
</template>

<script setup>
import Menu from '../components/Menu.vue';
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}

#logo {
  margin: 10%;
  width: 400px;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-evenly;
}

@media only screen and (max-width: 817px) {
  #logo {
    width: 75%;
  }
}
</style>