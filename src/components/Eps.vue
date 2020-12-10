<template>
    <b-container>
    <div>
        <b-card
            overlay
            img-src="../image/coronavirus_portada.jpg"
            img-alt="Card Image"
            text-variant="white"
        >
        <h1 id="preguntas">Líneas telefónicas - EPS</h1>
        </b-card>
    </div>
    <div class="fila1">
    <b-row>
        <b-col :xs="12" :lg="6">
            <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="warning"><h5 align="left">ASMET SALUD E.S.S</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right">
                        01 8000913876
                        <hr>
                        032 835 37 83
                    </b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="warning"><h5 align="left">NUEVA EPS</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right">
                        307 70 22
                    </b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="warning"><h5 align="left">COMFENALCO VALLE EPS</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right">
                        (2) 386 53 00 opción 7
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
                    <b-button block v-b-toggle.accordion-4 variant="warning"><h5 align="left">COOSALUD ESS</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right">
                        01 8000 515 611
                        <hr>
                        #922 opción 0
                    </b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-5 variant="warning"><h5 align="left">SALUD TOTAL EPS</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right">
                        485 45 55 opción 1
                    </b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-6 variant="warning"><h5 align="left">EMSSANAR E.S.S</h5></b-button>
                </b-card-header>
                <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text align="right">
                        733 34 00
                        <hr>
                        733 34 05
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