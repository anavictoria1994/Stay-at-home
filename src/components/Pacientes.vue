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
    export default {
    data() {
      return {
        sortBy: 'Edad',
        sortDesc: false,
        fields: [
          { key: 'Apellido', sortable: true },
          { key: 'Nombre', sortable: true },
          { key: 'Edad', sortable: true },
          { key: 'Activo', sortable: false }
        ],
        items: [
          { Activo: "Sí", Edad: 40, Nombre: 'Dickerson', Apellido: 'Macdonald' },
          { Activo: "No", Edad: 21, Nombre: 'Larsen', Apellido: 'Shaw' },
          { Activo: "No", Edad: 89, Nombre: 'Geneva', Apellido: 'Wilson' },
          { Activo: "Sí", Edad: 38, Nombre: 'Jami', Apellido: 'Carney' }
        ]
      }
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