import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '@/views/Products.vue'
import Categories from '@/views/Categories.vue'
import EditarProduct from '../components/Product/EditarProduct.vue'
import NewProduct from '../components/Product/NewProduct.vue'
import EditCategorie from '../components/Categorie/EditarCategorie.vue'
import NewCategorie from '../components/Categorie/NewCategorie.vue'
import Clientes from '@/views/Clientes.vue'
import Pay from '@/views/Pay.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },

  {
    path: '/products',
    name: 'Products',
    component: Products
  },

  {
    path: '/editar-product/:id',
    name: 'EditarProduct',
    component: EditarProduct
  },

  {
    path: '/add-product/',
    name: 'NewProduct',
    component: NewProduct
  },




  {
    path: '/editar-categorie/:id',
    name: 'EditarCategorie',
    component:  EditCategorie 
  },

  {
    path: '/add-categorie/',
    name: 'NewCategorie',
    component:  NewCategorie 
  },


  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },

  {
    path: '/pays',
    name: 'Pays',
    component: Pay
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
