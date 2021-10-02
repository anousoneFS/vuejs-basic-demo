<template>
  <div id="header">
      <ul>
        <li><router-link to="/"><button>Home</button></router-link></li>
        <li><router-link to="/register"><button>REGISTER</button></router-link></li>
        <li><router-link to="/freestyle"><button>FREESTYLE</button></router-link></li>
        <li><router-link to="/course"><button>COURSE</button></router-link></li>
        <li><router-link to="/Image"><button>IMAGE</button></router-link></li>
        <li><router-link to="/form"><button>FORM</button></router-link></li>
        <li><router-link to="/Clock"><button>CLOCK</button></router-link></li>
        <li><router-link to="/Condition"><button>Condition</button></router-link></li>
        <li><router-link to="/Loop"><button>Loop</button></router-link></li>
        <li><router-link to="/Hook"><button>Hook</button></router-link></li>
        <li><router-link to="/var"><button>var</button></router-link></li>
        <li><router-link to="/Dom"><button>Dom</button></router-link></li>
        <li><router-link to="/Fillter"><button>Fillter</button></router-link></li>
     </ul>
  </div>
</template>

<script>
export default {
name:"Header",

}
</script>

<style scoped>
ul{
    margin:0;
    padding:0;
  }

  li{
    display:inline;
    margin-right:8px;
  }
</style>