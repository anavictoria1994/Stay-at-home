<template>
    <div>
        <h1> HOLA SOY CHAT PAGE </h1>
        <input v-model = "name" placeholder="Name">
        <input v-model = "mensaje" placeholder="Text">
        <ul id= "v-for-messages">
            <li v-for="chat in messages" :key="chat.text['message']">
                {{chat.text['message'] || nuevoUser}}
            </li>
        </ul>
        <b-button type="submit" v-on:click = "prueba">Entrar</b-button>
        <b-button type="submit" v-on:click = "msj" class= "btn btn-success">Mensaje</b-button>
    </div>
</template>

<script>
/*RECORDAR CAMBIAR EL V-FOR POR LA ADVERTENCIA DE LAS LLAVES*/

// Variable donde se guardan los mensajes
var messages= [{user: "esoo", text: {message: "Holdo prueba"}}, {user: "esoo", text: {message: "Holaaaaa haciendo prueba"}}]

export default{
    data() {
        return {
            nuevoUser: "Ingreso alguien nuevo",
            messages: messages,
            name:'',
            mensaje: ''
        }
    },
    sockets:{
        //Los console.log solo muestra las respuestas del servidor
        connect: () => {
            console.log('socket connected')
        },
        connection: (data) => {
            console.log(data)
        },
        message: (data) => {
            console.log(data)
            messages.push(data)
        },
        roomData: (data) => {
            console.log(data)
        }

    },
    methods: {
        prueba(evt){
            //Ingresar a la sala
            evt.preventDefault();
            const { name, room } = {name: this.name, room: "Prueba"}
            this.$socket.emit('join', { name, room }, (error) => {
                if (error) {
                    alert(error);
                }
            });  
        },
        msj(evt){
            //Enviar mensaje
            evt.preventDefault();
            console.log(this.messages)
            this.$socket.emit('sendMessage', {message: this.mensaje})
        }
    },
}
</script>

<style>

</style>