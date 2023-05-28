<script>

export default {
    name: 'CardProject',
    props: {
        project: Object
    }
}

</script>
 

<template>
    
        <div class="card card_size ">
            <img v-if="project.image" :src="project.image" class="card-img-top img_size" alt="..." >
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text">{{ project.slug }}</p>
            <router-link :to="{ name: 'list', params: { slug: project.slug } }" class="btn btn-primary">
                try it
            </router-link>
        </div>
   
    
</template>



<style lang="scss" scoped>

.img_size {
    width: 100%;
    height: 200px;
}

.card_size{
    height: 350px;
    width: 300px;
}


</style>