<template>

  <body>
    <div class="container p-4">
      <!-- CHAT CONTAINER -->
      <div id="contentWrap">
        <div class="row">
          <div class="col-md-8">
            <div class="card">
              <!-- CARD HEADER-->
              <div class="card-header text-white" id="cabecera">
                <h4>{{ userr }}</h4>
              </div>

              <!-- CARD BODY-->
              <div id="chat" class="card-body" v-chat-scroll="{always: false, smooth: true}">
                  <div v-for="(chat, idx) in messages" :key="idx">                   
                    <div :class="[chat.user==userr.toLowerCase()?'sent_msg':'received_msg']">
                      <div class="received_width_mgs">
                        <p>{{ chat["text"] }} </p>
                        <br/>
                      </div>
                    </div>    
                  </div>    
              </div>

              <!-- CARD FOOTER -->
              <form id="message-form" class="card-footer">
                <div class="input-group">
                  <input v-model="mensaje" class="form-control" placeholder="Text" />
                  <div class="input-group-append">
                    <b-button
                      type="submit"
                      v-on:click="msj"
                      id="send-mess"
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
              <div class="card-header text-white" id="usuarios">
                <h3>Pacientes</h3>
              </div>
              <div class="card-body">
                <div v-on:click="join" v-for="(usuario, idx) in usuarios" :key="idx" id="usernames" >
                  <b-button v-on:click="roomPaciente(usuario['cedulaP'])" id="v-for-users" class = "col-md-12 text-black">
                  {{usuario['persona']['nombres']}} {{usuario['persona']['apellidos']}}
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
var mensajeDerecha = false;

import { API } from "../api";

export default {
  data() {
    return ({
      messages: messages,
      mensajeDerecha: mensajeDerecha,
      name: "NOMBRE",
      apellidos: '',
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
              this.apellidos = res.data.user.apellidos;
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
  },

  sockets: {

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
    },
    msj(evt) {
      //Enviar mensaje  
      evt.preventDefault();
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
  background-color: white;
}

#chat {
  height: 412px;
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
.received_msg{
padding-top:10px ;
  padding: 0 0 0 10px;
  vertical-align: top;
}

.received_width_mgs p{
   background:  #e5e5ec none repeat scroll 0 0;
  border-radius: 3px;
  margin: 0;
  padding: 10px 10px 5px 12px;
  width: 44%;

}
.sent_msg p{
  background: #0784f5 none repeat scroll 0 0;
  color: white;
  border-radius: 3px;
  width: 44%;
  margin-left: 50%;
  text-align: right;
}

.sent_msg{
  width: wrap;
}

::-webkit-scrollbar {
    display: none;
}

#usernames{
  padding-top: 5px;
  
}
#cabecera{
  background-color: #3B72DF;
}
#send-mess{
  background-color: #3B72DF;
}
#usuarios{
  background-color: #3B72DF;
}
#v-for-users{
  background-color: #3B72DF;
}
</style>