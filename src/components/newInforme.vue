<template>
    <b-container>
        <h2 class="titlepage" align="left">Informes</h2>
            <hr>
            <b-row>
                <b-col :xs="12" :lg="6">
                    <form @submit="onSubmit">
                        <div>
                            <div class="form-row mb-4">
                                    <b-form-input
                                        v-model="form.cdeula"
                                        required="este campo es necesario"
                                        placeholder="ingrese la cédula del paciente"
                                        type="number"
                                    >
                                    </b-form-input>
                            </div>
                        </div>
                        <div>
                            <b-form-textarea
                            v-model="form.texto"
                            id="textarea-rows"
                            placeholder="Descripción"
                            rows="8"
                            >
                            </b-form-textarea>
                        </div>
                        <div>
                            <button class="btn btn-primary my-4 btn-block colorbtn" type="submit">
                                Guardar Informe
                            </button>
                        </div>
                    </form>
                </b-col>
                <b-col :xs="12" :lg="6">
                    <img src="../image/reporte.jpg" class="top_image">
                </b-col>
            </b-row>
    </b-container>
</template>
<script>
import { API } from "../api";

export default {
    data(){
        return{
            form: {
                date: '',
                cedula: '',
                texto: ''
            }
        }
    },

    async mounted(){
    
    },

    methods:{

        async onSubmit(evt){
            evt.preventDefault()
            await API.post("paciente/informe/registrar", this.form)
            .then(res => {
                if (res.data){
                    this.$bvToast.toast("Agregado Informe", {
                        title: 'Agregado',
                        autoHidelay: 3000,
                        variant : 'success',
                        solid : true
                    });
                }
            })
            .catch(err =>{
                this.$bvToast.toast('Desconectado del servidor', {
                    title: 'Error',
                    autoHidelay: 3000,
                    variant : 'danger',
                    solid : true
                });
                console.log(err)
            });
        }
    }
}
</script>