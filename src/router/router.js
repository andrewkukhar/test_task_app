import Vue from 'vue'
import Router from "vue-router";
import list from "../components/t-users";
import cartlist from "../components/t-cart-users";
import main from "../components/t-wrapper"

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: main,
            props: true
        },
        {
            path: '/list',
            name: 'list',
            component: list,
            props: true
        },
        {
            path: '/cartlist',
            name: 'cartlist',
            component: cartlist,
            props: true
        }
    ],
})
export default router;