<template>
  <div id="Loop">
      <ul>
          <li v-for="(item, index) in ['iphone', 'android', 'mac', 'window', 'mac']" :key="index">{{item}}</li>
      </ul>
      <hr>
      <ul>
          <li v-for="(item, index) in myList" :key="index">{{item.title}}, price = {{item.price}}</li>
      </ul>
      <hr>
      <ul>
          <li v-for="({title, price}, index) in myList" :key="index">{{title}}, price = {{price}}</li>
      </ul>
      <hr>
      <div class="margin">
      <label for="title">Course Name: </label>
      <input type="text" name="title" v-model="Course.title" placeholder="Title"><br>
      </div>
      <div class="margin">
     <label for="price">Price: </label>
      <input type="number" name="price" v-model="Course.price" placeholder="Price"><br>
      </div>
      <button type="submit" @click="addCourse">submit</button>
      <ul>
          <li v-for="(Course, index) in dynamicCourse" :key="index">{{Course.title}}, price = {{Course.price}} <button @click="removeCourse(index)">X </button> </li> 
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            Course:{title:"", price:""},
            dynamicCourse:[],
            myList:[
                {title:"ios", price:1000},
                {title:"android", price:500},
                {title:"iphone", price:800},
            ]
        }
    },
    methods:{
        addCourse(){
            this.dynamicCourse.push(this.Course)
            this.Course={title:"", price:0}
        },
        removeCourse(index){
            this.dynamicCourse.splice(index, 1)
        }
    }
}
</script>

<style>
.margin{
    margin-top:10px;
}
</style>