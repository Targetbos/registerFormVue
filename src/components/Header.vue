<template>
  <header class="header">
    <div class="header__container container">
      <a href="#">
        <img src="assets/images/logo.png" alt="Logo Company" class="header__logo">
        <div class="header__title">{{ title }}</div>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props:{
      title: String
  },
}
</script>

<style lang="scss">

.header{
  background: #333; 
  &__container{
    display:flex;
    align-items:center;
    padding: 1rem;
    & a{
      width: 22rem;
    }
  }
  &__logo{
    width: 4rem;
    float:left;
    margin-right: 1rem;
  }
  &__title{
    display: flex;
    align-items: center;
    line-height: 4rem;
    font-size: 1.8rem;    
    color: #eee;
  }
}
</style>
