import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import TasksView from '../views/TasksView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'main',
        component: MainView
    },
    {
        path: '/tasks',
        name: 'tasks',
        component: TasksView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router