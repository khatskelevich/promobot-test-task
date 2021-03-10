<template>
  <transition name="fade" appear>
    <div class="modal-shadow" @click.self="closeModal">
      <div class="modal">

        <div class="modal-title">
          <div class="modal-close" @click="closeModal">&#10006;</div>
          <slot name="title"></slot>
        </div>

        <div class="modal-content">
          <slot name="body"></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <div class="modal-footer">
              <button class="modal-footer__button button" @click="closeModal">
                Close
              </button>
            </div>
          </slot>
        </div>

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
  max-height: 50vh;
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
  height: 40px;
  line-height: 40px;
  color: #20b2aa;
}

.modal-content {
  height: calc(50vh - 100px);
  margin-bottom: 20px;
}

.modal-footer {
  height: 40px;
  width: 250px;
  display: flex;
  margin: 0 auto;
}

.modal-footer__button {
  height: 40px;
  background-color: #20b2aa;
  flex: 1 1 150px;
  color: #fff;
  padding: 8px;
  margin: 0 5px;
  border-radius: 8px;
}
</style>