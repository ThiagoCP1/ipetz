<template>
  <div>
    <Mainhead/>
    <b-row v-for="produtoItem in produtoCompra" :key="produtoItem.id">

      <b-col class="imagem text-left">
        <b-img class="img-header" :src="produtoItem.foto_produto" height="300" width="300"/>
      </b-col>
      <b-col class="nome-produto align-self-center text-left">
        <p>
          {{produtoItem.nome_produto}}
        </p>
        <b-row class="descricao-produto align-self-center text-left">
          <br>
          <span>
           {{produtoItem.descricao_produto}}
          </span>
        </b-row>
      </b-col>
      <b-col class="preco-produto align-self-center text-left">
        <span>
          Por<br>
          R${{produtoItem.valor}}

        </span>
        <b-form-group style="margin-top:40px">
          
        </b-form-group>
      <b-button @click="comprar" class="botao-comprar" variant="success">
      Comprar
     </b-button>
      </b-col>
     </b-row>
     <b-row>
      <!-- <b-col class="especificacoes align-self-center text-left">
        <h1>
          Ração Whiskas: Especificações
        </h1>
        <span>
          Linha: Premium<br>
          Indicação: Alimentação diária de cães adultos<br>
          Pet: Cachorros<br>
          Porte de Raça: Grande, Pequeno e Médio<br>
          Idade: Adulto<br>
          Sabor: Frango e Carne<br>
          Composição: Farinha de vísceras de frango, farinha de carne, milho integral moído, quirera de arroz gordura de frango,<br>
          farelo de arroz desengordurado,hidrolisado de frango, premix vitamínico mineral, cloreto de sódio, cloreto de potássio, <br>
          parede celular de levedura, antioxidantes BHA e BHT.<br>
          Tipo: Rações Secas<br>
          Apresentação:<br>
          Disponível em embalagens de 15kg e 20kg<br>

        </span>
      </b-col> -->
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
  data(){
    return{
      compra:false,
      produtoCompra:[]
    }
  },
  props: {
    msg: String
  },
  methods:{
    comprar(){
      if(this.compra == false){
        this.$router.push('/dashboard')
      }else{
        compra =true
      }
    }
  },
  created() {
    API.post('produtosbyid',{
      id:this.$route.params.id
    }).then(resp=>{
      this.produtoCompra.push(resp.data)
      console.log(resp.data)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imagem{
  margin-top: 80px;
  margin-left: 100px;
  max-width:300px;
  max-height: 300px;
}
.nome-produto{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  
  margin-left:30px;
}
.descricao-produto{
  margin-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}
.preco-produto{
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-top: 90px;
  border: 1px solid lightgray;
  max-width:335px;
  height: 230px;
  margin-right: 170px;
}
.botao-comprar{
  width: 300px;
  margin-bottom: 30px;
}
.especificacoes{
  margin-top: 100px;
  margin-left: 133px;
  margin-bottom: 30px;
}

</style>
