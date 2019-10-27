import Vue from 'vue'
import Index from "@/Index.vue";
import Login from "@/view/home/Login.vue";
import Home from "@/Home.vue";

Vue.config.productionTip = false
import HttpRequest from "@/request/HttpRequest";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from "vuex"
import VueRouter from 'vue-router'
import routes from "@/router/index";
import "./font/font"
import StoreModel from "@/model/store";

const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
    mode: 'history',
})
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {count: 0, isLogin: false},
    mutations: {
        increment(state: StoreModel) {
            state.count++
        },
        setLogin(state: StoreModel) {
            state.isLogin = true
            sessionStorage.setItem('isLogin', 'true')
        }
    }
})
// router.beforeEach((to: any, form: any, next: any) => {
//     if (to.name === 'home') {
//         console.log(sessionStorage.getItem("isLogin"))
//         if (sessionStorage.getItem("isLogin")) {
//             console.log(1)
//             return next()
//         } else {
//             console.log(11)
//
//             next('/aa')
//         }
//     } else {
//         next()
//     }
//
// })
Vue.use(VueRouter);

Vue.prototype.$service = HttpRequest;

Vue.use(Element, {size: 'small', zIndex: 3000})

new Vue({
    render: h => h(Home),
    router,
    store,

}).$mount('#app')
