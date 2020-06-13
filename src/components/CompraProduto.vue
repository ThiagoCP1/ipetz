<template>
  <div>
    <Mainhead/>
    <b-row>
      <b-col class="imagem text-left">
        <b-img class="img-header" src="../../img/racao3.jpg" height="300" width="300"/>
      </b-col>
      <b-col class="nome-produto align-self-center text-left">
        <p>
          Ração para gatos Whiskas Sabor Boi Adultos 1Kg
        </p>
        <b-row class="descricao-produto align-self-center text-left">
          <span>
          Marca: Whiskas<br>
          <br>
          <br>
            - Indicada para gatos adultos<br>
            - Formula Rica em nutrientes e minerais<br>
            - Promove maior equilíbrio intestinal;<br>
            - Reduz o volume e odor das fezes,<br>
            - Disponível em embalagens de 15 kg e 20 kg.
          </span>
        </b-row>
      </b-col>
      <b-col class="preco-produto align-self-center text-left">
        <span>
          Por<br>
          R$139,90

        </span>
        <b-form-group style="margin-top:40px">
      <b-form-radio v-model="selected" name="some-radios" value="A">10 Kg    R$120,90</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="B">20 Kg    R$139,90</b-form-radio>
    </b-form-group>
    <b-button @click="comprar" class="botao-comprar" variant="success">
      Comprar
    </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="especificacoes align-self-center text-left">
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
  data(){
    return{
      compra:false,
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imagem{
  margin-top: 50px;
  margin-left: 100px;
  max-width:300px;
  max-height: 300px;
}
.nome-produto{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  margin-top: 50px;
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
  margin-top: 30px;
  border: 1px solid lightgray;
  max-width:350px;
  height: 300px;
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
