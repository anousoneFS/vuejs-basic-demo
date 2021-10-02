<template>
  <div id="demoClock">
      <!-- <Clock>
          <span style="color:red">anousone</span>
      </Clock> -->

      <Clock>
          <span style="color:red">ເວລາປະຈຸບັນ</span>
          <template v-slot:header>
              <h2>Header</h2>
          </template>

          <template v-slot:footer>
              <h2>footer slot</h2>
          </template>

      </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue"
export default {
    name:"DemoClock",
 components:{
     Clock
 }   
}
</script>

<style>

</style>