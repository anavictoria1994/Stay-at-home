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
                <h4>{{ userr }}</h4>
              </div>

              <!-- CARD BODY-->
              <div id="chat" class="card-body" v-chat-scroll="{always: false, smooth: true}">
                <ul id="v-for-messages" style= "list-style: none;">
                  <li v-for="(chat, idx) in messages" :key="idx">
                    {{chat.user}}: {{ chat["text"] }}
                  </li>
                </ul>
              </div>

              <!-- CARD FOOTER -->
              <form id="message-form" class="card-footer">
                <div class="input-group">
                  <input v-model="mensaje" class="form-control" placeholder="Text" />
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
          <div class="col-md-4" v-if="tipo=='D'">
            <div class="card">
              <div class="card-header bg-success text-white">
                <h3>Pacientes</h3>
              </div>
              <div class="card-body">
                <div v-on:click="join" v-for="(usuario, idx) in usuarios" :key="idx" id="usernames" style="padding-top: 5px">
                  <b-button variant="success" v-on:click="roomPaciente(usuario['cedulaP'])" id="v-for-users" class = "col-md-4" >
                  {{usuario['persona']['nombres']}}
                  </b-button>
 
                </div>
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
var messages = [];
var usuarios = [];

import { API } from "../api";
export default {
  data() {
    return ({
      messages: messages,
      name: "NOMBRE",
      room: 0,
      mensaje: "",
      userr: "",
      tipo: "",
      id:0,
      usuarios: usuarios,
      chatPer: 0
    });
  },
  created(){
   
    },
  async mounted() {
     try {
        if (sessionStorage.getItem("token")) {
          await API.post("session", { token: sessionStorage.getItem("token") })
            .then((res) => {
              this.login = true;
              this.userr = res.data.user.nombres;
              this.id = res.data.user.cedula;
              this.tipo = res.data.user.tipo;
            })
            .catch((err) => console.log(err));
        }
      } catch (e) {
        window.location.href = process.env.BASE_URL;
      }
      if (this.tipo==='P'){
        let idString = this.id.toString()
        const { name, room } = { name: this.userr, room: idString };
        this.$socket.emit("join", { name, room }, (error) => {
        if (error) {
          alert(error);
        }
      });
      }
      await API.post("paciente/get",{cedula:this.id})
      .then(res=>{
          this.usuarios = res.data
      })
      .catch(err=>{console.log(err)})
        
      console.log("///////", this.usuarios)
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

   join(evt) {
      //Ingresar a la sala
      evt.preventDefault();      
      this.$socket.emit("disconnected")
      let roomString = this.room.toString()
      const { name, room } = { name: this.userr, room: roomString};
      this.$socket.emit("join", { name, room }, (error) => {
        if (error) {
          alert(error);
        }
      });
      console.log(name, room)
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
      this.mensaje = "";
    },
    roomPaciente(idPaciente){
      this.room = idPaciente
    }
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
  overflow: scroll;
}

.error {
  color: red;
}

.whisper {
  color: gray;
  font-style: italic;
}
.borrar{
  display: none;
}
</style>