<template>

  <Modal @close="$emit('close')">
    <template v-slot:title>
      <h3>Product</h3>
    </template>
    <template v-slot:body>
      Name: {{ item.name }}.
      Description: {{ item.description }}.
      Price: {{ item.price }}
    </template>
  </Modal>

</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "ProductCard",
  components: {
    Modal
  },
  props: {
    item: Object
  },
}
</script>

<style scoped>

</style>