<template>
  <div id="app" color="#21B295">
    <b-navbar class="navegacion" toggleable="lg" type="dark">
    <div class="container">
    <b-navbar-brand href="/">
      Stay At Home
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="login">
        <b-nav-item ><router-link class="nav-link active" to = '/' > Inicio</router-link></b-nav-item>
        <b-nav-item href="#"><router-link  class="nav-link active item-options selection" to= '/historia-clinica'>Historia Clínica</router-link></b-nav-item>
        <b-nav-item href="#" ><router-link  class="nav-link active" to= '/localization'>Tu ubicación</router-link></b-nav-item>
        <b-nav-item href="#" v-if="tipo=='D'"><router-link  class="nav-link active" to= '/informes'>Informes</router-link></b-nav-item>
        <b-nav-item href="#" v-if="tipo=='D'"><router-link  class="nav-link active" to= '/pacientes'>Pacientes</router-link></b-nav-item>
        <b-nav-item href="#" v-if="tipo=='D'"><router-link  class="nav-link active" to= '/register'>Registrar</router-link></b-nav-item>
        <b-nav-item href="#" ><router-link  class="nav-link active" to= '/chat'>Chat</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="!login">
        <b-nav-item >Sobre nosotros </b-nav-item>
        <b-nav-item >Sobre febe </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
      
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>{{ user }} </em>
          </template>
          <div v-if="!login">
            <b-dropdown-item><router-link to= '/login'>Login</router-link></b-dropdown-item>
          </div>
          <div v-if="login">
            <b-dropdown-item href="#">Perfil</b-dropdown-item>
            <b-dropdown-item v-on:click = "logout">Salir</b-dropdown-item>
          </div>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
   <router-view></router-view>
  </div>
</template>

<script>

import { API } from './api'
export default {
  inheritAttrs: true,
  name: 'App',
  data(){
    return({
      user : 'Usuario',
      login: false,
      tipo: 'P'
    })
  },
  mounted(){
    try{
      if (sessionStorage.getItem('token')){
        API.post('session', {"token": sessionStorage.getItem('token')})
            .then(res => {
                  this.login = true
                  this.user = res.data.user.nombres;
                  this.tipo = res.data.user.tipo;
                
              })
              .catch(err => console.log(err));
        }
    }catch(e){
      window.location.href = process.env.BASE_URL
    }
  },
  methods: {
    logout(){
      API.get('/logout')
        .then(res => {
            if(res.data.session!= null && !res.data.session){
            sessionStorage.removeItem('token')
            this.login = false
            console.log(process.env.BASE_URL)
            window.location.href = process.env.BASE_URL
            }
            })
        .catch(err => console.log(err));
    }
  }
} 

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navegacion{
  background-color: #20BEC1;
}

.nav-link{
  font: Arial;
}

.item-options:after {
    content: '';
    display: block;
    width: 0px;
    height: 2px;
    transition: width .3s;
}
.item-options:hover::after {
    background-color: #fff;
    width: 100%;
}
.selection:active{
  background-color: #2c3e50;
}
</style>
