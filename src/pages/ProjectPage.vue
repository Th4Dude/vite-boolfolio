<script>

import CardProject from '../components/CardProject.vue';
import axios from 'axios';
export default {
  name: "ProjectPage",

  components: {
    CardProject,
  },

  data() {

    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects: '/projects'
      },
      projects: []
    }

  },
  methods: {

    getProjects() {
      axios.get(this.apiBaseUrl + this.apiUrls.projects).then((response) => {
        this.projects = response.data.results;
        /* console.log(response); */
      }).catch((error) => {
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
    <section>
      <div class="container-fluid background_color">
          <div class="row">
            <div class="col main_box py-4" v-for="project in projects">
              <CardProject :project="project" />
            </div>
          </div>
      </div>
    </section>
</template>

<style scoped>

.background_color{
  background-color: rgb(158, 234, 235);
}


.main_box {
  min-height: 350px;
}



</style>