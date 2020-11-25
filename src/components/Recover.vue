<template id="recover" class="recover-body">
    <b-container class="recover-content"> 
        <b-row class="justify-content-md-center" id="recover">
            <b-col col lg="2"></b-col>
                <b-col cols="12" md="auto">
                    <form @submit="onSubmit" class="text-center form-control-md p-5" action="#!">
                        <div class="form-row mb-4">
                            <div class="col">
                                <h6> Enviaremos un enlace a tu correo para que recuperes tu contraseña   </h6>
                            </div>
                        </div>
                        <div class="form-row mb-4">
                            <div class="col">
                                <b-form-input v-model="form.email" requiered placeholder="Ingresa tu correo electrónico"></b-form-input>
                               
                                <b-button id="show-btn" @click="$bvModal.show('modal-confirm')" class="btn btn-info my-4 btn-block" type="submit">Enviar</b-button>
                                <b-modal id="modal-confirm" hide-footer>
                                    <template #modal-title>
                                        Confirmación
                                    </template>
                                    <div class="d-block text-center">
                                        <h3>Hemos enviado un correo con el enlace de recuperación</h3>
                                    </div>
                                    <b-button class="mt-3" block @click="$bvModal.hide('modal-confirm')">Cerrar</b-button>
                                </b-modal>
                                    
                            </div>
                        </div>
                    </form>
                </b-col>
            <b-col col lg="2"></b-col>
        </b-row>   
    </b-container>
</template>

<script>
import {API} from '../api'

    export default{
        name: 'recover',
        data(){
            return{
                form:{
                email:''
                }
            }
        },
        methods:{
            async onSubmit(evt){
                evt.preventDefault()
                await API.post('recoverpass', this.form)
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })

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