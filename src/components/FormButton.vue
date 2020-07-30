<template>
  <div class="form__buttonBlock">
      <input type="submit" :value="textBtn" class="form__buttonSend">
  </div>
</template>

<script>
export default {
  name: "FormButton",
  props: {
    textBtn: String,
  }
}
</script>

<style lang="scss" scoped>
  .form{
    &__buttonBlock{
      display: block;
      margin: 1rem auto;
    }
    &__buttonSend{
      display: block;
      box-sizing: border-box;
      margin: 0 auto;
      max-width: 12rem;
      padding: 0.5rem 4rem;
      border: 1px solid #999;
      box-shadow: 0 0 1rem 0 #999;
      background: #444;
      cursor: pointer;
      transition: background 0.3s, boxShadow 0.3s;
      font-weight: 400;
      font-size: 1rem;
      color: #eee;
      &:hover{
        background: #555;
      }
      &:active{
        background: #666;
        box-shadow: inset 0 0 1rem 0 #333;
      }
    }
  }
</style>

