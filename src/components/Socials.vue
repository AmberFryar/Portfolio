<template>
    <div>
        <a href="https://github.com/AmberFryar" target="_blank"> <icon :icon="['fab', 'square-github']" /> </a>
        <a href="https://www.linkedin.com/in/amber-fryar/" target="_blank"> <icon :icon="['fab', 'linkedin']" /> </a>
    </div>
</template>
<script>
export default{
    data(){
        return {}
    }
}
</script>
<style scoped>
* {
    color: black;
    text-align: left;
    margin-left: 3px;
    margin-right: 3px;
    height: 18px;
}

a :hover {
    color: rgb(181 51 137);
}
</style>
