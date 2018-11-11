<template>
  <div id= "map">
<gmap-map v-bind:center="center" v-bind:zoom="14.5"
    style="height:  750px">
    <gmap-marker v-bind:key="index" v-for="(m,index) in
    markers" v-bind:position="m.position"
    v-bind:clickable="true"></gmap-marker>
</gmap-map>
  </div>
</template>

<script>
export default {
 // name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 7.007430, lng: 100.502060 },
      markers: [
          {
              position:{ lat: 7.007451, lng: 100.5000493 }

          },{
              position:{ lat:7.0066264, lng: 100.4996118 }

          },{
              position:{ lat: 6.9985061, lng: 100.4970043 }

          },{
              position:{ lat: 6.997792, lng: 100.4966737 }

          },{
              position:{ lat: 6.9988287, lng: 100.4976601 }

          }
      ]
    };
  }
}
 
</script>

<style scoped>

</style>
