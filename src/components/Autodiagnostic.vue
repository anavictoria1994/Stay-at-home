<template>
    <b-container>
        <h2 class="titlepage" align="left">Análisis de síntomas COVID-19</h2>
        <h4 align="left">Te haremos unas preguntas para determinar tu riesgo de coronavirus(COVID-19)</h4>
        <hr>
        <div>
            <b-col :xs="12" :lg="10">
                <b-card
                    overlay
                    img-src="../image/coronavirus_portada-auto.jpeg"
                    img-alt="Card Image"
                    text-variant="white"
                >
                </b-card>
                <b-card-body>
                    <div class="question1" align="left">
                        <b>
                            ¿Has estado en contacto estrecho (cercano), sin usar elementos de protección, 
                            por más de 15 minutos con una persona con diagnóstico confirmado de COVID-19? o 
                            ¿has estado compartiendo el mismo lugar por más de 120 minutos con una persona 
                            con diagnóstico confirmado de COVID-19?
                        </b>
                        <p></p>
                        <b-form-group align="left" label="Elija una opción">
                            <b-form-radio-group
                                v-model="selected1"
                                :options="options"
                                name="radios-stacked"
                                stacked
                                align="left"
                                required
                            ></b-form-radio-group>
                        </b-form-group>
                    </div>
                    <div class="question2" align="left">
                        <b align="justify">
                            ¿Has presentado alguno de estos síntomas recientemente (en los últimos 14 días)?
                        </b>
                        <p></p>
                        <b-form-group>
                            <template align="left">
                                <p align="left">Puedes escoger varias opciones</p>
                                <b-form-checkbox
                                    v-model="allSelected"
                                    :indeterminate="indeterminate"
                                    aria-describedby="sintomas"
                                    aria-controls="sintomas"
                                    @change="toggleAll"
                                    align="left"
                                >
                                    {{ allSelected ? 'Un-select All' : 'Seleccionar todas' }}
                                </b-form-checkbox>
                            </template>
                            <b-form-checkbox-group
                                id="flavors"
                                v-model="selected"
                                :options="sintomas"
                                name="sintomas"
                                class="ml-4"
                                aria-label="Individual sintomas"
                                stacked
                            ></b-form-checkbox-group>
                        </b-form-group>
                    </div>
                    <div class="row">
                        <b-col :xs="12" :md="4" :lg="3">
                            <button class="btn btn-primary my-4 btn-block colorbtn" type="submit">
                                Ninguno
                            </button>
                        </b-col>
                        <b-col :xs="12" :md="4" :lg="3"></b-col>
                        <b-col :xs="12" :md="4" :lg="3"></b-col>
                        <b-col :xs="12" :md="4" :lg="3">
                            <button class="btn btn-primary my-4 btn-block colorbtn" type="submit">
                                Continuar
                            </button>
                        </b-col>
                    </div>
                </b-card-body>
            </b-col>
            <b-col :xs="12" :lg="2">

            </b-col>
        </div>
    </b-container>
</template>


<script>
export default {
    data() {
      return {
        options: [
          { text: 'Sí', value: 'si' },
          { text: 'No', value: 'no' }
        ],
        sintomas: ['Fiebre de 38°C o más', 'Tos', 'Dificultad para respirar', 
        'Fatiga o decaimiento', 'Dolor de garganta', 'Disminución del sentido del gusto', 
        'Disminución del olfato'],
        selected: [],
        selected1: '',
        allSelected: false,
        indeterminate: false
      }
    },
    methods: {
      toggleAll(checked) {
        this.selected = checked ? this.sintomas.slice() : []
      }
    },
    watch: {
      selected(newVal) {
        // Handle changes in individual flavour checkboxes
        if (newVal.length === 0) {
          this.indeterminate = false
          this.allSelected = false
        } else if (newVal.length === this.sintomas.length) {
          this.indeterminate = false
          this.allSelected = true
        } else {
          this.indeterminate = true
          this.allSelected = false
        }
      }
    }
}
</script>

<style>
.question1{
    padding-bottom: 2%;
}

#titleauto{
    padding-top: 5%;
}
</style>