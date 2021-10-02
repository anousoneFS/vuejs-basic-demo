<template>
  <div id="form">
      <center>
      <h2>demo Register</h2>
      <form v-on:submit="submit">
          <!-- first name -->
          <div>
          <label for="first_name">first name</label>
          <input type="text" name="first_name" v-model.trim="applicant.first_name">
          </div>

            <!-- last name -->
          <div class="marginTop">
              <label for="last_name">last name</label>
              <input type="text" name="last_name" v-model.lazy="applicant.last_name">
          </div>

            <!-- male -->
          <div class="marginTop">
              <label for="sex">male</label>
              <input type="radio" name="sex" value="male" v-model="applicant.sex">
          </div>

            <!-- female -->
          <div class="marginTop">
              <label for="sex">female</label>
              <input type="radio" name="sex" value="female" v-model="applicant.sex">
          </div>

        <!-- age -->
        <div class="marginTop">
            <label for="age">Age</label>
            <input type="number" name="age" v-model.number="applicant.age">
        </div>

        <!-- course -->
        <div class="marginTop">
            <select name="courses" v-model="applicant.courses">
                <option value="python">python</option>
                <option value="java">java</option>
                <option value="c">c</option>
            </select>
        </div>

        <!-- button -->
        <div class="marginTop">
        <button type="button" @click.exact="clear" @click.alt="useDefault">clear</button>
        <button type="submit" @click="submit">SUBMIT</button>
        </div>
     </form>

      <div style="margin-top:18px; color:red">#Spy {{JSON.stringify(applicant)}}</div>
      </center>
  </div>
</template>

<script>
export default {
    data() {
        return {
            applicant:{
                first_name:"",
                last_name:"",
                sex:"male",
                courses:"python",
                age:0
            }
        }
    },
    methods:{
        clear(){
            this.applicant = {
                first_name:"",
                last_name:"",
                sex:"male",
                courses:"" ,
                age:0
            }
        },
        useDefault(){
            this.applicant={
               first_name:"UNKNOW",
                last_name:"UNKNOW",
                sex:"male",
                courses:"python" ,
                age:20 
            }
        },
        submit(event){
            event.preventDefault();
            alert(JSON.stringify(this.applicant))
        }
    }
}
</script>

<style>
.marginTop{
    margin-top: 20px;
}
</style>