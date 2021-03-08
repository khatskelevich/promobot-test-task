<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <portal-target name="modal" multiple></portal-target>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import {mapMutations} from "vuex";
import Modal from "@/components/Modal";
import api from "@/./api.js"

export default {
  name: "App",
  components: {Navigation, Modal},
  created() {
    this.setProducts(api.loadProducts());
  },
  methods: {
    ...mapMutations('products', ['setProducts'])
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background: #fcfcfc;
}

img {
  max-width: 100%;
  height: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
