<template>
    <div class="container">
        <h1>Listado de Categorias</h1> 
        
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Code</th>
                <th scope="col">name</th> 
                <th scope="col">descripcion</th>  
            </tr>
            </thead>
            <tbody>
            <tr v-for="(categorie,index) in categories" :key="index">
                <th scope="row">{{ index+1}}</th>                
                <td>{{ categorie.name}}</td>
                <td>{{ categorie.descripcion}}</td>            
                    
            </tr>
            </tbody>


        </table>


    </div>

</template>

<script>
import axios from 'axios'
 

export default {
    name: 'Categorie',
    data(){
        return{
            categories: []
        }
    },
    mounted() { 
    axios
        .get('http://127.0.0.1:8000/api/categories')
        .then(response => (this.categories = response.data.categories))

    },
} 
</script>