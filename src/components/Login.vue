<template>
  <b-container class="login bv-example-row" id="contenedor1">
    <b-row class="justify-content-md-center" id="principal">
        <b-col col lg="2"></b-col>
        <b-col cols="12" md="auto">
            <div class="panel-body">
                <b-card img-alt="Card image" img-top>
                    <img src="../images/manos.jpg">
                    <b-card-text>
                        <b-form @submit="onSubmit">
                            <div class="col">
                                <label></label>
                                <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                            </div>
                            <div class="col">
                                <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
                            </div>
                            <b-button type="submit">Entrar</b-button>
                        </b-form>
                    </b-card-text>
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
    padding: 8%;
    background-color: #C7FFF5;
}

</style>