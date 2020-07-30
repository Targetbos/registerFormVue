<template>
  <div class="form__inputBlock">
    <label class="form__inputTitle"> {{title}} <sup v-if="required" style="color:red">*</sup>
      <select :name="name" class="form__select" @change="$emit('inputVal', $event.target.value, $event.target.name)" :multiple="multiple" :required="required" :size="size">
        <option disabled value="none" selected>{{ firstItem }}</option>
        <option v-for="item in items" :value="item.value">{{ item.text }}</option>
      </select>    
      <i class="selectIcon"></i>
    </label>
  </div>
</template>
<script>
export default {
  name: "FormSelect",
  props:{
    firstItem: String,
    items:Array,
    title:String,
    name: String,
    required: Boolean,
    multiple: Boolean,
    errorText: String,
    size: String
  }
}
</script>
<style lang="scss">
  .form{
    &__inputBlock{
    position:relative;
    }
    &__select{
      cursor: pointer;
      margin-top: 0.3rem;
    }
  }
  .selectIcon{
    position:absolute;
    display: block;
    width:0.7rem;
    height: 0.7rem;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
    top:2.4rem;
    right:1rem;
    transform: rotate(45deg);
    pointer-events:none;
  }
</style>
