<template>
    <section class="menuItems">
        <div>
            <router-link id='experience' :to="{ name: 'experience' }">
                <h2>Experience</h2>
            </router-link>
        </div>
        <div>
            <router-link id='projects' :to="{ name: 'projects' }">
                <h2>Projects</h2>
            </router-link>
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
    display: inline-flex;
    align-items: baseline;
    justify-items: center;
    flex-wrap: wrap;
    margin-bottom: 5%;
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
    margin: 5%;
    font-size:x-large;
    font-weight: bolder;
}

div {
    margin: 50px;
}

@media only screen and (max-width: 817px) {
    .menuItems {
        display: inline-block;
        text-align: center;
    }
}
</style>