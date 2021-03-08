<template>
  <div class="cart">
    <ul>
      <li v-for="(item, key) in cart">
        {{item.product.name}}, {{item.product.price}} * {{item.quantity}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters('cart', {cart: 'getCartItems'})
  }
}
</script>

<style scoped>

</style>