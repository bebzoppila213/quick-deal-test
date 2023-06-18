<template>
  <div id="app">
    <header-vue></header-vue> 
    <router-view/>
  </div>
</template>



<script>
import HeaderVue from './components/HeaderVue.vue';

export default {
  components:{
    HeaderVue
  }
}

</script>


<style>
#app{
  max-width: 300px;
  margin: 0 auto;
}
</style>
