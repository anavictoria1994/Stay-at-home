<template>
    <div class="register">
        <b-container class="bv-example-row">
            <b-row class="text-center">
                <b-col></b-col>
                <b-col cols="8">
                    <div class="formulario">
                        <form class="text-center border border-light p-5" action="#!">
                            <b-card img-alt="Card image" img-top>
                                <img src="../images/wash.jpg">
                            </b-card>
                            <b-card>
                                <div class="form-row mb-4">
                                    <div class="col">
                                        <!-- Nombre -->
                                        <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="Nombres">
                                    </div>
                                    <div class="col">
                                        <!--Apellido -->
                                        <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Apellidos">
                                    </div>
                                </div>
                                <div class="form-row mb-4">
                                    <div class="col">
                                        <!-- Cédula -->
                                        <input type="number" id="defaultRegisterFormIdNumber" class="form-control" placeholder="Número de identificación">
                                    </div>
                                    <div class="col">
                                        <!-- Fecha Nac -->
                                        <input type="date" id="defaultRegisterFormBirthDate" class="form-control" placeholder="Fecha de Nacimiento">
                                    </div>
                                </div>
                                <div class="form-row mb-4">
                                    <div class="col">
                                    <!-- Teléfono -->
                                        <input type="number" id="defaultRegisterFormPhoneNumber" class="form-control" placeholder="Número de teléfono">
                                    </div>
                                    <div class="col">
                                    <!--Direccion -->
                                    <input type="text" id="defaultRegisterFormAdress" class="form-control" placeholder="Dirección">
                                    </div>
                                </div>
                                <div class="form-row mb-4">
                                    <div class="col">
                                        <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="Correo">
                                    </div>
                                    <div class="col">
                                        <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Contraseña" aria-describedby="defaultRegisterFormPasswordHelpBlock">
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
                </b-col> 
                <b-col></b-col>   
            </b-row>        
        </b-container>
    </div>    
</template>

<script>
import axios from 'axios'
export default {
    name: 'register',
    beforeMount(){
        axios.get('http://localhost:3000/paciente/get')
        .then(res => {
            console.log(res)

            });
    },
    
}
</script>


<style>
    .formulario{
        background-color: white;
        min-width: 250px;
    }
</style>