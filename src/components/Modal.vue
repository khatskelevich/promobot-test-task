<template>
  <transition name="modal" appear>
    <div class="modal-shadow" @click.self="closeModal">
      <div class="modal">
        <div class="modal-close" @click="closeModal">&#10006;</div>
        <slot name="title" class="modal-title">
          <!--            <h3 v-if="title">{{title}}</h3>-->
        </slot>
        <hr>
        <slot name="body" class="modal-content">
          <!--            <p v-if="body" v-html="body"></p>-->
        </slot>
        <hr>
        <slot name="footer">
          <div class="modal-footer">
            <button class="modal-footer__button button" @click="closeModal">
              Close
            </button>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: false,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  },
  computed: {
    // ...mapGetters({
    //   title: 'getTitle',
    //   body: 'getBody'
    // })
  }
}
</script>

<style>
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
  z-index: 10;
}

.modal {
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  min-width: 420px;
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-close {
  border-radius: 50%;
  color: #fff;
  background: #20b2aa;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 7px;
  right: 7px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.modal-title {
  color: #20b2aa;
}

.modal-content {
  margin-bottom: 20px
}

.modal-footer__button {
  background-color: #20b2aa;
  color: #fff;
  padding: 8px;
  margin: 0 5px;
  border-radius: 8px;
  min-width: 150px;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .3s ease;
}

.modal-enter, .modal-leave-to {
  opacity: 0
}
</style>