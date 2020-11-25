<template>
    <b-container>
        <h2 class="titlepage" align="left">Registrar Paciente</h2>
        <hr> 
        <b-row class="justify-content-md-center" id="recover">
                <b-col cols="12" md="auto">
                        <form @submit="onSubmit" class="text-center p-5" action="#!">
                            <div class="img_container">
                                <img src="../image/antibacterial.jpg" class="top_image">
                            </div>
                            <b-card>
                                <div class="form-row mb-4">
                                    <div class="col">
                                        <!-- Nombre -->
                                        <input type="text" v-model="form.nombres"  class="form-control" required placeholder="Nombres">
                                    </div>
                                    <div class="col">
                                        <!--Apellido -->
                                        <input type="text" v-model="form.apellidos"  class="form-control" required placeholder="Apellidos">
                                    </div>
                                </div>
                                <div class="form-row mb-4">
                                    <div class="col">
                                        <!-- Cédula -->
                                        <input type="number" v-model="form.cedula"  class="form-control" required placeholder="Número de identificación">
                                    </div>
                                    <div class="col">
                                        <!-- Fecha Nac -->
                                        <input type="date" v-model="form.fecha_nacimiento"  class="form-control" requiered placeholder="Fecha de Nacimiento">
                                    </div>
                                </div>
                                <div class="form-row mb-4">
                                    <div class="col">
                                    <!-- Teléfono -->
                                        <input type="number" v-model="form.telefono"  class="form-control" required placeholder="Número de teléfono">
                                    </div>
                                    <div class="col">
                                    <!--Direccion -->
                                    <input type="text" v-model="form.direccion"  class="form-control" required placeholder="Dirección">
                                    </div>
                                </div>
                                <div class="form-row mb-4">
                                    <div class="col">
                                        <input type="email" v-model="form.email" class="form-control mb-4" required placeholder="Correo">
                                    </div>
                                    <div class="col">
                                        <input type="password" v-model="form.pass" class="form-control" required placeholder="Contraseña" aria-describedby="defaultRegisterFormPasswordHelpBlock">
                                    </div>
                                </div>


                                <!-- Sign up button -->
                                <button class="btn btn-info my-4 btn-block" type="submit">Registrar Paciente</button>
                            </b-card>
                        </form>
                </b-col>
        </b-row> 
    </b-container>       
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
                    console.log(this.form)
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

            this.form.cedula = ''
            this.form.nombres = ''
            this.form.apellidos = ''
            this.form.email = ''
            this.form.pass = ''
            this.form.fecha_nacimiento = ''
            this.form.direccion = ''
            this.form.telefono = ''

        },
        
        
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