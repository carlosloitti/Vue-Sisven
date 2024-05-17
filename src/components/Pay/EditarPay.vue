<template>

    <div class="container text-star">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card-header fw-bold">
            Modo de pago
        </div>
        <div class="card-body">
            <form @submit.prevent="updatePay">
    
                <div class="row mb-3">
                    <label for="id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag"/></div> 
                        <input type="text" class="form-control" id="id" placeholder="codigo pay" disabled  
                            v-model='pay.id'
                        >                 
                        </div>                                        
                    </div>
    
                    <div class="row mb-3">
                        <label for="name" class="form-label">Nombre: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="name" placeholder="nombre pay" disabled  
                            v-model='pay.name'
                        >                 
                        </div>
                    </div>
    
                    <div class="row mb-3">
                        <label for="observation" class="form-label">observation: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="descripcion" placeholder="observation pay" disabled  
                            v-model='pay.observation'
                        >                 
                        </div>
                    </div>
     
                   
                    <button class="btn btn-primary" type="submit">Actualizar</button>
                    <button class="btn btn-secondary mx-2" @click="cancelar"> Cancelar </button>
            </form>
        </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios'
    import Swal from 'sweetalert2'
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faBank, faBuilding, faPencil, faPlus, faTag, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    
    export default {
        name: 'EditarPay',
        data(){
            return{
                pays: {
                    id:0,
                    name: '',
                    observation: '',

    
                },
            }
        },
    
        methods: {
    
        cancelar(){
         this.$router.push({name: 'Pays'})
        },
    
        async updatePay(){
            const res = await axios.put(`http://127.0.0.1:8000/api/pays/${this.pays.id}`, this.pay)
    
            if (res.status == 200) {
            this.$router.push({name: 'Pays'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'pay has been updated',
                showConfirmButton: false,
                timer: 2000
                })
    
            }
        }
    },
    
    mounted() {
    
        this.pay.id = this.$route.params.id;
    
        axios.get(`http://127.0.0.1:8000/api/pays/${this.pays.id}`)
    
            .then(response => {
            this.pay = response.data.pay; 
    
    })
    
    },
    
    
    
    }
    
    
    </script>