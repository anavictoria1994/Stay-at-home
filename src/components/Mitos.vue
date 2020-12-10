<template>
    <b-container>
        <b-card
            overlay
            img-src="../image/coronavirus_portada.jpg"
            img-alt="Card Image"
            text-variant="white"
        >
            <h1 id="preguntas">Mitos y Realidades</h1>
        </b-card>
        <div class="row">
            <b-col :xs="12" :lg="6">
                <div class="mito1">
                    <h3>MITO</h3>
                    <p>Cualquier persona que quiera practicarse una prueba 
                    diagnóstica de coronavirus (COVID-19) puede hacerlo
                    </p>
                    <hr>
                    <h3>REALIDAD</h3>
                    <b>Las pruebas específicas para el covid-19 se realizarán a las personas 
                        que cumplen los criterios establecidos para ser un posible caso de 
                        estudio, de acuerdo con los lineamientos del Instituto Nacional de Salud.
                    </b>
                </div>
            </b-col>
            <hr>
            <b-col :xs="12" :lg="6">
                <div class="mito">
                    <h3>MITO</h3>
                    <p>Colombia tiene la capacidad para realizar pruebas diagnósticas 
                        para el nuevo coronavirus (COVID-19)
                    </p>
                    <hr>
                    <h3>REALIDAD</h3>
                    <b>El Instituto Nacional de Salud de la mano de la OPS, desarrolló
                        la estandarización para aplicar las pruebas diagnósticas del 
                        COVID-19 en el país
                    </b>
                </div>
            </b-col>
        </div>
        <div class="row">
            <b-col :xs="12" :lg="6">
                <div class="mito">
                    <h3>MITO</h3>
                    <p>Si te contagias con el Coronavirus (COVID-19), te vas a morir
                    </p>
                    <hr>
                    <h3>REALIDAD</h3>
                    <b>En raras ocasiones el coronavirus procedente de China puede ser mortal. En algunas personas puede 
                        se más grave y causar neumonia o dificultades respiratorias.
                        Las personas de edad avanzada parecen tener un mayor riesgo de caer gravemente enfermas por el virus.
                        La infección por COVID-19 puede causar síntomas leves como secreción nasal, dolor de garganta, tos y fiebre
                    </b>
                </div>
            </b-col>
            <hr>
            <b-col :xs="12" :lg="6">
                <div class="mito1">
                    <h3>MITO</h3>
                    <p>El nuevo brote de coronavirus (COVID-19) solo afecta a personas mayores
                    </p>
                    <hr>
                    <h3>REALIDAD</h3>
                    <b>El virus puede afectar a gente de todas las edades. Sin embargo, 
                        las personas mayores y aquellas con enfermedades crónicas preexistentes
                        podrían ser más vulnerables a enfermarse gravemente con coronavirus (COVID-19)
                    </b>
                </div>
            </b-col>
        </div>
    </b-container>
</template>
<style>
.mito{
    padding: 8%;
}
.mito1{
    padding: 8%;
    background-color: lightgray;
}
</style>