import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './views/Home.vue';
import AboutComponent from './views/About.vue';
import AnimatedNavbar from './components/AnimatedNavbar.vue';

import App from './App.vue'

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.component('AnimatedNavbar', AnimatedNavbar);
app.mount('#app')
