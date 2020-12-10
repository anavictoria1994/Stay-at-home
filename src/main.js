import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueSocketIO from 'vue-socket.io'
import { API } from './api'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueChatScroll from 'vue-chat-scroll'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueChatScroll)
console.log(API.base_url)
Vue.use(new VueSocketIO({
    debug: true,
    connection: process.env.NODE_ENV === 'production' ?
        'https://stay-at-home-back.herokuapp.com/' : 'http://localhost:3000/'
}))


//MODULOS
import login from './components/Login.vue'
import register from './components/Register.vue'
import mainpage from './components/main-page.vue'
import recover from './components/Recover.vue'
import informes from './components/Informes.vue'
import clinicalHistory from './components/Historia-Clinica.vue'
import localization from './components/Localization.vue'
import chat from './components/Chat.vue'
import pacientes from './components/Pacientes.vue'
import recoverPass from './components/recoverPass.vue'
import newInforme from './components/newInforme.vue'
import autodiagnostic from './components/Autodiagnostic.vue'
import analisis from './components/Analisis.vue'
import preguntas from './components/Preguntas.vue'
import mitos from './components/Mitos.vue'
import covid19 from './components/Covid19.vue'

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
            path: '/covid19',
            name: 'covid19',
            component: covid19,
        },

        {
            path: '/mitos',
            name: 'mitos',
            component: mitos,
        },

        {
            path: '/analisis',
            name: 'analisis',
            component: analisis
        },

        {
            path: '/preguntas',
            name: 'preguntas',
            component: preguntas,
        },

        {
            path: '/newInforme',
            name: 'newInforme',
            component: newInforme,
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
            path: '/informes',
            name: 'informes',
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
            path: '/autodiagnostic',
            name: 'autodiagnostic',
            component: autodiagnostic,
        },

        {
            path: '/pacientes',
            component: pacientes,
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
        },
        {
            path: '/recoverPass',
            name: 'recuperacion',
            component: recoverPass
        }
    ]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')