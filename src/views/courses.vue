<template>
  <div app="Courses">
      <h2>My Courses</h2>
        <ul>
            <li v-for="(item, index) in courses" :key="index">{{index+1}}.{{item}}</li>
        </ul>
        <h2>Random name</h2>
        <h3>my name is {{fullname()}}</h3>
        <h4>my number = {{randomnumber()}}</h4>
        <h4>my number2 = {{randomnumber()}}</h4>
        <h4>my number compute = {{randomnumbercompute}}</h4>
        <h4>my number compute2 = {{randomnumbercompute}}</h4>
  </div>
</template>

<script>
export default {
    name:"course555",
    methods:{
        fullname(){
            return this.firstname+" "+this.lastname
        },
        randomnumber(){
            return Math.random();
        }
    },
    computed:{
        randomnumbercompute(){
            return Math.random();
        }
    },
    data() {
        return {
            courses:[
                "python",
                "machine learning",
                "deep learning",
                "IOT",
                "flask",
                "IOS app"
            ],
            firstname:"anousone",
            lastname:"worlakoumman"
        }
    },

}
</script>

<style>

</style>