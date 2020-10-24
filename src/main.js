import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { API } from './api'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueResource)
Vue.use(VueRouter)


//MODULOS
import login from './components/Login.vue'
import register from './components/Register.vue'
import mainpage from './components/main-page.vue'
import recover from './components/Recover.vue'
import informes from './components/Informes.vue'
import clinicalHistory from './components/Historia-Clinica.vue'
import localization from './components/Localization.vue'
import chat from './components/Chat.vue'

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'main',
            component: mainpage,
        },

        {
            path: '/login',
            name: 'login',
            component: login,
        },

        {
            path: '/informes',
            name: 'informes',
            component: informes,
        },

        {
            path: '/historia-clinica',
            name: 'historia-clinica',
            component: clinicalHistory,
        },

        {
            path: '/localization',
            name: 'localization',
            component: localization,
        },

        {
            path: '/register',
            component: register,
            beforeEnter: (to, from, next) => {
                if (!sessionStorage.getItem('token')) {
                    next({ name: 'login' })
                } else {
                    API.post('session', { token: sessionStorage.getItem('token') })
                        .then(res => {
                            console.log(res)
                            if (res.data.user.tipo === 'D') {
                                next()
                            } else {
                                next({ name: 'main' })
                            }
                        })
                }
            }
        },
        {
            path: '/recover',
            name: 'recover',
            component: recover,
        },

        {
            path: '/informes',
            component: informes,
            beforeEnter: (to, from, next) => {
                if (!sessionStorage.getItem('token')) {
                    next({ name: 'login' })
                } else {
                    API.post('session', { token: sessionStorage.getItem('token') })
                        .then(res => {
                            console.log(res)
                            if (res.data.user.tipo === 'D') {
                                next()
                            } else {
                                next({ name: 'main' })
                            }
                        })
                }
            }
        },

        {
            path: '/chat',
            name: 'chat',
            component: chat,
        }
    ]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')