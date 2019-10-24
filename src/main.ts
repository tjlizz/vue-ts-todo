import Vue from 'vue'
import Index from "@/Index.vue";

Vue.config.productionTip = false
import HttpRequest from "@/request/HttpRequest";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$service = HttpRequest;
Vue.use(Element, {size: 'small', zIndex: 3000})
new Vue({
    render: h => h(Index),
}).$mount('#app')
