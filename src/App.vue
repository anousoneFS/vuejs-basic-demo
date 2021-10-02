<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer 
    @onClock="onClock " 
    title="my footer"
     color="red"
    />
    <!-- <div class="clock">{{time}}</div> -->
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
import moment from "moment";
import Content from "@/components/layout/Content.vue"

export default {
  name:"app",
  components:{
    Header,
    Footer,
    Content
  },
  methods:{
    onClock(value){
      // this.time = value;
      this.time = moment(value).format("MM/DD/YYYY hh:mm:ss")
    }
  },
  data() {
    return {
      time:""
    }
  },
};

</script>


<style>
.clock{
  font-size: 20px;
}

</style>
