import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

let router = new Router({
    routes:[
        {
            path:'/login',
            name: 'login',
            component: () => import('@/page/LoginView.vue'),
        },
        {
            path:'/',
            name: 'doctor',
            component: () => import('@/page/DoctorView.vue')
        },

        {
            path:'/people',
            name: 'people',
            component: () => import('@/page/PeopleView.vue')
        },

        {
            path:'/com',
            name: 'com',
            component: () => import('@/page/ComView.vue')
        },

        {
            path:'/search',
            name: 'search',
            component: () => import('@/page/SearchView.vue')
        },

        {
            path:'/diag',
            name: 'diag',
            component: () => import('@/page/DiagView.vue')
        },
    ]
})


export default router
