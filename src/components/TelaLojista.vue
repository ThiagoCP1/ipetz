<template>
  <div>
      <MainLojista/>

    <b-row>
      <b-col class="pedidos-pendentes">
        <span>
          Pedidos Pendentes
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
          Nome
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
      <b-col class="align-self-center">
        <span>

        </span>
      </b-col>
    </b-row>
    <b-row class="pedidos" v-for="pedidos in dataPedidos" :key="pedidos.id">
      <b-col class="align-self-center">
        <span>
          {{pedidos.data_compra}}
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          {{pedidos.nome_cliente}}
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          R${{pedidos.valor}}
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          {{verStatus(pedidos.status)}}
        </span>
      </b-col>
      <b-col class="align-self-center">
        <b-button @click="entregue(pedidos)" variant="success">
          CONFIRMAR ENTREGA
        </b-button>
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
    import  MainLojista from  './Mainheaderlojista'
    import API from "../lib/api/config/api";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    components:{
        MainLojista
    },
  data(){
    return{
      dataPedidos:null
    }
  },
  methods:{
    sair(){
      this.$router.push('/')
    },
    verStatus(stauts){
      if(stauts==1){
        return "Pendente"
      }
      if(stauts==2){
        return "Entregue"
      }
      if(stauts==3){
        return "Cancelado"
      }

    },

    entregue(pedidos){
      API.put('pedidosLojista',{
        id:pedidos.id,
        status:2
      }).then(resp=>{
        API.post('pedidosLojista',{
          id_lojista:this.$store.state.login.id
        }).then(resp=>{
          this.dataPedidos=resp.data
        })
      })
    },
    atualizar(){
      API.post('pedidosLojista',{
        id_lojista:this.$store.state.login.id
      }).then(resp=>{
        this.dataPedidos=resp.data
      })
    }


  },
  created() {
    API.post('pedidosLojista',{
      id_lojista:this.$store.state.login.id
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
