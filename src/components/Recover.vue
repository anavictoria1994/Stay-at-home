<template>
     <b-container>
         <div class="d-flex justify-content-center">
            <form @submit="onSubmit" class="text-center border border-light p-5" action="#!">
                <div class="d-flex justify-content-center"> 
                    <b-col col lg="2"></b-col>
                    <b-col cols="12" md="auto">
                        <b-form-input v-model="form.email" requiered placeholder="Ingresa tu correo electrónico"></b-form-input>
                        <button class="btn btn-info my-4 btn-block" type="submit">Enviar</button>
                    </b-col>
                    <b-col col lg="2"></b-col>
                </div>    
            </form>
         </div>    
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

.recoverform{
    max-width: 600px;
    padding-top: 15%;
}

</style>