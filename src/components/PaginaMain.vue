<template>
  <div>
    <Mainhead/>
    <b-row>
      <b-img src="../../img/banner.jpg" height="300" width="1800">
      </b-img>
    </b-row>
    <b-row>
      <h2 style="margin-left:30px">
        Produtos mais comprados
      </h2>
    </b-row >
    <b-row>
      <b-col v-for="listFotos in fotos" :key="listFotos.id" class="produtos"
     >
    

      </b-col>
    </b-row>
  </div>
</template>

<script>
import Mainhead from '../components/Mainhead'
export default {
  name: 'HelloWorld',
  components: {
    Mainhead
  },
  props: {
    msg: String
  },
  data(){
    return{
      fotos:[{foto:"../../img/racao2.jpg", id:1},{foto:"../../img/racao2.jpg", id:2},
      {foto:"../../img/racao3.jpg", id:3},{foto:"../../img/brinquedo1.jpg", id:4},
      {foto:"../../img/brinquedo2.jpg", id:5}]
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.melhor-avaliada{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  min-width: 388px;
  min-height: 223px;
}
.produtos{
  width: 388px;
  height: 223px;
  text-align: center;
  background-image: url("../../img/racao.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #707070;
}

</style>
