<template>
    <div>
        <b-container>
            <b-row>
                <b-col>
                    <form class="text-center border border-light p-5" action="#!">

                    <p class="h4 mb-4">Registrarse</p>

                    <div class="form-row mb-4">
                        <div class="col">
                            <!-- First name -->
                            <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="Nombre">
                        </div>
                        <div class="col">
                            <!-- Last name -->
                            <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Apellido">
                        </div>
                    </div>

                    <!-- E-mail -->
                    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="Correo">

                    <!-- Password -->
                    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Contraseña" aria-describedby="defaultRegisterFormPasswordHelpBlock">
                    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        Al menos 8 caracteres y 1 dígito
                    </small>

                    <!-- Phone number -->
                    <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Número telefónico" aria-describedby="defaultRegisterFormPhoneHelpBlock">
                    <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                        Opcional
                    </small>

                    <!-- Newsletter -->
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter">
                    </div>

                    <!-- Sign up button -->
                    <button class="btn btn-info my-4 btn-block" type="submit">Registrarse</button>

                    <hr>

                    <!-- Terms of service -->
                    <p>Al hacer clic en "Registrarse" </p>
                        <em>estás aceptando nuestros </em> 
                        <a href="" target="_blank">terminos de servicio</a>

                    </form>
                </b-col>
                <b-col>
                </b-col>    
            </b-row>        
        </b-container>
    </div>    
</template>