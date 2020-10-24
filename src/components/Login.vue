<template>
  <b-container class="login" id="contenedor1">
    <b-row class="justify-content-md-center" id="principal">
        <b-col col lg="2"></b-col>
        <b-col cols="12" md="auto">
            <div class="panel-body">
                <b-card img-alt="Card image" img-src = '../image/manos.jpg'>
                                <form @submit="onSubmit">
                                    <div class="form-row mb-4">
                                        <div class="col">
                                            <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Correo"></b-form-input>
                                        </div>
                                    </div>
                                    <div class="form-row mb-4">
                                        <div class="col">
                                            <b-form-input type="password" id="imputPass" v-model="form.pass" required placeholder="Contraseña"></b-form-input>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <b-button variant="info" type="submit">Iniciar Sesión</b-button>
                                    </div>
                                </form>
                </b-card>   
            </div>    
        </b-col>
        <b-col col lg="2"></b-col>
    </b-row>

  </b-container>
</template>

<script>
import { API } from '../api'
export default {
    data(){
        return{
            form: {
                email:'prueba@gmail.com',
                pass:'456'
            },
        }
    },
    methods:{
        async onSubmit(evt){
            evt.preventDefault()
            await API.post('login', this.form)
            .then(res => {
                if(res.data.token){
                    if (!sessionStorage.getItem('token')){
                        sessionStorage.setItem('token', res.data.token)
                        window.location.href = process.env.BASE_URL
                    }
                }else{
                    this.$bvToast.toast(res.data.msg, {
                        title: 'Error',
                        autoHidelay: 3000,
                        variant : 'danger',
                        solid : true
            });
                }
            })
            .catch(e => {
                this.$bvToast.toast('Desconectado del servidor', {
                        title: 'Error',
                        autoHidelay: 3000,
                        variant : 'danger',
                        solid : true
                });
                console.log(e)
                });
        },
    }
}
</script>

<style>

.login{
    width: 100%;
    height: auto;
    background-color: white;
    padding: 5%;
}

</style>