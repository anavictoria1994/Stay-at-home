import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-css-only/css/bootstrap.min.css'
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

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: register
        }
    ]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')