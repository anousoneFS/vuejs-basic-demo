<template>
  <div>
      <h2>life cycle hook</h2>
      <div>{{num}}</div>
      <button @click="addnum">add num</button>
  </div>
</template>

<script>
export default {
   name:"cycle",
   beforeCreate(){
       console.log("before Create");
   },
   methods:{
       addnum(){
           this.num = this.num + 1;
       }
   },
   data() {
       return {
           num:0
       }
   },
   created(){
       console.log("created");
   },
   beforeMount(){
       console.log("before Mount");
   },
   mounted(){
       console.log("mounted");
   },
   beforeUpdate(){
       console.log("before Update");
   },
   updated(){
       console.log("Updated");
   },
   beforeDestroy(){
       console.log("before Destroy");
   },
   destroyed(){
       console.log("destroyed");
   }

}
</script>

<style>

</style>