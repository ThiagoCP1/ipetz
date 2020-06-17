<template>
  <div >
   <Mainhead/>
   <b-row>
      <b-col class="pedidos-pendentes">
        <span>
          Seus Pedidos
        </span>
      </b-col>
    </b-row>
    <b-row class="pedidos-descricao">
      <b-col class="align-self-center">
        <span>
          Data
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          Produto
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          Valor
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          Status
        </span>
      </b-col>
    </b-row>
    <b-row class="pedidos">
      <b-col class="align-self-center">
        <span>
          13/06/2020
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          Ração Pedigree
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          R$26,30
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          Entregue
        </span>
      </b-col>
    </b-row>
    <b-row class="pedidos">
      <b-col class="align-self-center">
        <span>
          13/06/2020
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          Ração para Gatos
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          R$100,00
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          A caminho
        </span>
      </b-col>
    </b-row>
    <b-row>
      <b-col style="margin-top:30px">
        <b-button class="botao" variant="success">
          Atualizar
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Mainhead from '../components/Mainhead'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Mainhead
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pedidos-pendentes{
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 26px;
}
.pedidos{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  border: 1px solid #707070;
  height: 75px;
  max-width: 1800px;
  margin-left: 100px;
  margin-top: 30px;
}
.pedidos-descricao{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  border: 1px solid #707070;
  height: 75px;
  max-width: 1800px;
  margin-left: 100px;
  margin-top: 30px;
  background-color: deepskyblue;
  font-weight: bold;
  color: black;
}

</style>
