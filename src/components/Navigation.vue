<template>
  <nav class="nav">
    <div class="nav__left">
      <router-link class="nav-item link" active-class="link__active" to="/">Home</router-link>
      <router-link class="nav-item link" active-class="link__active" to="/about">About</router-link>
    </div>
    <div class="nav__right">
      <div class="cart">
        <img src="../assets/shopping-bags.svg" alt="Cart">
      </div>
    </div>

    <portal v-if="false" to="modal">
      <Modal>
        <slot name="title">
          <h3>Cart</h3>
        </slot>
        <slot name="body">
          <Cart></Cart>
        </slot>
      </Modal>
    </portal>

  </nav>
</template>

<script>
import Modal from "@/components/Modal";
import Cart from "@/components/Cart";
export default {
  name: "Navigation",
  components: {
    Modal,
    Cart
  },
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

.cart {
  cursor: pointer;
  transition: width 0.8s;
}

.cart:hover {
  width: 33px;
}

.link {
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: background-color 1s;
}

.link:hover {
  background-color: rgb(67, 71, 74);
}

.cart {
  width: 30px;
}
</style>