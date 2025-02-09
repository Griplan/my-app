import UserPage from "../views/UserPage.vue";
import HomePage from "../views/HomePage.vue";
import MainPage from "../views/MainPage.vue";
import MallPage from "../views/MallPage.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //主路由
  {
    path: "/",
    component: MainPage,
    redirect: "/home",
    children: [
      { path: "user", component: UserPage },
      { path: "home", component: HomePage },
      { path: "mall", component: MallPage },
      { path: "page1", component: PageOne },
      { path: "page2", component: PageTwo },
    ],
  },
];

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;
