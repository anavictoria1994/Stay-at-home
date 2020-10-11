<template>
  <b-container class="login" id="contenedor1">
    <b-row class="justify-content-md-center" id="principal">
        <b-col col lg="2"></b-col>
        <b-col cols="12" md="auto">
            <div class="panel-body">
                <b-card img-alt="Card image" img-src = '../images/manos.jpg'>
                    <b-card>
                        <b-card-text>
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
                        </b-card-text>
                    </b-card>
                </b-card>   
            </div>    
        </b-col>
        <b-col col lg="2"></b-col>
    </b-row>

  </b-container>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            form: {
                email:'prueba@gmail.com',
                pass:'456'
            }
        }
    },
    methods:{
        async onSubmit(evt){
            evt.preventDefault()
            await axios.post('http://localhost:3000/login', this.form)
            .then(res => {
                console.log(this)
                sessionStorage.setItem('token', res.data.token)
                 window.location.href ='/'})
            .catch(err =>console.log(err));
        
        }
    }


}
</script>

<style>

.login{
    width: 100%;
    height: auto;
    min-width: 438px;
    background-color: #C7FFF5;
    padding: 8%;
}

</style>