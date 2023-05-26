
<script>

export default {
    name: 'AppHeader'
}

</script>
 
<template>
    <div>
        <ul>
            <li>
            <router-link :to="{ name: 'home' }" class="nav-link">
                Home
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'about' }" class="nav-link">
                About
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'project' }" class="nav-link">
                Projects
            </router-link>
        </li>


    </ul>
       

    </div>
</template>

<style></style>