<template>
  <section>
    <!--<Header/>-->
    <div class="main">
      <h3>Admin</h3>
      <GmapMap :center="center" :zoom="zoom" map-type-id="terrain" style="width: 600px; height: 400px" ref="mapRef">
        <GmapMarker
          :position="center"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
        <GmapPolygon :paths="polygon"/>
      </GmapMap>
      <h4>Location Alerts</h4>
      <div class="alert" v-if="showAlert">
        <p>This user has left the ranch</p>
      </div>

      <div class="location alert" v-if="showLocationUpdate">
        <p>{{message}}</p>
      </div>
    </div>
  </section>
</template>

<script>
//import Header from "@/components/Header";
import { gmapApi } from "vue2-google-maps";
export default {
  name: "Admin",
  /*components: {
    Header
  },*/
  data() {
    return {
      message: "",
      theRanchPolygon: {},
      showAlert: false,
      showLocationUpdate: false,
      zoom: 16,
      center: {
        lat: 3.42158,
        lng: -76.5205
      },
      polygon: [
        
      ]
    };
  },
  sockets: {
    connect() {
       console.log('connected');
    },
    
    ping(position) {
      this.center = {
        ...position
      };
      this.polygon = [
        { lat: position.lat - 0.000900 , lng: position.lng + 0.000900},
        { lat: position.lat + 0.000900 , lng: position.lng + 0.000900},
        { lat: position.lat - 0.000900 , lng: position.lng + 0.000900},
        { lat: position.lat - 0.000900 , lng: position.lng - 0.000900},
        { lat: position.lat + 0.000900 , lng: position.lng - 0.000900},
        { lat: position.lat - 0.000900 , lng: position.lng - 0.000900},
        { lat: position.lat + 0.000900 , lng: position.lng - 0.000900},
        { lat: position.lat + 0.000900 , lng: position.lng + 0.000900}
      ]
      const latLng = new this.google.maps.LatLng(position);
      this.showLocationUpdate = true;
      this.message = "The user's location has changed";
      if (
        !this.google.maps.geometry.poly.containsLocation(
          latLng,
          this.theRanchPolygon
        )
      ) {
        this.showAlert = true;
      } else {
        this.message = "The user is currently in the ranch";
      }
    }
  },
  computed: {
    google: gmapApi
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then(() => {
      this.theRanchPolygon = new this.google.maps.Polygon({
        paths: this.polygon
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  h3 {
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  .alert {
    background: #f14343;
    color: white;
    padding: 15px;
    border-radius: 5px;
    p {
      margin: 0;
    }
  }
  .location {
    background: green;
    margin-top: 20px;
  }
}
</style>