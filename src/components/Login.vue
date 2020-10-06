<template>
  <b-container class="bv-example-row" id="contenedor1">
    <b-row class="justify-content-md-center" id="principal">
        <b-col col lg="2"></b-col>
        <b-col cols="12" md="auto">
            <div class="panel-body">
                <b-card img-alt="Card image" img-top>
                    <img src="../images/manos.jpg">
                    <b-card-text>
                        <b-form-group>
                            <label></label>
                            <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                            <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
                        </b-form-group>
                    </b-card-text>
                </b-card>
            </div>    
        </b-col>
        <b-col col lg="2"></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    data(){
        return{
            form: {
                email:'',
                pass:''
            }
        }
    },
    methods:{
        onSubmit(evt){
            evt.preventDefault()
            console.log(JSON.stringify(this.form))
        }
    }


}
</script>

<style>

body{
    padding-top: 5%;
    min-width: 364px;
    background-color: #C7FFF5;
}

</style>