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
      <b-row class="pedidos" v-for="pedidos in dataPedidos" :key="pedidos.id">
        <b-col class="align-self-center">
        <span>
          {{$moment(pedidos.data_compra).format('DD/MM/YY HH:MM')}}
        </span>
        </b-col>
        <b-col class="align-self-center">
        <span>
          {{pedidos.nome_produto}}
        </span>
        </b-col>
        <b-col class="align-self-center">
        <span>
          R$ {{pedidos.valor}}
        </span>
        </b-col>
        <b-col class="align-self-center">
        <span>
          {{verStatus(pedidos.status)}}
        </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col style="margin-top:30px">
          <b-button @click="atualizar" class="botao" variant="success">
            Atualizar
          </b-button>
        </b-col>
      </b-row>
    </div>


</template>

<script>
  import API from "../lib/api/config/api";
import Mainhead from '../components/Mainhead'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      dataPedidos:null
    }
  },
  components: {
    Mainhead
  },
  methods:{
    verStatus(stauts){
      if(stauts==1){
        return "A Caminho"
      }
      if(stauts==2){
        return "Entregue"
      }
      if(stauts==3){
        return "Cancelado"
      }

    },
    atualizar(){
      API.post('pedidosCliente',{
        id_cliente:this.$store.state.login.id
      }).then(resp=>{
        this.dataPedidos=resp.data
      })
    }
  },
  created() {
    API.post('pedidosCliente',{
      id_cliente:this.$store.state.login.id
    }).then(resp=>{
      this.dataPedidos=resp.data
    })
  }
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
