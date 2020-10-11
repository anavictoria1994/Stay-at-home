import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
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
import axios from 'axios'

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'principal',
            component: mainpage
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/register',
            component: register,
            beforeEnter: (to, from, next) => {
                if (!sessionStorage.getItem('token')) {
                    next({ name: 'login' })
                } else {
                    axios.get('http://localhost:3000/session')
                        .then(res => {
                            if (res.data.user.tipo == 'D') {
                                next()
                            } else {
                                next({ name: 'principal' })
                            }
                        })
                }
            }
        }
    ]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')