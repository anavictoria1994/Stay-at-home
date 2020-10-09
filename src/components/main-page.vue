
<template>
<div>
  
  <b-navbar toggleable="lg" type="dark" variant="success">
    <div class="container">
      
    <b-navbar-brand href="#">Stay at Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Inicio</b-nav-item>
        <b-nav-item href="#" disabled>Historia Clinica</b-nav-item>
        <b-nav-item href="#" disabled>Geolocalizacion</b-nav-item>
        <b-nav-item href="#" disabled>Registrar</b-nav-item>
        <b-nav-item href="#" disabled>Chat</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
      
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>Usuario</em>
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Salir</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
  
  <b-carousel
  
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    :interval = "3000"
    indicators
    img-width="800"
    img-height="300"
    
  >
    <b-carousel-slide
        img-src="../image/casa.png" 
       >
     </b-carousel-slide>
     
    <b-carousel-slide
      
      img-src="../image/sintomas.png"
    ></b-carousel-slide>
    <b-carousel-slide
      
      img-src="../image/recomendaciones.png"
    ></b-carousel-slide>
 
  </b-carousel>

  <main>
    <section class="altura-a-b">
        <div class="row">
          <div class="col-12 col-sm-4 text-centar" >
            <img class="img-fluid shadow-lg" src="../image/lavatelasmanos.jpg" alt="Banner 01">
            <h5 class="altura-texto"> Lavate las manos </h5>
            <p>Lávate las manos con frecuencia. Usa agua y jabón o un 
              desinfectante de manos a base de alcohol cuantas veces 
              sea necesario.</p>
          </div>
          <div class="col-12 col-sm-4 text-centar">
            <img class="img-fluid shadow-lg" src="../image/mascarilla.png" alt="Banner 02">
            <h5 class="altura-texto">Usa mascarilla </h5>
            <p>Utiliza mascarilla cuando no sea posible mantener 
              el distanciamiento físico o todo el tiempo que te sea
              posible.</p>
          </div>
          <div class="col-12 col-sm-4 text-centar">
            <img class="img-fluid shadow-lg" src="../image/distancia.png" alt="Banner 03">
            <h5 class="altura-texto">Distanciamiento</h5>
            <p>Mantén una distancia de seguridad con personas que tosan 
              o estornuden, recerda que en todo momento estas expuesto 
              al virus por lo tanto se cuidadoso.</p>
          </div>
        </div>
    </section>
    <section class="altura-a-b">
      <div class="container">
        <div class="embed-responsive embed-responsive-21by9">
            <iframe width="1000" height="500" class="embed-responsive-item" src="https://www.youtube.com/embed/yIVspK_seNE" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="row" >
          <div class="col-6 col-sm-4 text-centar" >
            <img class="logotipo-footer" src="../image/casa2.png" alt="logotipo">
          </div>
          <div class="col-6 col-sm-4 text-centar">
            <h5 style="color:#fff;">QUIENES SOMOS</h5>
            <p>Somos un equipo de profesionales apasionados cuya meta
              es brindar la mejor atencion a todas aquellas personas 
              que lo necesita y estamos dispuestos a dar lo mejor 
              para lograrlos.</p>
          </div>
          <div class="col-6 col-sm-4 text-centar">
            <h5 style="color:#fff;" > CONTACTE CON NOSOTROS </h5>
            <img src="../image/llamada.png" alt="telefono" align="center">
            <p>+57 319 569 896 /
              425 36 96</p>
            <img src="../image/correo.png" alt="correo" >
            <p>stayathome2020@gmail.com</p>
            <p></p>
          </div>
        </div>
  </footer>
  </div>
</template>  

<script>
</script>

<style>
.altura-a-b{
  padding: 100px 0;
}
.altura-texto{
  padding: 20px 0;
}

footer{
  background-color: forestgreen;
  padding: 50px 0;
  text-align: center;
}

footer .logotipo-footer{
  width: 100px;
  margin-bottom: 20px;
}
footer p{
  color: #fff;
}

  

</style>