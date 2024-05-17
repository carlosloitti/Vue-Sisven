<template>
    <div class="container">
        <h1>Listado de Pay Mode 
        <button @click="newPay()"
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
                <th scope="col">observation</th>  
            </tr>
            </thead>
            <tbody>
            <tr v-for="(pay,index) in pays" :key="index">
                <th scope="row">{{ index+1}}</th>  
                <td>{{ pay.id}}</td>              
                <td>{{ pay.name}}</td>
                <td>{{ pay.observation}}</td>  
                
                
                <button @click="deletePay(pay.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash"/>
                </button>

                <button @click="editPay(pay.id)"
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
    name: 'Pay',
    data(){
        return{
            pays: []
        }
    },

    methods: {

deletePay(codigo) {
    Swal.fire({
    title: `Do you want to delete the pay with id ${codigo}?`,
    showCancelButton: true,
    confirmButtonText: 'Delete',
    }).then((result) => {
     
    if (result.isConfirmed) 
        {
        axios.delete(`http://127.0.0.1:8000/api/pays/${codigo}`)
        .then(response => {
            if (response.data.success){
                Swal.fire('Deleted!! ', '', 'success')
                this.pays = response.data.pays
            }

        })

    } 

})
},


editPay(id) {
this.$router.push({name: 'EditarPay', params: { id: `${id}` }})
},

newPay(){
this.$router.push({name: 'NewPay'});
}
},

    mounted() { 
    axios
        .get('http://127.0.0.1:8000/api/pays')
        .then(response => (this.pays = response.data.pays))

    },
} 
</script>