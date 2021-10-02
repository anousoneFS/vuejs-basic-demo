<template>
  <div>
      <h2 ref="title">waiting dom element</h2>
      <input 
      type="text"
      ref="input1"
      placeholder="This will be focused automatically"
      >
      
  </div>
</template>

<script>
export default {
    mounted(){
        this.$refs["title"].textContent = "Using Dom element";
        this.$refs["input1"].focus();
    }
}
</script>

<style>

</style>