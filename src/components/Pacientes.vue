
<template>
    <b-container class="bv-example-row">
        <h2 class="titlepage" align="left">Pacientes</h2>
        <hr>
            <b-row class="filterinput">
                <b-col :xs="12" :lg="6">
                    <!--BOTÓN DE REGISTRAR PACIENTE -->
                    <div class="registerbutton">
                        <b-button href="/register" class="colorbtn" align="left">Registrar nuevo paciente</b-button>
                    </div>
                </b-col>
                <b-col :xs="12" :lg="6">
                    <!-- BARRA DE BÚSQUEDA -->
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
                    <!--TERMINA AQUÍ -->
                </b-col>
            </b-row>
            <b-row class="text-center" id="tabla">
                <b-col></b-col>
                <b-col :xs="10" :lg="8">
                    <div>
                        <!-- CONTENEDOR DONDE VA LA TABLA DE PACIENTES -->
                        <b-jumbotron bg-variant="light" class="table-border">
                            <div class="tabla-pacientes">
                                <h3 class="titulo-tabla">TABLA DE PACIENTES</h3>
                                <div>
                                    <!--TABLA DE PACIENTES-->
                                    <b-table
                                        id="table-transition"
                                        :items="items"
                                        :fields="fields"
                                        :sort-by.sync="sortBy"
                                        :sort-desc.sync="sortDesc"
                                        :filter="filter"
                                        :current-page="currentPage"
                                        :per-page="perPage"
                                        :striped=true
                                        :hover=true
                                        ref="selectableTable"
                                        selectable
                                        :select-mode="selectMode"
                                        @row-selected="onRowSelected"
                                        primary-key="apellidos"
                                        show-empty
                                        small
                                        stacked="md"
                                        responsive="sm"
                                        @filtered="onFiltered"
                                    ></b-table>
                                    <!-- Información de los filtros aplicados -->
                                    <div>
                                        Organizado por: <b>{{ sortBy }}</b>, Orden:
                                        <b>{{ sortDesc ? 'Descendente' : 'Ascendente' }}</b>
                                    </div>
                                    <!--Paginación de la tabla -->
                                    <div class="pagination-view">
                                        <b-pagination
                                        v-model="currentPage"
                                        pills :total-rows="totalRows"
                                        :per-page="perPage"
                                        align="fill"
                                        size="sm"
                                        aria-controls="table-transition"
                                        ></b-pagination>
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
          { key: 'activo', sortable: false },
          { key: 'acciones', sortable: false}
        ],
        items: [],
        currentPage: 1,
        perPage: 3,
        selectMode: 'single',
        filter: ''
      }
    },
    async created(){
        await API.post("paciente/get",{cedula:1})
        .then(res=>{
            res.data.map(paciente => { 
                this.items.push(
                    {
                        activo: paciente.isActive,
                        edad: new Date().getFullYear() - new Date(paciente.fecha_nacimiento).getFullYear(), 
                        nombres: paciente.persona.nombres,
                        apellidos: paciente.persona.apellidos
                    }
                )
                });
        })
        .catch(err=>{console.log(err)})
        
        this.items.map((active)=>{
            if(active.activo){
                active.activo="Sí"
            }
            else{
                active.activo="No"
            }
        })
        
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
      totalRows(){
          return this.items.length
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      onRowSelected(items) {
        this.selected = items
      }
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
    padding-top: 2%;
}
.titlepage{
    padding-top: 2%;
}
.registerbutton{
    padding-bottom: 2%; 
    float: left;
}
.table-border{
    padding-bottom: 2%;
    padding-top: 0%;
}
table#table-transition .flip-list-move {
  transition: transform 1s;
}
.pagination-view{
    padding-top: 2%;
}

.page-item.active .page-link {  
    background-color: #3B72DF !important;  
    border-color: #3B72DF !important;  
}

.colorbtn{
    background-color: #3B72DF;
    border-bottom-color: #3B72DF;
}
.colorbtn:hover{
    background-color: #0038A7;
    color: white;
}


</style>