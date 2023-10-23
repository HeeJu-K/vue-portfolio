import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = Vue.createApp({})


app.use(router)

app.mount('#app')
