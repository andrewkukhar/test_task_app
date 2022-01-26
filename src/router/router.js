import VueRouter from "vue-router";
import list from "../components/t-users";
import cartlist from "../components/t-cart-users";

export default new VueRouter({
    routes: [
        {
            path: '',
            name: 'list',
            component: list
        },
        {
            path: '/cartlist',
            name: 'cartlist',
            component: cartlist,
            props: true
        }
    ],
    mode: 'history'
})