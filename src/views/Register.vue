<template>
  <div id="mo1">
    <h1>Message text</h1>
    <input v-model="Message" type="text" placeholder="Enter your message">
    <div>{{Message}}</div>
    <button @click="Message=''">Reset</button>
  </div>
</template>

<script>
export default {
    name:"mo1",
    data() {
    return {
      Message:""
    }
    },
  methods: {
    onClickAdd(){
      this.num = this.num + 1
    }
     },
}
</script>

<style>

</style>