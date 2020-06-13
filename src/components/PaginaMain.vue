<template>
  <div>
    <Mainhead/>
    <b-row>
      <b-img src="../../img/banner.jpg" height="300" width="1800">
      </b-img>
    </b-row>
    <b-row class="produtos-mais-comprados">
      <b-icon class="align-self-center" icon="star-fill" font-scale="1"></b-icon>
      <span style="margin-left:10px">
        Produtos mais comprados
      </span>
    </b-row >
    <b-row>
      <b-col v-for="listFotos in fotos" :key="listFotos.id" class="produtos">
      </b-col>
    </b-row>
    <b-row class="produtos-mais-comprados">
      <b-icon class="align-self-center" icon="star-fill" font-scale="1"></b-icon>
      <span style="margin-left:10px">
        Lojas melhores avaliadas
      </span>
    </b-row >
    <b-row>
      <b-col v-for="listLojas in lojas" :key="listLojas.id" class="lojas">
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
      {foto:"../../img/brinquedo2.jpg", id:5}],
      lojas:[{loja:"../../img/loja1.png", id:1},{loja:"../../img/racao2.jpg", id:2},
      {loja:"../../img/racao3.jpg", id:3},{loja:"../../img/brinquedo1.jpg", id:4},
      {loja:"../../img/brinquedo2.jpg", id:5}],
      loja1: false
    }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.produtos-mais-comprados{
  margin-left: 133px;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight:bold;
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
.lojas{
  background-image: url("../../img/loja1.png");
  width: 300px;
  height: 200px;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #707070;
  margin-bottom: 20px;
}

</style>
