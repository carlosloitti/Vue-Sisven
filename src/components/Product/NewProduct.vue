<template>

    <div class="container text-star">
        <h1 class="text-primary fw-bold"> New </h1>
        <div class="card-header fw-bold">
            Producto
        </div>
        <div class="card-body">
            <form @submit.prevent="saveProduct">
    
                <div class="row mb-3">
                    <label for="id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div> 
                        <input type="text" class="form-control" id="id" placeholder="codigo product" disabled  
                            v-model='product.id'
                        >                 
                        </div>                                        
                    </div>
    
                    <div class="row mb-3">
                        <label for="name" class="form-label">Nombre: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="name" placeholder="nombre product" disabled  
                            v-model='product.name'
                        >                 
                        </div>
                    </div>
    
                    <div class="row mb-3">
                        <label for="price" class="form-label">price: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="price" placeholder="price product" disabled  
                            v-model='product.price'
                        >                 
                        </div>
                    </div>
    
    
                    <div class="row mb-3">
                        <label for="stock" class="form-label">stock: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="stock" placeholder="stock product" disabled  
                            v-model='product.stock'
                        >                 
                        </div>
                    </div>
    
    
                    <div class="row mb-3">
                        <label for="category_id" class="form-label">Categorie: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="bank" />  </div>
                            <select class="form-select" v-model="product.category_id">
                                    <option v-for="categorie in categories" v-bind:value="categorie.category_id">{{ categorie.category_id }} </option>
    
                            </select>             
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Save</button>
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
        name: 'EditarProduct',
        data(){
            return{
                products: {
                    id:0,
                    name: '',
                    price: 0,
                    stock: 0,
                    category_id: 0
    
                },
                categories: [],
                category_id:"0"
            }
        },
    
        methods: {
    
        cancelar(){
         this.$router.push({name: 'Products'})
        },
    
        async saveProduct(){
            this.product.id = this.muni_codi
            const res = await axios.put(`http://127.0.0.1:8000/api/products/`, this.product)
            console.log(res);
            if (res.status == 200) {
            this.$router.push({name: 'Products'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product has been saved',
                showConfirmButton: false,
                timer: 2000
                })
    
            }
        }
    },
    
    mounted() {
    
        axios.get(`http://127.0.0.1:8000/api/products/`)
    
            .then(response => {
            this.categories = response.data.categories
    
    })
    
    },
    
    
    
    }
    
    
    </script>