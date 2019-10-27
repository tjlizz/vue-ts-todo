import Login from "@/view/home/Login.vue";
import Index from "@/view/home/Index.vue";
 import  Order from   "@/view/order/Index.vue"
const routes: Array<any> = [

    {
        path: '/', name: '/', component: Login
    },


    {
        path: '/home', name: 'home', component: Index, children: [

            {path: 'order', name: 'order', component:Order}
        ]
    }


]


export default routes