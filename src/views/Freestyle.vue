<template>
    <div app="freestyle">
        <center>
        <h1>This is my freestyle football</h1>
        <h2>what is your name?</h2>
        <h3>do you want me?</h3>
        <input type="text" placeholder="enter your text" v-model="Message">
        <div>
            <h2>{{Message}}</h2>
        </div>
        <button @click="func">Reset</button>
        <h2>say hi</h2>
        <button v-on:click="clickalert">ClickMe</button>
        <button v-on:click="clickalert2('welcome')">ClickMe2</button>
        <button @click="Logged = true">login</button>
        <h2 v-if="Logged">Yahoo</h2>
        
        </center>
   </div>
</template>

<script>
export default {
name:"freestyle",
 data() {
     return {
         Message:"anousone",
         Logged: false,
        //  mes:"reload"
     }
 },
    mounted() {
        this.freefrom()
    },
 methods:{
     freefrom(){
         console.log("reload")
     },
     func(){
         this.Message=""
     },
     clickalert(){
         alert("Hi")
     },
     clickalert2(text){
         alert(text+" "+this.Message)
     }

 },
}
</script>

<style>

</style>