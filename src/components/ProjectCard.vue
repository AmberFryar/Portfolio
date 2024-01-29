<template>
  <div class="project" @mouseover="hoverIn" @mouseout="hoverOut" :style="{ borderWidth, borderColor }">
    <div class="imgContainer">
      <img class="imgBW" :style="{ opacity }" :src="`/${project.imgBW}`" />
      <img class="imgColor" :src="`/${project.imgColor}`" />
    </div>
    <div class="info">
      <a :href="project.link" target="_blank">
        <h3 class="name"> {{ project.name }} </h3>
      </a>
      <div class="tech">
        <icon class="icon" v-for="icon in iconTranslations" :key="icon" :icon="icon"> </icon>
      </div>
      <h4 class="description"> {{ project.description }}</h4>
      <a :href="project.link" target="_blank">
        <button :style="{ backgroundColor }">
          <icon id="GitHub" :icon="['fab', 'github']" />
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {},
  },
  data() {
    return {
      borderWidth: "thin",
      borderColor: "black",
      opacity: 1,
      backgroundColor: "white"
    }
  },
  computed: {
    iconTranslations() {
      return this.project.icons.map((iconString) => {
        if (iconString === "Java") return "fa-brands fa-java"
        if (iconString === "Vue") return "fa-brands fa-vuejs"
        if (iconString === "Javascript") return "fa-brands fa-js-square"
        if (iconString === "database") return "fas fa-database"
      })
    }
  },
  methods: {

    hoverIn() {
      this.borderWidth = "medium"
      this.borderColor = "rgb(181 51 137)"
      this.opacity = 0
      this.backgroundColor = "#b5338a82"
    },

    hoverOut() {
      this.borderWidth = "thin"
      this.borderColor = "black"
      this.opacity = "1"
      this.backgroundColor = "white"
    }
  }
}
</script>

<style scoped>
.project {
  display: grid;
  border-style: solid;
  border-width: thin;
  width: 80%;
  height: auto;
  border-radius: 15px;
  padding: 5px;
  margin: auto;
  margin-top: 45px;
  margin-bottom: 60px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "imgContainer info";
}

.name {
  color: #b53389;
}

h3 {
  font-weight: bold;
}

.imgContainer {
  display: flex;
  flex-wrap: wrap;
  grid-area: imgContainer;
  align-content: center;
  justify-content: center;
}

.info {
  grid-area: info;
  margin-right: 1px;
  padding: 8px;
  text-align: center;
}

.imgBW {
  position: absolute;
  height: 120px;
  align-self: center;

}

.imgColor {
  height: 120px;
  align-self: center;
}

a {
  text-decoration: none;
}

.icon {
  margin: 10px;
  height: 18px;
}

button {
  border-width: thin;
  border-radius: 15%;
  width: 50px;
  height: 25px;
}
#GitHub {
  color: black;
}

@media only screen and (max-width: 821px) {
  .project {
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-areas:
      "info"
      "imgContainer";
  }
}
</style>
