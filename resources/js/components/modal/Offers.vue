<template>
  <div class="modal__container">
    <div class="modal__overlay" @click="closeModal"></div>
    <div class="modal__card">
      <div class="modal__header" >
        <i class="fa fa-times" @click="closeModal"></i>
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        closeModal(){
            this.$emit('closeModal')
        }
    }
};
</script>

<style lang="scss">
.modal__container {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
}
.modal__overlay {
  height: 100%;
  width: 100%;
  background: rgba($color: #000, $alpha: 0.5);
  left: 0;
  top: 0;
  position: fixed;
  z-index: 999;
}
.modal__card {
  background: #fff;
  max-width: 400px;
  padding: 10px;
  margin: auto;
  z-index: 9999;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  /* box-shadow: 2px 2px 3px #eee; */
}

.modal__header {
  margin-bottom: 15px;
    margin-right: 5px;
    text-align: end;

    i{
        font-size: 18px;
        cursor: pointer;
    }
}
</style>