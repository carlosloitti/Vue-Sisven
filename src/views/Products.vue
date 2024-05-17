<template>
    <div class="container">
        <h1>Listado de Productos 
            <button @click="newProduct()"
                    class="btn btn-succes mx-2">
                    <font-awesome-icon icon="plus"/>
                     
            </button>
        </h1> 
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">name</th> 
                <th scope="col">precio</th> 
                <th scope="col">stock</th> 
                <th scope="col">categoria</th>  
            </tr>
            </thead>
            <tbody>
            <tr v-for="(product,index) in products" :key="index">
                <th scope="row">{{ index+1}}</th>
                <td>{{ product.id}}</td>
                <td>{{ product.name}}</td>
                <td>{{ product.price}}</td>
                <td>{{ product.stock}}</td> 
                <td>{{ product.category_id}}</td> 
                
                <button @click="deleteProduct(product.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash"/>
                </button>

                <button @click="editProduct(product.id)"
                    class="btn btn-warning mx-2">
                    <font-awesome-icon icon="pencil"/>
                </button>

                    
            </tr>
            </tbody>

        </table>

    </div>

</template>

<script>
 
import axios from 'axios'
import Swal from 'sweetalert2' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 

export default {
    name: 'Product',
    data(){
        return{
            products: []
        }
    },

    methods: {

deleteProduct(codigo) {
    Swal.fire({
    title: `Do you want to delete the Product with id ${codigo}?`,
    showCancelButton: true,
    confirmButtonText: 'Delete',
    }).then((result) => {
     
    if (result.isConfirmed) 
        {
        axios.delete(`http://127.0.0.1:8000/api/products/${codigo}`)
        .then(response => {
            if (response.data.success){
                Swal.fire('Deleted!! ', '', 'success')
                this.products = response.data.products
            }

        })

    } 

})
},


editProduct(id) {
this.$router.push({name: 'EditarProduct', params: { id: `${id}` }})
},

newProduct(){
this.$router.push({name: 'NewProduct'});
}
},


   

    mounted() { 
    axios
        .get('http://127.0.0.1:8000/api/products')
        .then(response => (this.products = response.data.products))

    },
} 
</script>