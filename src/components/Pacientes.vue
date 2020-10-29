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
          { Activo: "Sí", Edad: 23, Nombre: 'Febe', Apellido: 'Gaviria' },
          { Activo: "No", Edad: 21, Nombre: 'Juan', Apellido: 'Ballesteros' },
          { Activo: "No", Edad: 27, Nombre: 'Ana', Apellido: 'Acuña' },
          { Activo: "Sí", Edad: 26, Nombre: 'Hanier', Apellido: 'Peña' }
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