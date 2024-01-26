// TODO: Methods so .projects on hover has all of the highlights/changes.
<template>
    <div class="project" id="E-Commerce">
        <img class="imgColor" src="/src/assets/P_SSG_homepage.png" />
        <img class="imgBW" src="/src/assets/P_SSG_homepage_BW.png" />
        <div class="info">
            <h3 class="name">E-Commerce</h3>
            <h4 class="description">Full Stack website featuring responsive single page application (SPA) website, user authentication, and CRUD API endpoints to manipulate a relational database.</h4>
            <div class="tech"><font-awesome-icon class= "icons" :icon="['fab', 'java']" /> 
                              <font-awesome-icon class= "icons" :icon="['fab', 'vuejs']" /> 
                              <font-awesome-icon class= "icons" :icon="['fab', 'js-square']" /> 
                              <font-awesome-icon class= "icons" :icon="['fas', 'database']" /> </div>
            <a href="https://github.com/AmberFryar/E-Commerce#e-commerce" target="_blank"> 
                <font-awesome-icon class= "arrow" :icon="['fas', 'arrow-right']" /> <font-awesome-icon class= "GitHub" :icon="['fab', 'square-github']" /> <font-awesome-icon class= "arrow" :icon="['fas', 'arrow-left']" /> </a>
        </div>
    </div>
    <div class="project" id="Catalog">
        <img class="imgColor" src="/src/assets/P_Catalog_search.png" />
        <img class="imgBW" src="/src/assets/P_Catalog_search_BW.png" />
        <div class="info">
            <h3 class="name">Catalog Search</h3>
            <h4 class="description"> Command Line Application (CLI) program that allows users to search and display from a catalog.</h4>
            <div class="tech"><font-awesome-icon class= "icons" :icon="['fab', 'java']" /> </div>
            <a href="https://github.com/AmberFryar/Catalog-Search#catalog" target="_blank"> 
                <font-awesome-icon class= "arrow" :icon="['fas', 'arrow-right']" /> <font-awesome-icon class= "GitHub" :icon="['fab', 'square-github']" /> <font-awesome-icon class= "arrow" :icon="['fas', 'arrow-left']" /> </a>
        </div>
        
    </div>
    <div class="project" id="Portfolio">
        <img class="imgColor" src="/src/assets/P_Portfolio.png" />
        <img class="imgBW" src="/src/assets/P_Portfolio_BW1.png" />
        <div class="info">
            <h3 class="name">Portfolio</h3>
            <h4 class="description"> Single page application (SPA) that is mobile responsive to effectively display my work.</h4>
            <div class="tech"><font-awesome-icon class= "icons" :icon="['fab', 'vuejs']" /> 
                              <font-awesome-icon class= "icons" :icon="['fab', 'js-square']" /></div>
            <a href="https://github.com/AmberFryar/Portfolio#portfolio-website" target="_blank">  
                <font-awesome-icon class= "arrow" :icon="['fas', 'arrow-right']" /> <font-awesome-icon class= "GitHub" :icon="['fab', 'square-github']" /> <font-awesome-icon class= "arrow" :icon="['fas', 'arrow-left']" /> </a>
        </div>
        
    </div>
</template>
<script>

</script>
<style scoped>
.project {
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
}

.name {
    color:rgb(181 51 137);
}
h3 {
    font-weight: bold;
}
.project:hover {
    border-width: medium;
    border-color: rgb(181 51 137);
}
.info {
    margin: auto;
    padding: 8px;
    text-align: center;
}
.imgBW {
    position: absolute;
    height: 120px;
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 15px;
}
.imgBW:hover {
    opacity: 0;
}
.imgColor {
    height: 120px;
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 15px;
}

a {
    text-decoration: none;;
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
@media only screen and (max-width: 821px) {
    .project {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .imgBW {
        width:fit-content;
    }
}
</style>