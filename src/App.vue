<script>

import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';


export default {
  name:'App',
  
  components: {

    AppFooter,
    AppHeader,
  }
}

</script>

<template>

    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>

</template>


<style>

</style>
