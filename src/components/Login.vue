
<template>
    <div class="contenedor">
        <form>
            <p class="h4 text-center mb-4">Iniciar Sesión</p>
             <div class="grey-text">
                <mdb-input label="Your email" icon="envelope" type="email"/>
                <mdb-input label="Your password" icon="lock" type="password"/>
            </div>
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
    background: wheat;
    margin-left: 29%;
    margin-right: 30%;
    margin-top: 15%;
    padding: 3% ;
    }
    
</style>