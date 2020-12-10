<template>
<b-container>
    <div>
        <b-card
            overlay
            img-src="../image/coronavirus_portada.jpg"
            img-alt="Card Image"
            text-variant="white"
        >
        <h1 id="preguntas">Lineas de atención Secretarías de Salud</h1>
        </b-card>
    </div>
    <div class="fila1">
    <b-row>
        <b-col :xs="12" :lg="6">
            <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="warning"><h5>Antioquia</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right">
                        <p>Departamento: 300 305 02 95 #774</p>
                        <p>Medellín: 123</p>
                    </b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="warning"><h5>Bogotá</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right">
                        <p>Secretaría Distrital de Salud de Bogotá:  123</p>
                    </b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="warning"><h5>Caldas</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right">
                        <p>Línea Caldas:  (6) 880 08 18 --
                                           310 426 79 06
                        </p>
                        <p>Línea Manizales:   123</p>
                    </b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>
            </div>
        </b-col>
        <b-col :xs="12" :lg="6">
            <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-4 variant="warning"><h5>Cauca</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right">
                        <p>301 273 77 87</p>
                    </b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-5 variant="warning"><h5>San Andrés</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right"><p>310 651 13 41</p></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-6 variant="warning"><h5>Valle del Cauca</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right">
                        620 68 19
                        <hr>
                        Línea Exclusiva Cali:  486 55 55 Opción 7
                        <hr>
                        Buenaventura:  317 287 02 73
                    </b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>
            </div>
        </b-col>
    </b-row>
    </div>
</b-container>
</template>

<style>
.fila1{
    padding: 3%;
}
</style>