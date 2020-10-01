<template>
  <b-container class="bv-example-row" id="contenedor1">
    <b-row class="justify-content-md-center" id="principal">
        <b-col col lg="2"></b-col>
        <b-col cols="12" md="auto">
            <div class="panel-body">
                <mdb-card >
                    <mdb-card-image src="https://cdn.cheapism.com/images/iStock-1134559799.max-420x243.jpg" alt="Card image cap"></mdb-card-image>
                    <mdb-card-body>
                        <form @submit="onSubmit">
                            <p class="h4 text-center mb-4">Inicio de Sesión</p>
                                <div class="grey-text">
                                    <mdb-input label="Correo" icon="envelope" type="email" v-model="form.email"/>

                                    <mdb-input label="Contraseña" icon="lock" type="password" v-model="form.pass"/>
                                </div>
                                <div class="text-center">
                                    <mdb-btn type="submit" color="default">Iniciar Sesión</mdb-btn>
                                </div>
                        </form>        
                    </mdb-card-body>
                </mdb-card>
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
    min-width: 364px;
    background-color: aquamarine;
}

</style>