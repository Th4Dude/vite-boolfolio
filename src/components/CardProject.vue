<script>

export default {
    name: 'CardProject',
    props: {
        project: Object
    }
}

</script>
 

<template>
    <div class="card" style="width: 18rem;">
        <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <p class="card-text">{{ project.slug }}</p>
        <router-link :to="{ name: 'list', params: { slug: project.slug } }" class="btn btn-primary">
            try it
        </router-link>
    </div>
</template>



<style></style>