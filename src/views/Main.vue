<template>
  <div class="products">
    <div v-for="(item, key) in products" class="products-item" @click="toProductCard(item)">
      <div class="item-container item-img">
        <img alt="" :src="require(`@/assets/products/${key+1}.jpg`)">
      </div>
      <div class="item-container item-options">
        <div class="item-name">{{ item.name }}</div>
        <div class="item-price">{{ item.price }}</div>
        <button class="button" @click="addToCart(item)">Добавить в корзину</button>
      </div>
    </div>

    <portal v-if="showModal" to="modal">
      <ProductCard :item="modalItem" @close="show = false"/>
    </portal>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ProductCard from "@/components/ProductCard";

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      show: false,
      modalItem: Object
    }
  },
  computed: {
    ...mapGetters('products', {products: 'getProducts'}),
    showModal() {
      return this.show;
    },
    cModalItem() {
      return this.modalItem;
    }
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    getImage(key) {
      return require("@/assets/products/" + (key + 1) + ".jpg");
    },
    toProductCard(item) {
      this.show = true;
      this.modalItem = {...item};
    }
  }
}
</script>

<style>
.products {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.products-item {
  border: 1px solid black;
  flex: 1 0 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item-container {
  flex: 1 0 200px;
}

.item-price {
  flex: 1 0 auto;
}

.item-img {
  height: 100px;
}
</style>