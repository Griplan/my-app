import UserPage from '../views/UserPage.vue'
import HomePage from '../views/HomePage.vue'
import MainPage from '../views/MainPage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    //主路由
    {
        path: '/',
        component: MainPage,
        children: [
            { path: 'user', component: UserPage },
            { path: 'home', component: HomePage }
        ]
    }

]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})


export default router