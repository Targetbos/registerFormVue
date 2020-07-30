<template>
  <div class="form__checkboxBlock">
    <label class="form__checkboxLabel"> <sup v-if="required" style="color:red">*</sup>
      <input type="checkbox" :name="name" class="form__input" @change="$emit('inputVal', $event.target.checked, $event.target.name)" :required="required" :checked="checked"/>
      <div class="form__checkboxIcon"></div>
      <span class="form__checkboxText"> {{checkboxText}}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "FormCheckbox",
  props:{
    errorText: String,
    name: String,
    required: Boolean,
    checkboxText: String,
    checked: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .form{
    &__checkboxIcon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #999;
      border-radius: 0.25rem;
      width: 1.13rem;
      height: 1.13rem;
      margin-right: 0.65rem;
    }
    &__checkboxLabel{
      display: flex;
      align-items: center;
      line-height: 1.6rem;  
      font-size: 1rem;
    }
    &__input{
      display: none;
    }
    &__checkboxLabel > &__input:checked + &__checkboxIcon{
      border: 1px solid #333;
    }
    &__checkboxLabel > &__input:checked + &__checkboxIcon:before{
      content: " ";
      width: 0.31rem;
      height: 0.6rem;
      border-bottom: 0.125rem solid #333;
      border-right: 0.125rem solid #333;
      transform: rotate(45deg); 
    }
  }
</style>
