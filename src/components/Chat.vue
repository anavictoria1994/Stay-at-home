<template>
  <!--
    <div>
        <h1> HOLA SOY CHAT PAGE </h1>
       <input v-model = "name" placeholder="Name">
        <input v-model = "mensaje" placeholder="Text">
        <ul id= "v-for-messages">
           <li v-for="( chat, idx )  in messages" :key="idx">
                {{chat['text'] || nuevoUser}}
            </li> 
        </ul>
        <b-button type="submit" v-on:click = "prueba">Entrar</b-button>
        <b-button type="submit" v-on:click = "msj" class= "btn btn-success">Mensaje</b-button>
        
        
    </div>
   -->
  <body>
    <div class="container p-4">
      <!-- CHAT CONTAINER -->
      <div id="contentWrap">
        <div class="row">
          <div class="col-md-8">
            <div class="card">
              <!-- CARD HEADER-->
              <div class="card-header bg-success text-white">
                <h4>{{ user }}</h4>
              </div>

              <!-- CARD BODY-->
              <div id="chat" class="card-body">
                <ul id="v-for-messages">
                  <li v-for="(chat, idx) in messages" :key="idx">
                    {{ chat["text"] || nuevoUser }}
                  </li>
                </ul>
              </div>

              <!-- CARD FOOTER -->
              <form id="message-form" class="card-footer">
                <div class="input-group">
                  <input v-model="mensaje" placeholder="Text" />
                  <div class="input-group-append">
                    <b-button
                      type="submit"
                      v-on:click="msj"
                      class="btn btn-success"
                      >Enviar</b-button
                    >
                    
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- USERS SECTION-->
          <div class="col-md-4">
            <div class="card">
              <div class="card-header bg-success text-white">
                <h3>Pacientes</h3>
              </div>
              <div class="card-body">
                <div id="usernames"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
/*RECORDAR CAMBIAR EL V-FOR POR LA ADVERTENCIA DE LAS LLAVES*/

// Variable donde se guardan los mensajes
var messages = [
  { user: "esoo", text: "Holdo prueba" },
  { user: "esoo", text: "Holaaaaa haciendo prueba" },
];
import { API } from "../api";
export default {
  data() {
    return {
      nuevoUser: "Ingreso alguien nuevo",
      messages: messages,
      name: "NOMBRE",
      mensaje: "",
      user: "NOMBRE",
      tipo: "",
    };
  },

  mounted() {
    try {
      if (sessionStorage.getItem("token")) {
        API.post("session", { token: sessionStorage.getItem("token") })
          .then((res) => {
            this.login = true;
            this.user = res.data.user.nombres;
            this.tipo = res.data.user.tipo;
          })
          .catch((err) => console.log(err));
      }
    } catch (e) {
      window.location.href = process.env.BASE_URL;
    }
  },

  sockets: {
    //Los console.log solo muestra las respuestas del servidor
    /*connect: () => {
      
    },*/
    connection: (data) => {
      console.log(data);
    },
    message: (data) => {
      console.log(data);
      messages.push(data);
    },
    roomData: (data) => {
      console.log(data);
    },
  },
  methods: {
   prueba(evt) {
      //Ingresar a la sala
      evt.preventDefault();
      const { name, room } = { name: this.name, room: "Prueba" };
      this.$socket.emit("join", { name, room }, (error) => {
        if (error) {
          alert(error);
        }
      });
    },
    msj(evt) {
      //Enviar mensaje
      evt.preventDefault();
      console.log(this.messages);
      this.$socket.emit("sendMessage", this.mensaje, (error) => {
        if (error) {
          alert(error);
        }
      });
    },
  },
};
</script>

<style>
body {
  background-color: #ecf0f1;
}

#contentWrap {
  padding-top: 100px;
}

.card-body {
  height: 500px;
}

.error {
  color: red;
}

.whisper {
  color: gray;
  font-style: italic;
}
</style>