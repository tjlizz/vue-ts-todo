import Vue from 'vue'
import Index from "@/Index.vue";
import Login from "@/view/home/Login.vue";
Vue.config.productionTip = false
import HttpRequest from "@/request/HttpRequest";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import  Vuex from  "vuex"
Vue.prototype.$service = HttpRequest;
Vue.use(Vuex)
Vue.use(Element, {size: 'small', zIndex: 3000})
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state: { count: number; }) {
            state.count++
        }
    }
})
new Vue({
    store,
    render: h => h(Login),
}).$mount('#app')
