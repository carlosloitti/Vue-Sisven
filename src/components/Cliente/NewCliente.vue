<template>

    <div class="container text-star">
        <h1 class="text-primary fw-bold"> Nuevo</h1>
        <div class="card-header fw-bold">
            Cliente
        </div>
        <div class="card-body">
            <form @submit.prevent="saveCliente">
    
                <div class="row mb-3">
                    <label for="id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag"/></div> 
                        <input type="text" class="form-control" id="id" placeholder="cliente Codigo" disabled  
                            v-model='cliente.id'
                        >                 
                        </div>                                        
                    </div>
    
                    <div class="row mb-3">
                        <label for="document_number" class="form-label">document_number: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="document_number" placeholder="document_number" disabled  
                            v-model='cliente.document_number'
                        >                 
                        </div>
                    </div>
    
                    <div class="row mb-3">
                        <label for=" first_name" class="form-label">first_name: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="first_name" placeholder="first_name" disabled  
                            v-model='cliente.first_name'
                        >                 
                        </div>
                    </div>
    
    
                    <div class="row mb-3">
                        <label for="last_name" class="form-label">last_name: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="last_name" placeholder="last_name" disabled  
                            v-model='cliente.last_name'
                        >                 
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="address" class="form-label">address: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="address" placeholder="address" disabled  
                            v-model='cliente.address'
                        >                 
                        </div>
                    </div>


                    <div class="row mb-3">
                        <label for="birthday" class="form-label">birthday: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="birthday" placeholder="birthday" disabled  
                            v-model='cliente.birthday'
                        >                 
                        </div>
                    </div>


                    <div class="row mb-3">
                        <label for="phone_number" class="form-label">phone_number: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="phone_number" placeholder="phone_number" disabled  
                            v-model='cliente.phone_number'
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
        name: 'EditarCliente',
        data(){
            return{
                products: {                     
                Code: 0, 
                document_number: 0,   
                 first_name: '',  
                last_name : '',
                 address : '', 
                 birthday : '', 
                 phone_number: 0,  
                 email : '',
    
                }, 
            }
        },
    
        methods: {
    
    cancelar(){
     this.$router.push({name: 'Clientes'})
    },

    async saveCliente(){
        this.product.id = this.muni_codi
        const res = await axios.put(`http://127.0.0.1:8000/api/clientes/`, this.cliente)
        console.log(res);
        if (res.status == 200) {
        this.$router.push({name: 'Clientes'})
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'clientes has been saved',
            showConfirmButton: false,
            timer: 2000
            })

        }
    }
},

mounted() {

    axios.get(`http://127.0.0.1:8000/api/clientes/`)

        .then(response => {
        this.clientes = response.data.clientes

})

},



}


</script>