<template>
    <div class="container">
        <h1>Listado de Productos</h1> 
        <table class="table">
            <thead>
            <tr>
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
                <td>{{ product.name}}</td>
                <td>{{ product.price}}</td>
                <td>{{ product.stock}}</td> 
                <td>{{ product.category_id}}</td>               
                    
            </tr>
            </tbody>

        </table>

    </div>

</template>

<script>
import axios from 'axios'
 

export default {
    name: 'Product',
    data(){
        return{
            products: []
        }
    },
    mounted() { 
    axios
        .get('http://127.0.0.1:8000/api/products')
        .then(response => (this.products = response.data.products))

    },
} 
</script>