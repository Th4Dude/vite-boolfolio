<script>

import axios from 'axios';
export default {
    name: 'DetailPage',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: null
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + '/' + this.$route.params.slug)
                .then((response) => {
                    this.project = response.data.results;
                })
        }
    },
    created() {
        this.getProject();
    }

}

</script>

<template>

    <div class="container">
        <div class="row ">
            <div class="col d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <p class="card-text">{{ project.slug }}</p>
                </div>
            </div>
        </div>
    </div>

</template>


<style></style>
