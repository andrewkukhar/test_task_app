import VueRouter from "vue-router";
import users from "@/components/t-users";
import cartUsers from "@/components/t-cart-users";
let router = new VueRouter({
    routes: [
        {
            path: '/src/components/t-users.vue',
            name: 'users',
            component: users,
            props: true
        },
        {
            path: '/src/components/t-cart-users.vue',
            name: 'seluser',
            component: cartUsers,
            props: true
        }
    ]
})

export default router;