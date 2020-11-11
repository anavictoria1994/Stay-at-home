
<template>
    <b-container>
        <h2 class="titlepage" align="left">Pacientes</h2>
        <hr>
        <div class="row filterinput">
            <b-col></b-col>
            <b-col></b-col>
            <b-col class="my-3">
                <b-form-group
                label="Filtrar"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="md"
                label-for="filterInput"
                class="mb-0"
                >
                <b-input-group size="md">
                    <b-form-input
                    v-model="filter"
                    type="search"
                    id="filterInput"
                    placeholder="Escriba para buscar"
                    ></b-form-input>
                    <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                    </b-input-group-append>
                </b-input-group>
                </b-form-group>
            </b-col>
        </div>
        <b-row class="text-center" id="tabla">
            <b-col></b-col>
            <b-col cols="8">
                <div>
                    <b-jumbotron bg-variant="light">
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
                    </b-jumbotron>    
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
    async created(){
        await API.post("paciente/get",{cedula:1})
        .then(res=>{
            res.data.map(paciente => { 
                this.items.push(
                    {
                        isActive: paciente.isActive,
                        edad: new Date().getFullYear() - new Date(paciente.fecha_nacimiento).getFullYear(), 
                        nombres: paciente.persona.nombres,
                        apellidos: paciente.persona.apellidos
                    }
                )
                });
        })
        .catch(err=>{console.log(err)})
        
        this.items.map((active)=>{
            if(active.isActive){
                active.isActive="Sí"
            }
            else{
                active.isActive="No"
            }
        })
        
    }
    
  }
</script>

<style>
.text-center{
    width: 100%;
    height: auto;
}

.titulo-tabla{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding: 2%;
}
.filterinput{
    padding-bottom: 2%;
}
.titlepage{
    padding-top: 2%;
}

</style>