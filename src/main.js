import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faBank, faBuilding, faPencil, faPlus, faTag, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')
