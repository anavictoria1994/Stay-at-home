<template>
    <b-container>
        <b-row class="text-center" id="tabla">
            <b-col></b-col>
            <b-col cols="8">
                <div class="tabla-pacientes">
                    <h3 class="titulo-tabla">TABLA DE PACIENTES</h3>
                    <div>
                        <b-table
                            :items="items"
                            :fields="fields"
                            :sort-by.sync="sortBy"
                            :sort-desc.sync="sortDesc"
                            responsive="sm"
                        ></b-table>

                        <div>
                            Organizado por: <b>{{ sortBy }}</b>, Orden:
                            <b>{{ sortDesc ? 'Descendente' : 'Ascendente' }}</b>
                        </div>
                    </div>
                </div>
            </b-col>
            <b-col></b-col>
        </b-row> 
    </b-container>  
</template>

<script>
import {API} from '../api'

    export default {
    data() {
      return {
        sortBy: 'edad',
        sortDesc: false,
        fields: [
          { key: 'apellidos', sortable: true },
          { key: 'nombres', sortable: true },
          { key: 'edad', sortable: true },
          { key: 'isActive', sortable: false }
        ],
        items: [
          { isActive: true, edad: 23, nombres: 'Febe', apellidos: 'Gaviria' },
          { isActive: false, edad: 21, nombres: 'Juan', apellidos: 'Ballesteros' },
          { isActive: false, edad: 27, nombres: 'Ana', apellidos: 'Acuña' },
          { isActive: true, edad: 26, nombres: 'Hanier', apellidos: 'Peña' }
        ]
      }
    },
    created(){
        this.items.map((active)=>{
            if(active.isActive){
                active.isActive="Sí"
            }
            else{
                active.isActive="No"
            }
        }),
        API.post("paciente/get",{cedula:1})
        .then(res=>{
            //this.items=res.data.user.persona
            console.log(res.data)
        })
        
        .catch(err=>{console.log(err)})
    }
    
  }
</script>

<style>
.text-center{
    padding-top: 10%;
    width: 100%;
    height: auto;
}

.titulo-tabla{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>