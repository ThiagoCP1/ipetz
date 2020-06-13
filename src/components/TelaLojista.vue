<template>
  <div>
    <b-row style="background-color: #FBCF3B">
      <b-col class="align-self-center head text-left" style="margin-left: 48px">
        <b-img class="img-header" src="../../img/logo.png" height="72" width="72"/>
          <span class="fonte">
            Ipetz
          </span>
      </b-col>
          <b-col class="align-self-center" style="margin-left:350px">
            <h2>
              Gerenciamento de Loja
            </h2>
          </b-col>
          <b-col class="align-self-center text-right">
            <b-form-select class="opcoes-loja" v-model="statusLoja" :options="opcoesLoja">
              </b-form-select>
          </b-col>
          <b-col class="align-self-center" @click="sair" style="cursor:pointer">
                <b-icon icon="box-arrow-right" font-scale="2"></b-icon>
                <span style="margin-left:10px">Sair</span>
            </b-col>
    </b-row>
    <b-row class="align-items-center borda">
      <span class="sublinks" style="margin-left: 133px">
                Pedidos
            </span>
            <span class="sublinks">
                Produtos
            </span>
            <span class="sublinks">
                Fatura
            </span>
            <span class="sublinks">
                Perfil
            </span>
    </b-row>
    <b-row>
      <b-col class="pedidos-pendentes">
        <span>
          Pedidos Pendentes
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
          Thiago Cordeiro
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          R$26,30
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          Novo
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
          Lucas Mama Bola
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          R$100,00
        </span>
      </b-col>
      <b-col class="align-self-center">
        <span>
          Novo
        </span>
      </b-col>
    </b-row>
    

    

    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      opcoesLoja:[{text:'Aberto',value:1},{text:'Fechado',value:2}],
      statusLoja: 2 
    }
  },
  methods:{
    sair(){
      this.$router.push('/')
    }
            
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-header {
  margin-bottom: 15px;
}
.fonte {
  font-family: sans-serif;
  font-style: italic;
  color: #ffffff;
  font-size: 46px;
}
.opcoes-loja{
  width: 150px;
  height: 50px;
  
}
.sublinks{
  text-align: left;
  font: Bold 26px/31px Arial;
  letter-spacing: 0px;
  color: #7B7B7B;
  opacity: 1;
  padding-left: 40px;
  padding: 15px;

}
.borda{
  border: 1px solid #707070;
}
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


</style>
