<template>
        <b-container d="informes" class="justify-content-center">
            <h2 class="titlepage" align="left">Informes</h2>
            <hr>
            <b-row class="filterinput">
                <b-col :xs="12" :lg="6">
                    <!--BOTÓN DE REGISTRAR INFORME -->
                    <div class="registerbutton">
                        <b-button href="/newInforme" class="colorbtn" align="left" variant="primary">
                            <b-icon icon="file-earmark-plus" aria-hidden="true"></b-icon> Nuevo informe
                        </b-button>
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
                                <b-button :disabled="!filter" @click="filter = ''">Limpiar</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                    <!--TERMINA AQUÍ -->
                </b-col>
            </b-row>
                <b-row class="text-center" id="tabla">
                    <b-col></b-col>
                    <b-col :xs="10" :lg="8">
                        <div id="tabla-informes">
                            <h3 class="titulo-tabla">TABLA DE INFORMES</h3>
                                <!--TABLA DE INFORMES-->
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
                                >
                                </b-table>
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
                    </b-col>
                    <b-col></b-col>
                </b-row>
        </b-container>
</template>
<script>
import { API } from '../api'
export default {
    data(){
        return{
            sortBy: 'id',
            sortDesc: false,
            fields: [
                { key: 'id', sortable: true},
                { key: 'descripcion', sortable:true}
            ],
            items: [],
            currentPage: 1,
            perPage: 3,
            selectMode: 'single',
            filter: ""
        }  
    },
    async mounted(){
        try {
        if (sessionStorage.getItem("token")) {
        await API.post("session", { token: sessionStorage.getItem("token") })
            .then(async (resp) => {
                await API.post('paciente/informe/get', {cedula:resp.data.user.cedula})
                .then(res => {
                    res.data.map(informe => { 
                        this.items.push(
                            {
                                id: informe.idInforme,
                                descripcion: informe.texto
                            }
                        )
                        });
                })
                .catch(err => console.log(err))
                })
        .catch((err) => console.log(err));
        }
      } catch (e) {
        window.location.href = process.env.BASE_URL;
      }
      this.totalRows = this.items.length
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
#tabla-informes{
    padding-top: 5%;
}
</style>