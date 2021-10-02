<template>
  <div id="myfillter">

      <h2>{{1234 | currency("THB")}}</h2>
      <h2>{{2000000000 | bytes}}</h2>
      <h2>{{"anousone worlakoumman" | capitalize({onLyFirstLetter:true}) }}</h2>
      <h2>{{[1, 2, 3, 4] | reverseArray }}</h2>
  </div>
</template>

<script>
export default {
    name:"Filter",
    filters:{
        reverseArray(value){
            return value.slice().reverse();
        }
    }
}
</script>

<style>

</style>