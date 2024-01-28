//TODO: Clean up methods
<template>
    <div id="JSON" class="project" @mouseover="hoverIn" @mouseout="hoverOut"
        :style="{ borderWidth: borderWidth1, borderColor: borderColor1 }">
        <div class="imgContainer">
            <img class="imgBW" :style="{ opacity: opacity1 }" :src="project.imgBW" />
            <img class="imgColor" :src="project.imgColor" />
        </div>
        <div class="info">
            <h3 class="name"> {{ project.name }} </h3>
            <div class="tech">
                <!-- <icon icon="fa-brands fa-java" /> -->
                <!-- <icon class="icons" :icon="['fab', 'java']" />
                <icon class="icons" :icon="['fab', 'vuejs']" />
                <icon class="icons" :icon="['fab', 'js-square']" />
                <icon class="icons" :icon="['fas', 'database']" /> -->
            </div>
            <h4 class="description"> {{ project.description }}</h4>
            <a :href="project.link" target="_blank" :style="{ color: color1 }">
                <icon class="arrow" :icon="['fas', 'arrow-right']" />
                <icon class="GitHub" :icon="['fab', 'square-github']" />
                <icon class="arrow" :icon="['fas', 'arrow-left']" />
            </a>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        project: {}
    },
    data() {
        return {
            borderWidth1: "thin",
            borderColor1: "black",
            opacity1: 1,
            color1: "black",

            borderWidth2: "thin",
            borderColor2: "black",
            opacity2: 1,
            color2: "black",

            borderWidth3: "thin",
            borderColor3: "black",
            opacity3: 1,
            color3: "black",
        }
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
</style>
