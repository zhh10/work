import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) 
const routes = [
  {
    path:'/',
    name:'home',
    component: resolve => (require(['@/view/home.vue'], resolve))
  },{
    path:'/classicCase/:user',
    name:'classicCase',
    component: resolve => (require(['@/view/classicCase.vue'],resolve))
  },
  {
    path:'/Research/:name',
    name:'Research',
    component: resolve => (require(['@/view/Research.vue'],resolve))
  },{
    path:'/software/:id?',
    name:'software',
    component: resolve => (require(['@/view/software.vue'],resolve))
  },{
    path:'/showCenter',
    name:'showCenter',
    component: resolve => (require(['@/view/showCenter'],resolve))
  }
]


const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,form){
    return {x:0,y:0}
  }
})

router.beforeEach((to,from,next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

export default router