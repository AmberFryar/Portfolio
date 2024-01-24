
/* TODO: Once Project component is biult out, activate routerlink */
<template>
  <hr>
  <section id='banner'>
    <Socials />
    <router-link id='home' :to="{ name: 'home' }">
      <h1 id="home">Amber Fryar </h1>
    </router-link>
    <div class="dropDownMenu">
      <font-awesome-icon icon="fa-bars" class="menuIcon" @click="toggleDisplayMenu" />
      <div :class="menuLinksClass">
        <router-link id='about' :to="{ name: 'about' }">
          <h4 id="about">About Me</h4>
        </router-link>
        <!-- <router-link id='projects' :to="{ name: 'projects'}"><h4>Projects</h4></router-link> -->
        <a id="projects" href="https://github.com/dix06001/ReadMe">Projects</a>
        <router-link id='experience' :to="{ name: 'experience' }">
          <h4 id="experience">Experience</h4>
        </router-link>
      </div>
    </div>
  </section>
  <hr>
</template>

<script>
import Socials from './Socials.vue';

export default {
  components: {
    Socials
  },
  data() {
    return {
      displayMenu: false
    }
  },
  computed: {
    menuLinksClass() {
      if (this.displayMenu) return 'show';
      return 'menuLinks'
    }
  },
  methods: {
    toggleDisplayMenu() {
      this.displayMenu = !this.displayMenu
    }
  },
}
</script>

<style scoped>    #banner {
      display: grid;
      grid-template-columns: .5fr 2fr 3fr;
      grid-template-areas: "socials home menuLinks";
      align-items: first baseline;
    }

    .menuIcon {
      display: none;
    }

    #home {
      grid-area: home;
      text-decoration: none;
      color: rgb(181 51 137);
      font-weight: bolder;
    }

    .menuLinks {
      grid-area: menuLinks;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: "about projects experience";
      align-items: baseline;
      justify-content: right;
    }

    #about {
      display: flex;
      grid-area: about;
      text-decoration: none;
      color: black;
      font-weight: bold;
      justify-content: center;
    }

    #projects {
      display: flex;
      grid-area: projects;
      text-decoration: none;
      color: black;
      font-weight: bold;
      justify-content: center;
    }

    #experience {
      grid-area: experience;
      text-decoration: none;
      color: black;
      font-weight: bold;
    }

    Socials {
      grid-area: socials;
    }

    h1 {
      text-decoration: none;
    }

    @media only screen and (max-width: 817px) {
      .menuIcon {
        display: block;
        margin-right: 25%;
        margin-left: 75%;
      }

      .dropDownMenu {
        position: relative;
        display: inline-block;
      }

      .menuLinks {
        display: none;
      }

      .show {
        display: block;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }

      .menuIcon:hover .menuLinks {
        display: block;
        justify-content: right;
      }

      #banner {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "socials home menuLinks";
        align-items: center;
        justify-items: stretch;
      }

      #home {
        display: flex;
        justify-content: center;
        text-align: center;
      }
    }</style>