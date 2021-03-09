<template>
  <div>
    <ul v-if="cartLength">
      <li v-for="(item, key) in cart">
        {{item.product.name}}, {{item.product.price}} * {{item.quantity}}
      </li>
    </ul>
    <div v-else class="plug">Cart empty.</div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters('cart', {cart: 'getCartItems', cartLength: 'getCartItemsCount'})
  }
}
</script>

<style scoped>

</style>