import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import demo1 from '../views/Register.vue'
import freestyle from '../views/Freestyle.vue'
import course from '../views/courses.vue'
import image from '../views/Images.vue'
import form from '../views/form.vue'
import Clock from '../views/DemoClock.vue'
import Condition from '../views/Condition.vue'
import Loop from '../views/Loop.vue'
import Hook from '../views/Lifecycle_hook.vue'
import Var from '../views/variable.vue'
import Dom from '../views/Dom.vue'
import Fillter from '../views/Fillter.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/register',
        name: 'demo1',
        component: demo1
    },
    {
        path: '/freestyle',
        name: 'freestyle',
        component: freestyle
    },
    {
        path: '/course',
        name: 'course',
        component: course
    },
    {
        path: '/Image',
        name: 'image',
        component: image
    },
    {
        path: '/form',
        name: 'form',
        component: form
    },
    {
        path: '/Clock',
        name: 'Clock',
        component: Clock
    },
    {
        path: '/Condition',
        name: 'Condition',
        component: Condition
    },
    {
        path: '/Loop',
        name: 'Loop',
        component: Loop
    },
    {
        path: '/Hook',
        name: 'Hook',
        component: Hook
    },
    {
        path: '/var',
        name: 'var',
        component: Var
    },
    {
        path: '/Dom',
        name: 'Dom',
        component: Dom
    },
    {
        path: '/Fillter',
        name: 'Fillter',
        component: Fillter
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router