<template>
    <div class="container">
        <h1>Listado de Categorias 
        <button @click="newCategorie()"
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
                <th scope="col">descripcion</th>  
            </tr>
            </thead>
            <tbody>
            <tr v-for="(categorie,index) in categories" :key="index">
                <th scope="row">{{ index+1}}</th>  
                <td>{{ categorie.id}}</td>              
                <td>{{ categorie.name}}</td>
                <td>{{ categorie.descripcion}}</td>  
                
                
                <button @click="deleteCategorie(categorie.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash"/>
                </button>

                <button @click="editCategorie(categorie.id)"
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
 

export default {
    name: 'Categorie',
    data(){
        return{
            categories: []
        }
    },

    methods: {

deleteCategorie(codigo) {
    Swal.fire({
    title: `Do you want to delete the categorie with id ${codigo}?`,
    showCancelButton: true,
    confirmButtonText: 'Delete',
    }).then((result) => {
     
    if (result.isConfirmed) 
        {
        axios.delete(`http://127.0.0.1:8000/api/categories/${codigo}`)
        .then(response => {
            if (response.data.success){
                Swal.fire('Deleted!! ', '', 'success')
                this.categories = response.data.categories
            }

        })

    } 

})
},


editCategorie(id) {
this.$router.push({name: 'EditarCategorie', params: { id: `${id}` }})
},

newCategorie(){
this.$router.push({name: 'NewProduct'});
}
},

    mounted() { 
    axios
        .get('http://127.0.0.1:8000/api/categories')
        .then(response => (this.categories = response.data.categories))

    },
} 
</script>