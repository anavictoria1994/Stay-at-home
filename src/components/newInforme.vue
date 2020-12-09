<template>
    <b-container>
        <h2 class="titlepage" align="left">Informes</h2>
            <hr>
            <b-row>
                <b-col :xs="12" :lg="6">
                    <form @submit="onSubmit">
                        <div>
                            <div class="form-row mb-4">
                                <div class="col">
                                    <b-form-datepicker 
                                        id="fecha"
                                        v-model="form.date"
                                        class="mb-2"
                                        required="Este campo es obligatorio"
                                        placeholder="Fecha"
                                    >
                                    </b-form-datepicker>
                                </div>
                                <div class="col">
                                    <b-form-input
                                        v-model="form.cdeula"
                                        required="este campo es necesario"
                                        placeholder="ingrese la cédula del paciente"
                                        type="number"
                                    >
                                    </b-form-input>
                                </div>
                            </div>
                        </div>
                        <div>
                            <b-form-textarea
                            v-model="form.texto"
                            id="textarea-rows"
                            placeholder="Descripción"
                            rows="8"
                            >
                            </b-form-textarea>
                        </div>
                        <div>
                            <button class="btn btn-primary my-4 btn-block colorbtn" type="submit">
                                Guardar Informe
                            </button>
                        </div>
                    </form>
                </b-col>
                <b-col :xs="12" :lg="6">
                    <img src="../image/reporte.jpg" class="top_image">
                </b-col>
            </b-row>
    </b-container>
</template>
<script>
export default {
    data(){
        return{
            form: {
                date: '',
                cedula: '',
                texto: ''
            }
        }
    }
}
</script>