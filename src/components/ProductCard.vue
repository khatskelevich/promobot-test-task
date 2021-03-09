<template>

  <Modal @close="$emit('close')">
    <template v-slot:title>
      <h3>Product</h3>
    </template>
    <template v-slot:body>
      <div class="card-container">
        <div class="item-img">
          <img alt="" :src="require(`@/assets/products/${item.key}.jpg`)">
        </div>
        <div class="card-item">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-description">{{ item.description }}</div>
          <div class="item-price">{{ item.price | currency }}</div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <button class="modal-footer__button button" @click="addToCart(item)">Add to cart</button>
    </template>
  </Modal>

</template>

<script>
import Modal from "@/components/Modal";
import {mapActions} from "vuex";

export default {
  name: "ProductCard",
  components: {
    Modal
  },
  props: {
    item: Object
  },
  methods: {
    ...mapActions('cart', ['addToCart'])
  }
}
</script>

<style>

.card-container {
  display: flex;
  padding: 5px;
  max-height: 400px;
}

.card-container .item-img {
  max-width: 200px;
}

.card-item {
  flex: 1 0 auto;
  display: flex;
  flex-flow: column wrap;
  text-align: left;
  margin-left: 20px;
}

.card-item .item-name {
  font-weight: bolder;
  font-size: 18px;
  flex: 0 0 25px;
}

.card-item .item-description {
  flex: 1 0 auto;
}

.card-item .item-price {
  flex: 0 0 20px;
}

/*.card-container .button {*/
/*  flex: 0 0 35px;*/
/*  background-color: #4c5458;*/
/*  color: white;*/
/*  padding: 8px;*/
/*  border-radius: 3px;*/
/*  min-width: 150px;*/
/*}*/

</style>