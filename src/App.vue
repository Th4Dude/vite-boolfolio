<script>

import axios from 'axios';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name:'App',
  data() {

    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects:'/projects'
      },
      projects: []
    }

  },
  components: {

    AppFooter,
    AppHeader,
    AppMain,

  },
  methods: {

      getProjects(){
        axios.get(this.apiBaseUrl + this.apiUrls.projects).then((response)=>{
          this.projects = response.data.results;
          /* console.log(response); */
        }).catch((error)=>{
          console.log(error);
        })
      }
  },
  created() {
    this.getProjects();
  }
}

</script>

<template>

    <AppHeader></AppHeader>
    <AppMain :data="projects" />
    <AppFooter></AppFooter>

</template>


<style>

</style>
