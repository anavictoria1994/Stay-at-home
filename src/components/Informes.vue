<template>
    <b-container>
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

                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>