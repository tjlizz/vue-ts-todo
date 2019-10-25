import Vue from 'vue'
import Home from "@/Home.vue";

Vue.config.productionTip = false
import HttpRequest from "@/request/HttpRequest";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
import routes from "@/router/index";

const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
    mode: 'history',
})

Vue.use(VueRouter);

Vue.prototype.$service = HttpRequest;
Vue.use(Element, {size: 'small', zIndex: 3000})
new Vue({
    render: h => h(Home),
    router

}).$mount('#app')
