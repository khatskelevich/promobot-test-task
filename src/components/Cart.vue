<template>

  <Modal @close="$emit('close')">
    <template v-slot:title>
      <h3>Cart</h3>
    </template>
    <template v-slot:body>
      <div id="cart" class="cart" v-if="cartLength">
        <div class="cart-item" v-for="(item, key) in cart">
          <span class="cart-description">
            {{ item.product.name }}, {{ item.product.price | currency }} x {{ item.quantity }}
          </span>
          <button class="cart-button button" @click="incrementQuantity(item.product)">+</button>
          <!--        <input type="number" value="1" min="1">-->
          <button class="cart-button button" @click="decrementQuantity(item.product)">-</button>
          <button class="cart-button button" @click="removeFromCart(item)">
            <img class="cart-img" src="../assets/delete.svg"
                 alt="Delete"></button>
        </div>
        <button></button>
      </div>
      <div v-else class="plug">Cart empty.</div>
    </template>
    <template v-slot:footer>
      <div class="modal-footer">
        <button v-if="cartLength" class="modal-footer__button button" @click="print">
          Print
        </button>
        <button class="modal-footer__button button" @click="$emit('close')">
          Close
        </button>
      </div>
    </template>
  </Modal>


</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Modal from "@/components/Modal";

export default {
  name: "Cart",
  components: {
    Modal
  },
  computed: {
    ...mapGetters('cart', {cart: 'getCartItems', cartLength: 'getCartItemsCount'}),
  },
  methods: {
    ...mapActions('cart', ['removeFromCart', 'decrementQuantity', 'incrementQuantity']),
    print(){
      window.print();
    },
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.cart .cart-item {
  display: inline-flex;
  width: 100%;
}

.cart .cart-item > * {
  margin: 5px;
}

.cart .cart-button {
  height: 30px;
  width: 30px;
  padding: 2px;
  line-height: 30px;
  border-radius: 3px;
}

.cart .cart-description {
  flex: 1 0 auto;
  text-align: left;
  height: 30px;
  line-height: 30px;
}

</style>