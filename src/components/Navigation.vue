<template>
  <nav class="nav">
    <div class="nav__left">
      <router-link class="nav-item link" active-class="link__active" to="/">Home</router-link>
      <router-link class="nav-item link" active-class="link__active" to="/about">About</router-link>
    </div>
    <div class="nav__right">
      <div class="nav-cart" @click="isCartOpen = true">
        <img src="../assets/shopping-bags.svg" alt="Cart">
        <div v-if="counter" class="counter">{{ counter }}</div>
      </div>
    </div>

    <portal v-if="cShowCart" to="modal">
      <Cart @close="isCartOpen = false"></Cart>
    </portal>

  </nav>
</template>

<script>
import Cart from "@/components/Cart";
import {mapGetters} from "vuex";

export default {
  name: "Navigation",
  components: {
    Cart
  },
  data() {
    return {
      isCartOpen: false
    }
  },
  computed: {
    ...mapGetters('cart', {counter: 'getCartItemsCount'}),
    cShowCart() {
      return this.isCartOpen;
    }
  }
}
</script>

<style>

.nav {
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 10px;
  box-shadow: 0 6px 4px -4px rgba(0, 0, 0, .2);
  background-color: rgba(2, 13, 19, 0.7);
}

.nav__left {
  display: flex;
  margin-left: 50px;
}

.nav__right {
  margin-right: 30px;
  display: flex;
  align-items: center;
}

.nav-item {
  min-width: 60px;
  padding: 0 5px;
  line-height: 50px;
}

.nav-cart {
  cursor: pointer;
  transition: width 0.3s;
  width: 30px;
  position: relative;
}

.nav-cart:hover {
  width: 33px;
}

.nav-cart .counter {
  position: absolute;
  bottom: -5px;
  left: -10px;
  background-color: white;
  border-radius: 20px;
  width: 21px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-weight: 600;
}

.nav .link {
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: background-color .5s;
}

.nav .link:hover {
  background-color: rgb(67, 71, 74);
}
</style>