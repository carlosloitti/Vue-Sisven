<template>
    <div class="container">
        <h1>Listado de Clientes 
            <button @click="newCliente()"
                    class="btn btn-succes mx-2">
                    <font-awesome-icon icon="plus"/>
                     
            </button>
        </h1> 
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">document_number</th> 
                <th scope="col">first_name</th> 
                <th scope="col">last_name</th> 
                <th scope="col">address</th>  
                <th scope="col">birthday</th>  
                <th scope="col">phone_number</th>  
                <th scope="col">email</th>  
            </tr>
            </thead>
            <tbody>
            <tr v-for="(cliente,index) in clientes" :key="index">
                <th scope="row">{{ index+1}}</th>
                <td>{{ cliente.id}}</td>
                <td>{{ cliente.document_number}}</td>
                <td>{{ cliente.first_name}}</td>
                <td>{{ cliente.last_name}}</td> 
                <td>{{ cliente.address}}</td> 
                <td>{{ cliente.birthday}}</td> 
                <td>{{ cliente.phone_number}}</td> 
                <td>{{ cliente.email}}</td> 
                
                <button @click="deleteCliente(cliente.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash"/>
                </button>

                <button @click="editCliente(cliente.id)"
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
    name: 'Cliente',
    data(){
        return{
            clientes: []
        }
    },

    methods: {

    deleteCliente(codigo) {
    Swal.fire({
    title: `Do you want to delete the cliente with id ${codigo}?`,
    showCancelButton: true,
    confirmButtonText: 'Delete',
    }).then((result) => {
     
    if (result.isConfirmed) 
        {
        axios.delete(`http://127.0.0.1:8000/api/clientes/${codigo}`)
        .then(response => {
            if (response.data.success){
                Swal.fire('Deleted!! ', '', 'success')
                this.clientes = response.data.clientes
            }

        })

    } 

})
},


editCliente(id) {
this.$router.push({name: 'EditarCliente', params: { id: `${id}` }})
},

newCliente(){
this.$router.push({name: 'NewCliente'});
}
},


   

    mounted() { 
    axios
        .get('http://127.0.0.1:8000/api/clientes')
        .then(response => (this.clientes = response.data.clientes))

    },
} 
</script>