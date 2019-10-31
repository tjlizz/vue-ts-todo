import Login from "@/view/home/Login.vue";
import Index from "@/view/home/Index.vue";
 import  Order from   "@/view/order/Index.vue"
const routes: Array<any> = [

    {
        path: '/', name: '/', component: Login
    },
    {
        path: '/home', name: 'home', component: Index,  meta:{name:'啊啊啊'},children: [

            {path: 'order', name: 'order', component:Order,meta:{name:'订单'}}
        ]
    },{
     path: '/system',name: "system",component: Index, meta:{name:'系统管理' },children: [

            {path: 'user',name: 'user',component: User,meta: {name:'用户管理'}}
        ]
    }


]


export default routes