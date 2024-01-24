/* TODO: Once Project component is biult out, activate routerlink */
<template>
    <section class="menuItems">
        <div>
            <router-link id='experience' :to="{ name: 'experience' }">
                <h2>Experience</h2>
            </router-link>
        </div>
        <div>
            <a id="projects" href="https://github.com/AmberFryar/ReadMe">
                <h2>Projects</h2>
            </a>
            <!-- <router-link id='projects' :to="{ name: 'projects'}"> <h2>Projects</h2> </router-link> -->
        </div>
        <div>
            <router-link id='about' :to="{ name: 'about' }">
                <h2>About</h2>
            </router-link>
        </div>

    </section>
</template>

<style scoped>
.menuItems {
    display: flex;
    flex-wrap: wrap;
}

#projects {
    color: rgb(181 51 137);
    text-decoration: none;

}

#experience {
    color: black;
    text-decoration: none;
}

#about {
    color: black;
    text-decoration: none;
}

h2 {
    margin-top: 37%;
    font-weight: bolder;
}

div {

    color: black;
    border-style: solid;
    border-width: thin;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    text-align: center;
    margin: 50px;
}

@media only screen and (max-width: 817px) {
    .menuItems {
        display: block;
    }
}
</style>