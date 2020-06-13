<template>
   <div>
    <Mainhead/>
    <b-row class="lojaNome">
      <span>
        Petshop UCL
      </span>
      </b-row>
      <b-row class="descricaoLoja">
        <span>
          Rações e grande variedades para seu animal de estimação
        </span>
      </b-row>
      <b-row class="justify-content-center" >
        <b-col v-for="teste in array" :key="teste.id" class="produtos text-center">
          <b-img class="imagem-produtos" src="../../img/racao2.jpg" height="147" width="165"/>
          <b-row>
            <b-col class="descricao-produto">
              <p>
                Ração Royal Canin Mini Adult para Cães Adultos de Raças Pequenas com 10 Meses ou mais de Idade - 1 Kg
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="preco">
              <p>
                R$227,00
              </p>
            </b-col>
          </b-row>

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
      array:[{v:1,id:1},{v:2,id:2}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lojaNome{
    margin-left: 133px;
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: #3f3e3e;
    font-size: 32px;
    }
  .descricaoLoja{
    font-size: 16px;
    color: #717171;
    margin-left: 133px;
    font-family: Arial, Helvetica, sans-serif;
   }
  .produtos{
    border: 1px solid #707070;
    margin-top: 200px;
    margin-right: 5px;
    margin-left: 50px;
    max-width:261px;
    height: 500px;
    margin-bottom: 50px;
  }
  .imagem-produtos{
    margin-top:20px;
  }
  .descricao-produto{
    font-family: Arial, Helvetica, sans-serif;
    color: #4c4c4c;
    margin-top: 26px;
    font-size: 18px;
    }
  .preco{
    margin-top:80px;
    font-family: Arial, Helvetica, sans-serif;
    color: green;
    font-weight:bold;
    font-size: 23px;
  }
  



</style>
