<template>
    <NavBanner />
    <section id="experience">
        <div id="technical">
            <Technical />
        </div>
        <div id="professional">
            <Professional />
        </div>
    </section>
</template>

<script setup>
import NavBanner from '../components/NavBanner.vue';
import Technical from '../components/Technical.vue';
import Professional from '../components/Professional.vue';
</script>

<style>
#experience {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

#technical {
    justify-content: center;
}
</style>