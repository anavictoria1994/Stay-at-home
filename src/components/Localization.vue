<template>
  <div>
    <!--<Header/>-->
    <div class="content">
      <h2>Welcome to "The Ranch"</h2>
      <!--<img src="../assets/placeholder.svg" alt> -->
      <h6>Enable location to get updates</h6>
      <router-link to="/admin">Admin</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Header from "@/components/Header.vue";
export default {
  name: "Localization",
  /*components: {
    Header
  },*/
  mounted() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(position => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.$socket.emit("ping", location);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  img {
    height: 100px;
  }
  h6 {
    margin: 15px 0;
    opacity: 0.6;
  }
  a {
    background: mediumseagreen;
    padding: 12px 21px;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.3);
    font-weight: bold;
    font-size: 16px;
    color: whitesmoke;
    text-decoration: none;
    line-height: 1;
  }
}
</style>