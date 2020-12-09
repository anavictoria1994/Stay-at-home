<template>
    <b-container class="analisis">
            <h2 class="titlepage" align="left">Generalidades sobre COVID-19</h2>
            <hr>
            <div>
                <b-card
                    overlay
                    img-src="../image/coronavirus_portada.jpg"
                    img-alt="Card Image"
                    text-variant="white"
                >
                <h2 id="preguntas" align="left">Preguntas Frecuentes</h2>
                </b-card>
            </div>
            <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="warning">¿Qué es un coronavirus?</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text>Los coronavirus son una extensa familia de virus que causan infecciones respiratorias 
                        que pueden ir desde el resfriado común hasta enfermedades más graves como el síndrome respiratorio 
                        de Oriente Medio (MERS) y el síndrome respiratorio agudo severo (SRAS). 
                        El coronavirus que se ha descubierto más recientemente causa la enfermedad por coronavirus COVID-19.
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="warning">¿Qué es el COVID-19?</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text>El COVID-19 es la enfermedad infecciosa causada por el coronavirus que se ha
                         descubierto más recientemente. Tanto el nuevo virus como la enfermedad eran desconocidos
                          antes de que estallara el brote en Wuhan (China) en diciembre de 2019.
                    </b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1" align="left">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="warning">¿Cómo se transmite el Coronavirus?</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text>Se transmite cuando una persona enferma tose o estornuda y expulsa partículas del virus 
                        que entran en contacto con las personas con las que se tiene un contacto estrecho y su entorno.
                        Este mecanismo es similar entre todas las Infecciones Respiratorias Agudas (IRA).</b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>
            </div>
    </b-container>
    
</template>

<style>
#preguntas{
    padding-top: 2%;
}
.analisis{
    padding-bottom: 10%;
}
</style>