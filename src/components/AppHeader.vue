
<script>

import TypeList from './TypeList.vue';
import TechnologyList from './TechnologyList.vue';

export default {
    name: 'AppHeader',
    components: { TypeList, TechnologyList }
}

</script>
 
<template>
    <div class="background_color d-flex justify-content-between">
        <div class="py-4 d-flex align-items-center justify-content-center px-5">
            <h1><em>Boolfolio</em></h1>
        </div>
        <div class="d-flex align-items-center justify-content-center ">
            <ul class="d-flex">
                <li class="px-5 py-4">
                    <router-link :to="{ name: 'home' }" class="nav-link">
                        <em>Home</em>
                    </router-link>
                </li>
                <li class="px-5 py-4">
                    <router-link :to="{ name: 'about' }" class="nav-link">
                        <em>About</em>
                    </router-link>
                </li>
                <li class="px-5 py-4">
                    <router-link :to="{ name: 'project' }" class="nav-link">
                        <em>Projects</em>
                    </router-link>
                </li>
                <li class="px-5 py-4">
                    <router-link :to="{ name: 'contact' }" class="nav-link">
                        <em>Contacts</em>
                    </router-link>
                </li>
            </ul>
        </div>
        <div>
            <TypeList />        
            <TechnologyList></TechnologyList>
        </div>
            
        
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