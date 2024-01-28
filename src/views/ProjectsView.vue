
<template>
  <NavBanner />
  <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
</template>

<script >
import NavBanner from '../components/NavBanner.vue';
import ProjectCard from '../components/ProjectCard.vue';
import projectsArray from '/src/projectData.json'

export default {
  components: {
    NavBanner,
    ProjectCard
  },
  data() {
    return {
      projects: projectsArray
    }
  }
}


</script>