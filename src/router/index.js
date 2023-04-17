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

    ]
})


export default router
