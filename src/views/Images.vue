<template>
  <div id="image">
      <h1>Show Image</h1>
      <img v-bind:src="urlimage" alt="people" v-bind:height="h">
      <br>
      <a :href="link">My Website</a>
      <div :class="[false ? error :'', weight]">style v-bind</div>
      <div :style="{color, fontSize}">style binding</div>
      <div style="color:green; font-size:30px">style binding from style nomal</div>
      <div class="myfont">my font</div>
      <div :class="font">my font</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            urlimage:"https://cdn.pixabay.com/photo/2020/09/09/13/03/bike-riding-5557589_1280.png",
            h:200,
            link:"http://www.github.com",
            error:"error_class",
            weight:"important",
            color: "violet",
            fontSize: "30px",
            font:"myfont"
        }
    },
}
</script>

<style scoped>

.error_class{
    background-color: red;
    color: white;
}
.important{
    font-weight:900;
    margin-left: 8px;
}
.myfont{
    color:green;
    font-size: 30px;
}

</style>