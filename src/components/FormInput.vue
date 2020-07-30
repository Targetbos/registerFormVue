<template>
  <div class="form__inputBlock">
    <label class="form__inputTitle"> {{title}} <sup v-if="required" style="color:red">*</sup>
      <input v-if="type != 'tel'" :type="type" :name="name" :placeholder="placeholder" :maxlength="maxLength" class="form__input" @change="$emit('inputVal', $event.target.value, $event.target.name)" :required="required"/>
      <input v-if="type == 'tel'" pattern="7[0-9]{3}[0-9]{3}[0-9]{4}" maxlength="11" :type="type" :name="name" placeholder="79999999999" class="form__input" @change="$emit('inputVal', $event.target.value, $event.target.name)"  />
      <span class="error">{{errorText}} </span>
    </label>
  </div>
</template>

<script>
export default {
  name:"FormInput",
  props:{
    title: String,
    name: String,
    placeholder: String,
    required: Boolean,
    type: String,
    errorText: String,
    maxLength: String
  }
}
</script>

<style lang="scss">
  .form{
    &__inputBlock{
      display: block;
      margin: 1rem 0;
    }
    &__inputTitle{
      font-weight: 400;
      font-size: 1rem;
    }
    &__input{
      margin-top:0.3rem;
    }
  }
  .error{
    font-size:0.5rem;
    color:red;
  }
</style>

