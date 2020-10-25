<template>
    <div class="register">
        <b-container class="contenedor1">
                    <div class="d-flex justify-content-center">
                        <form @submit="onSubmit" class="text-center border border-light p-5" action="#!">
                            <div class="img_container">
                                <img src="../image/wash.jpg" class="top_image">
                            </div>
                            <b-card>
                                <div class="form-row mb-4">
                                    <div class="col">
                                        <!-- Nombre -->
                                        <input type="text" v-model="form.nombres" id="RegisterFormFirstName" class="form-control" placeholder="Nombres">
                                    </div>
                                    <div class="col">
                                        <!--Apellido -->
                                        <input type="text" v-model="form.apellidos" id="RegisterFormLastName" class="form-control" placeholder="Apellidos">
                                    </div>
                                </div>
                                <div class="form-row mb-4">
                                    <div class="col">
                                        <!-- Cédula -->
                                        <input type="number" v-model="form.cedula" id="RegisterFormIdNumber" class="form-control" placeholder="Número de identificación">
                                        <b-form-invalid-feedback id="input-live-feedback"> Este campo es obligatorio </b-form-invalid-feedback>
                                    </div>
                                    <div class="col">
                                        <!-- Fecha Nac -->
                                        <input type="date" v-model="form.fecha_nacimiento" id="RegisterFormBirthDate" class="form-control" placeholder="Fecha de Nacimiento">
                                    </div>
                                </div>
                                <div class="form-row mb-4">
                                    <div class="col">
                                    <!-- Teléfono -->
                                        <input type="number" v-model="form.telefono"  id="RegisterFormPhoneNumber" class="form-control" placeholder="Número de teléfono">
                                    </div>
                                    <div class="col">
                                    <!--Direccion -->
                                    <input type="text" v-model="form.direccion"  id="RegisterFormAdress" class="form-control" placeholder="Dirección">
                                    </div>
                                </div>
                                <div class="form-row mb-4">
                                    <div class="col">
                                        <input type="email" v-model="form.email"  id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="Correo">
                                    </div>
                                    <div class="col">
                                        <input type="password" v-model="form.pass"  id="defaultRegisterFormPassword" class="form-control" placeholder="Contraseña" aria-describedby="defaultRegisterFormPasswordHelpBlock">
                                    </div>
                                </div>


                                <!-- Sign up button -->
                                <button class="btn btn-info my-4 btn-block" type="submit">Registrarse</button>

                                <hr>

                                <!-- Terms of service -->
                                <p>Al hacer clic en "Registrarse" </p>
                                    <em>estás aceptando nuestros </em> 
                                    <a href="" target="_blank">terminos de servicio</a>
                            </b-card>
                        </form>
                    </div>
        </b-container>
    </div>    
</template>

<script>
import { API } from '../api'
export default {
    name: 'register',
    data(){
        return{
            form:{
                cedula:'',
                nombres:'',
                apellidos:'',
                email:'',
                pass:'',
                fecha_nacimiento:'',
                tipo: 'P',
                direccion:'',
                telefono:'',
                doctor:'',
            }
        }
    },
    methods:{
        async onSubmit(evt){
            evt.preventDefault()
            await API.post('paciente/register', this.form)
            .then(res => {
                if(res.data.agregado){
                    this.$bvToast.toast(res.data.msg, {
                        title: 'Agregado',
                        autoHidelay: 3000,
                        variant : 'success',
                        solid : true
                    });
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
        }
    },
    async mounted(){
        await API.post('session', {token: sessionStorage.getItem('token')})
        .then(res => this.form.doctor = res.data.user.cedula)
        .catch(err => console.log(err))
        console.log(this.form)
    }

}
</script>


<style>
    .contenedor1{
        position:relative;
    }
    .top_image{
        width: 100%;
        max-width: 100%;
        height: auto;
    }
</style>