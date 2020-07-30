<template>
  <div class="modal-window">
    <div class="modal-window__wrap" v-on:click="$emit('modalClick')">
        <span> Новый клиент создан успешно</span>
        <i class="modal-window__icon-close"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props:{}
}
</script>

<style lang="scss" scoped>
  .modal-window{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    &__wrap{
      display:flex;
      align-items: center;
      justify-content: center;
      position:relative;
      width: 100%;
      max-width:30rem;
      height: 10rem;
      background: #eee;
      border-radius: 1rem;
      box-shadow: 0 0 1rem 0 #333;
      & span{
        text-align: center;
        font-size: 1.2rem;
        font-weight: 700;

      }
    }
    &__icon-close{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width:1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background: rgb(250, 166, 166); 
      right: -0.5rem;
      top: -0.5rem;
      box-shadow: 0 0 0.3rem 0 #000;
      font-style:normal;
      &:after{
        content:"\2573";
        font-size: 0.5rem;
        font-weight: 700;
        margin-left: 0.1rem;
        margin-bottom: 0.1rem;
      }
      &:hover{
        background: #999;
        color:#fff;
      }
      &:active{
      box-shadow:inset 0 0 0.3rem 0 #000;

      }
    }

  }

</style>
