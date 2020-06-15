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
    <b-row class="justify-content-center">
      <b-col cols="12">
        <b-row>
          <b-col  style="background-color:#d3d3d3">
            <h1 class="criar-item text-left">
              Criar Item
            </h1>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="12">
        <b-row>
          <b-col style="margin-top:45px">
            <img src="@/assets/racao.jpg" width="150" height="150">
            <b-row style="margin-left:215px">
              <button type="button" class="btn btn-warning botoes-img">Selecionar</button>
              <button type="button" class="btn btn-warning botoes-img">Alterar</button>
            </b-row>
            
          </b-col>
          <b-col cols="4"  class="nome text-left">
            <label>
              Nome:
            </label>
            <b-form-input style="width:400px">

            </b-form-input>
          </b-col>
          <b-col cols="4" class="categoria text-left">
            <b-form-group label="Categoria">
              <select style="width:400px" class="form-control" id="exampleFormControlSelect1">
                <option>Ração</option>
                <option>Acessorios</option>
                <option>Higiene e Beleza</option>
                <option>Farmacia</option>
                <option>Serviços</option>
              </select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="7" class="text-left" style="margin-left:645px;margin-top:-120px">
            <label  class="descricao" for="exampleFormControlTextarea1">Descrição:</label>
            <textarea  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </b-col>
        </b-row>
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
.opcoes-loja{
  width: 150px;
  height: 50px;
}
.criar-item{
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 15px;
  margin-left: 20px;
}
.produtos{
  height: 60px;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #707070;
  margin-left: 105px;
  max-width: 1800px;
  border-radius: 1px;
  text-align: left;

}
.form-inputs{
  width: 500px;
}
.nome{
  margin-top: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}
.categoria{
  margin-top: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}
.botoes-img{
  margin-top: 20px;
  margin-left: 5px;
}
.descricao{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}
</style>
