
<template>
    <div class="contenedor">
        <form class="login">
            <p class="h4 text-center mb-4">Iniciar Sesión</p>
             <div class="grey-text">
                <mdb-input label="Your email" icon="envelope" type="email"/>
                <mdb-input label="Your password" icon="lock" type="password"/>
            </div>
                <center href="#">
                    <i class="fa fa-key"></i>
                    Forgot your password?
                    </center>
            <div class="text-center">
                <mdb-btn>Login</mdb-btn>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.contenedor{
    display: flex;
    align-items: center;
    flex-direction: column; 
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 20px;
    background: #21B295;
    }
.login{
    border-radius: 2px 2px 5px 5px;
  padding: 10px 20px 20px 20px;
  width: 90%;
  max-width: 320px;
  background: #ffffff;
  position:relative;
  top: 120px;
  padding-bottom: 80px;
  box-shadow: 0px 1px 5px
}

</style>