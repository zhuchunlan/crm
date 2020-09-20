import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import info from '../components/info/info.vue'
import mgr from '../components/mgr/mgr.vue'

Vue.use(Router)




const routes=[
    {
        path:'/',
        component:index
    },
    {
        path:'/info',
        component:info
    },
    {
        path:'/mgr',
        component:mgr
    }
]

export default new Router({
    routes
})