<template>
   <div>
    <Mainhead/>
    <b-row class="lojaNome">
      <span>
        {{this.$store.state.loja}}
      </span>
      </b-row>
      <b-row class="descricaoLoja">
<!--        <span>-->
<!--          Rações e grande variedades para seu animal de estimação-->
<!--        </span>-->
      </b-row>
      <b-row  >
        <b-col @click="comprarProduto" style="cursor:pointer" v-for="produtosLoja in produtosItem"
               :key="produtosItem.id" class="produtos text-center">
          <b-img class="imagem-produtos" :src="produtosLoja.foto_produto" height="147" width="165"/>
          <b-row>
            <b-col class="descricao-produto">
              <p>
                {{produtosLoja.descricao_produto}}
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="preco">
              <p>
                R${{produtosLoja.valor}}
              </p>
            </b-col>
          </b-row>

        </b-col>

      </b-row>
  </div>
</template>

<script>
import Mainhead from '../components/Mainhead'
import API from "../lib/api/config/api";

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
      array:[{v:1,id:1},{v:2,id:2}],
      produtosItem: null,

    }
  },
  methods:{
    comprarProduto(){
      this.$router.push('/comprar/1')
    },

  },
  created() {
    API.post('/produtoslojista', {
      id_lojista: this.$route.params.id,
    }).then(resp => {
      this.produtosItem = resp.data
    })

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
    margin-left: 150px;
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
