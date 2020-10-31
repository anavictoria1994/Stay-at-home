<template>
    <b-container>
        <b-row class="justify-content-md-center" id="recoverPass">
            <b-col cols="12" md="auto">
                <form @submit="onSubmit" class="text-center form-control-md p-5" action="#!">
                    <div class="form-row mb-4">
                        <div class="col">
                            <b-form-input v-model="form.email" requiered placeholder="Ingresa tu correo electrónico"></b-form-input>
                        </div>
                    </div>
                    <div class="form-row mb-4">
                        <div class="col">
                            <b-form-input v-model="form.confirmemail" requiered placeholder="Confirma tu correo electrónico"></b-form-input>
                        </div>
                    </div>
                    <div class="form-row mb-4">
                        <div class="col">
                            <b-button class="btn btn-info my-4 btn-block" type="submit">Confirmar</b-button>
                        </div>
                    </div>
                </form>
            </b-col>
        </b-row> 
    </b-container>
</template>

<script>
export default {
    name:'recoverPass',
    data(){
        return{
                form:{
                email:'',
                confirmemail:''
                }
            }
    },
    methods:{
        onSubmit(evt){
        evt.preventDefault()
        console.log(this.form)
        }
    }
}
</script>

<style scoped>

</style>