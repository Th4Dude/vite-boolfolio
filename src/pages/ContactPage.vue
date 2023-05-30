<script>

import axios from 'axios';
import store from '../store';


export default {
    name: 'ContactPage',
    data(){
        return {
           store,
           formData : {
            name: '',
            email: '',
            message: ''
           } 
        }
    },
    methods: {
            sendContact(){
                const data = {
                    name: this.formData.name,
                    email: this.formData.email,
                    message: this.formData.message,
                };
                axios.post(`$this.store.apiBaseUrl}/contacts`, data)
                .then((response)=> {
                    console.log(response);
                }).catch (( error )=> {
                    console.log(error);
            });
        }
    }
}

</script>

<template>

    <form @submit.prevent="sendContact">

        <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name"  placeholder="Name and surname" v-model="formData.name">
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email"  placeholder="name@example.com" v-model="formData.email">
    </div>
    <div class="mb-3">
        <label for="message" class="form-label">Example textarea</label>
        <textarea class="form-control" id="message" rows="3" v-model="formData.message"></textarea>
    </div>
        <button type="button" class="btn btn-secondary">Send</button>
    
    </form>
    

</template>


<style>



</style>