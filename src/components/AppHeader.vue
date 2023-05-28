
<script>

export default {
    name: 'AppHeader'
}

</script>
 
<template>
    <div class="background_color d-flex justify-content-center">
        <ul class="d-flex py-4 ">
            <li class="px-5">
                <router-link :to="{ name: 'home' }" class="nav-link">
                    <em>Home</em>
                </router-link>
            </li>
            <li class="px-5">
                <router-link :to="{ name: 'about' }" class="nav-link">
                    <em>About</em>
                </router-link>
            </li>
            <li class="px-5">
                <router-link :to="{ name: 'project' }" class="nav-link">
                    <em>Projects</em>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.background_color {
    background-color: beige;
    width: 100%;
    height: 100px;
}

ul li {
    list-style: none;
    font-size: 1.375rem;
}
</style>