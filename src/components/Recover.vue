<template id="recover" class="recover-body">
    <b-container class="recover-content"> 
        <b-row class="justify-content-md-center" id="recover">
            <b-col col lg="2"></b-col>
                <b-col cols="12" md="auto">
                    <form @submit="onSubmit" class="text-center form-control-md p-5" action="#!">
                        <div class="form-row mb-4">
                            <div class="col">
                                <h6>   Enviaremos un enlace a tu correo para que recuperes tu contraseña   </h6>
                            </div>
                        </div>
                        <div class="form-row mb-4">
                            <div class="col">
                                <b-form-input v-model="form.email" requiered placeholder="Ingresa tu correo electrónico"></b-form-input>
                                <button class="btn btn-info my-4 btn-block" type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </b-col>
            <b-col col lg="2"></b-col>
        </b-row>   
    </b-container>
</template>

<script>
    export default{
        name: 'recover',
        data(){
            return{
                form:{
                email:''
                }
            }
        }
    }

</script>

<style>
.recover-content{
    width: 100%;
    height: 100%;
}
</style>