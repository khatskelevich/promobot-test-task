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
    let response = api.loadProducts();
    response.then(
        result => this.setProducts(result)
    );
  },
  methods: {
    ...mapMutations('products', ['setProducts'])
  }
}
</script>

<style>
html, body, h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}

body {
  background: #fcfcfc;
}

img {
  max-width: 100%;
  max-height: 100%;
  height: auto;
}

button {
  margin: 0;
  padding: 0;
  cursor: pointer;
}

button,
button:active,
button:focus {
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.button {
  border: none;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  transition: opacity .3s ease;
}

.button:hover {
  opacity: 0.9;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
