import {createRouter} from "vue-router";
import {createWebHashHistory} from "vue-router";

//路由页面

import README from '@/components/element/README.vue'
//  README
import Button from '@/components/element/Button按钮.vue'
//  Button按钮
import Border from '@/components/element/Border边框.vue'
//  Border边框

const routes=[
    {path:'/',component: README},
    {path: '/README',component:README},
    {path: '/Button',component: Button},
    {path: '/Border',component: Border}
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router