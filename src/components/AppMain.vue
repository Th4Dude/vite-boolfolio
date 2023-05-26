<script>

export default{
    name:'AppMain',
    props: {
        data: Object
    }
}

</script>
 

<template>
    
    <div class="container">
        <div class="row">
           <div class="col" v-for="project in data">
                <div class="card" style="width: 18rem;">
                    <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{project.title}}</h5>
                        <p class="card-text">{{project.description}}</p>
                        <p class="card-text">{{project.slug}}</p>
                        <a href="#" class="btn btn-primary">Don't try this at home!</a>
                    </div>
                </div>
           </div>  
        </div>
    </div>

</template>



<style>

</style>