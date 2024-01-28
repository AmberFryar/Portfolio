// TODO: GET ICONS
<!-- 
<template>
    <div id="JSON" class="project" @mouseover="hoverIn" @mouseout="hoverOut"
        :style="{ borderWidth: borderWidth1, borderColor: borderColor1 }">
        <div class="imgContainer">
            <img class="imgBW" :style="{ opacity: opacity1 }" :src= "project.imgBW" />
            <img class="imgColor" :src= "project.imgColor" />
        </div>
        <div class="info">
            <h3 class="name"> {{ project.name }} </h3>
             <div class="tech" >  -->
                <!-- <icon icon="fa-brands fa-java" /> -->
                <!-- <icon class="icons" :icon="['fab', 'java']" />
                <icon class="icons" :icon="['fab', 'vuejs']" />
                <icon class="icons" :icon="['fab', 'js-square']" />
                <icon class="icons" :icon="['fas', 'database']" />-->
            <!-- </div> 
            <h4 class="description"> {{ project.description }}</h4>
            <a :href="project.link" target="_blank" :style="{ color: color1 }">
                <icon class="arrow" :icon="['fas', 'arrow-right']" />
                <icon class="GitHub" :icon="['fab', 'square-github']" />
                <icon class="arrow" :icon="['fas', 'arrow-left']" /> </a>
        </div>
    </div>
    <div class="project" @mouseover="hoverIn" @mouseout="hoverOut"
        :style="{ borderWidth: borderWidth1, borderColor: borderColor1 }" id="E-Commerce">
        <div class="imgContainer">
            <img class="imgBW" :style="{ opacity: opacity1 }" src="/src/assets/P_SSG_homepage_BW.png" />
            <img class="imgColor" src="/src/assets/P_SSG_homepage.png" />
        </div>
        <div class="info">
            <h3 class="name">E-Commerce</h3>
            <div class="tech"><icon class="icons" :icon="['fab', 'java']" />
                <icon class="icons" :icon="['fab', 'vuejs']" />
                <icon class="icons" :icon="['fab', 'js-square']" />
                <icon class="icons" :icon="['fas', 'database']" />
            </div>
            <h4 class="description">Full Stack website featuring responsive single page application (SPA) website, user
                authentication, and CRUD API endpoints to manipulate a relational database.</h4>
            <a href="https://github.com/AmberFryar/E-Commerce#e-commerce" target="_blank" :style="{ color: color1 }">
                <icon class="arrow" :icon="['fas', 'arrow-right']" />
                <icon class="GitHub" :icon="['fab', 'square-github']" />
                <icon class="arrow" :icon="['fas', 'arrow-left']" /> </a>
        </div>
    </div>
    <div class="project" @mouseover="hoverIn" @mouseout="hoverOut"
        :style="{ borderWidth: borderWidth2, borderColor: borderColor2 }" id="Catalog">
        <div class="imgContainer">
            <img class="imgColor" src="/src/assets/P_Catalog_search.png" />
            <img class="imgBW" :style="{ opacity: opacity2 }" src="/src/assets/P_Catalog_search_BW.png" />
        </div>
        <div class="info">
            <h3 class="name">Catalog Search</h3>
            <div class="tech"><icon class="icons" :icon="['fab', 'java']" /> </div>
            <h4 class="description"> Command Line Application (CLI) program that allows users to search and display from a
                catalog.</h4>
            <a href="https://github.com/AmberFryar/Catalog-Search#catalog" target="_blank" :style="{ color: color2 }">
                <icon class="arrow" :icon="['fas', 'arrow-right']" />
                <icon class="GitHub" :icon="['fab', 'square-github']" />
                <icon class="arrow" :icon="['fas', 'arrow-left']" /> </a>
        </div>
    </div> -->
    <!-- <div class="project" @mouseover="hoverIn" @mouseout="hoverOut"
        :style="{ borderWidth: borderWidth3, borderColor: borderColor3 }" id="Portfolio">
        <div class="imgContainer">
            <img class="imgColor" src="/src/assets/P_Portfolio.png" />
            <img class="imgBW" :style="{ opacity: opacity3 }" src="/src/assets/P_Portfolio_BW1.png" />
        </div>
        <div class="info">
            <h3 class="name">Portfolio</h3>
            <div class="tech"><icon class="icons" :icon="['fab', 'vuejs']" />
                <icon class="icons" :icon="['fab', 'js-square']" />
            </div>
            <h4 class="description"> Single page application (SPA) that is mobile responsive to effectively display my work.
            </h4>
           
            <a href="https://github.com/AmberFryar/Portfolio#portfolio-website" target="_blank" :style="{ color: color3 }">
                <icon class="arrow" :icon="['fas', 'arrow-right']" />
                <icon class="GitHub" :icon="['fab', 'square-github']" />
                <icon class="arrow" :icon="['fas', 'arrow-left']" /> </a>
        </div>
    </div>
</template>
<script>
import data from '/src/projectData.json';

export default {
    data() {
        return {
            project: data, -->

            <!-- // borderWidth1: "thin",
            // borderColor1: "black",
            // opacity1: 1,
            // color1: "black",

            // borderWidth2: "thin",
            // borderColor2: "black",
            // opacity2: 1,
            // color2: "black",

            // borderWidth3: "thin",
            // borderColor3: "black",
            // opacity3: 1,
            // color3: "black", -->
        <!-- }
    },

    methods: {

        hoverIn() {
            this.borderWidth1 = "medium"
            this.borderColor1 = "rgb(181 51 137)"
            this.opacity1 = 0
            this.color1 = "rgb(181 51 137)"

            this.borderWidth2 = "medium"
            this.borderColor2 = "rgb(181 51 137)"
            this.opacity2 = 0
            this.color2 = "rgb(181 51 137)"

            this.borderWidth3 = "medium"
            this.borderColor3 = "rgb(181 51 137)"
            this.opacity3 = 0
            this.color3 = "rgb(181 51 137)"
        },

        hoverOut() {
            this.borderWidth1 = "thin"
            this.borderColor1 = "black"
            this.opacity1 = "1"
            this.color1 = "black"

            this.borderWidth2 = "thin"
            this.borderColor2 = "black"
            this.opacity2 = "1"
            this.color2 = "black"

            this.borderWidth3 = "thin"
            this.borderColor3 = "black"
            this.opacity3 = "1"
            this.color3 = "black"
        }
    }
}


</script>
<style scoped>
/* .project {
    display: flex;
    border-style: solid;
    border-width: thin;
    width: 80%;
    height: auto;
    border-radius: 15px;
    padding: 5px;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
} */
.project {
    display: grid;
    border-style: solid;
    border-width: thin;
    width: 80%;
    height: auto;
    border-radius: 15px;
    padding: 5px;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
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
    ;
}

.icons {
    margin: 10px;
    height: 18px;
}

.GitHub {
    height: 23px;
}

.arrow {
    margin-bottom: 4px;
}

/* .project:hover {
    border-width: medium;
    border-color: rgb(181 51 137);
} */

/* .imgBW:hover {
    opacity: 0;
} */

@media only screen and (max-width: 821px) {
    .project {
        justify-content: center;
        grid-template-columns: 1fr;
        grid-template-areas:
            "info"
            "imgContainer";
    }

    .imgBW {
        width: fit-content;
    }
}
</style>  -->