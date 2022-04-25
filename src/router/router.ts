import {createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Testimonial from '../pages/Testimonial.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/testimonial',
        name: 'Testimonial',
        component: Testimonial
    }
];

const router = createRouter({
        history: createWebHistory(),
        routes
   })

   export default router;

