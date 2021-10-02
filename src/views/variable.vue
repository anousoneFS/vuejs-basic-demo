<template>
  <div id="variable">
      <h2>my variable</h2>
      <div>
          <h2>{{time}}</h2>
      </div>
      <div>
          <h2>{{Math.random()}}</h2>
      </div>
      <div>
          <h3>timestramp = {{timestramp}}</h3>
      </div>
      <button @click="timestramp = Date.now()">time stramp</button>
      <button @click="time++">update time</button>
  </div>
</template>

<script>
export default {
    created(){
        this.timestramp=0;
    },
    name:"variable",
    data() {
        return {
            time:0
        }
    },
    mounted(){
        setInterval(()=>{
            // this.time++;    //State variable
            // console.log("timestramp = "+this.timestramp);
        }, 100)
    }
};
</script>

<style>

</style>