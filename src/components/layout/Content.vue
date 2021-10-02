<template>
  <div id="Content">
      <div class="content-wrapper">
          <router-view></router-view>
          <!-- <h2>Hello {{title}}</h2> -->
      </div>
  </div>
</template>

<script>

export default {
    props:[
        "title"
    ]
}
</script>

<style>
.content-wrapper{
  margin: 24px;
  padding: 24px;
  border-width: 1px;
  border-color: grey;
  border-style: dashed;

}
</style>