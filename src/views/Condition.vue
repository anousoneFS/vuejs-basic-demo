<template>
  <div id="condition">
      <div v-if="x === 'A'">
          <h2>Anousone</h2>
      </div>

      <div v-else-if="x === 'B'">
          <h2>Bounkhong</h2>
      </div>
      <div v-else-if="x === 'C'">
          <h2>Chanthajonh</h2>
      </div>
      <div v-else>
          <h3>do not math anything</h3>
      </div>

      <div v-if="isShow">
          Blink
      </div>
      <div v-else>
          Blink else
      </div>
      <div v-show="isShow">
          v-show
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        setInterval(()=>{
            // this.isShow = !this.isShow;
            this.isShow = false;
        }, 1000)
    },
    data() {
        return {
            x:"B",
            isShow: true
        }
    },
}
</script>

<style>

</style>