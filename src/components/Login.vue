<template>
  <b-container class="login-view" id="contenedor1">
    <b-row class="justify-content-md-center" id="principal">
        <b-col col lg="2"></b-col>
        <b-col cols="12" md="auto">
            <div class="panel-body">
                <b-card img-alt="Card image" img-top>
                        <img src="../images/manos.jpg">
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
export default {
    data(){
        return{
            form: {
                email:'',
                pass:''
            }
        }
    },
    methods:{
        onSubmit(evt){
            evt.preventDefault()
            console.log(JSON.stringify(this.form))
        }
    }


}
</script>

<style>

body{
    padding-top: 5%;
    min-width: 438px;
    background-color: #C7FFF5;
    padding-bottom: 5%;
}

</style>