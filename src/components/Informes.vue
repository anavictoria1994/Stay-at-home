<template>
        <b-container d="informes" class="justify-content-center">
            <h2 class="titlepage" align="left">Informes</h2>
            <hr>
            <b-row class="filterinput">
                <b-col :xs="12" :lg="6">
                    <!--BOTÓN DE REGISTRAR PACIENTE -->
                    <div class="registerbutton">
                        <b-button href="/newInfo" class="colorbtn" align="left" variant="primary">
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
                        <div id="tabla-informes">
                            <h3 class="titulo-tabla">TABLA DE INFORMES</h3>
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
export default {
    data(){
        return{
            sortBy: 'id',
            sortDesc: false,
            fields: [
                { key: 'id', sortable: true},
                { key: 'descripcion', sortable:true},
                { key: 'acciones', sortable:false}
            ],
            items: [
                {id: 1151962890, descripcion: 'El paciente tiene signos vitales estables'},
                {id: 16776923, descripcion: 'El paciente tiene signos vitales estables'}
            ],
            currentPage: 1,
            perPage: 3,
            selectMode: 'single',
            filter: ""
        }  
    }
}
</script>

<style>
#tabla-informes{
    padding-top: 5%;
}
</style>