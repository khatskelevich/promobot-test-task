<template>

  <div class="products">
    <splide :slides="products" :options="options">
      <splide-slide v-for="(item, key) in products" :key="key">
        <div class="product-container">
          <div class="product-item" @click="toProductCard(item)">
            <img class="item-img" alt="" :src="require(`@/assets/products/${key+1}.jpg`)">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-price">{{ item.price | currency}}</div>
          </div>
          <button class="button" @click="addToCart(item)">Add to cart</button>
        </div>
      </splide-slide>
    </splide>

    <portal v-if="showModal" to="modal">
      <ProductCard :item="productDetails" @close="show = false"/>
    </portal>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import ProductCard from "@/components/ProductCard";

export default {
  components: {
    ProductCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      show: false,
      productDetails: Object,
      options: {
        // heightRatio: 0.3,
        perPage: 3,
      }
    }
  },
  computed: {
    ...mapGetters('products', {products: 'getProducts'}),
    showModal() {
      return this.show;
    },
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    getImage(key) {
      return require("@/assets/products/" + (key + 1) + ".jpg");
    },
    toProductCard(item) {
      this.show = true;
      this.productDetails = {...item};
    }
  }
}
</script>

<style>
.products {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.product-container {
  margin: 14px;
  padding: 5px;
  border-radius: 3px;
  box-shadow: 0 14px 12px rgba(0, 0, 0, 0.25), 0 10px 1px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-flow: column wrap;
  cursor: pointer;
}

.product-item {
  flex: 1 0 150px;
}

.product-item .item-img {
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
}

.product-item .item-price {
  min-height: 30px;
}

.products .button {
  flex: 0 0 50px;
  background-color: #4c5458;
  color: white;
  padding: 8px;
  border-radius: 3px;
  min-width: 150px;
}
</style>