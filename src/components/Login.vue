<template>
<div style="background-color:#F8F8F8;height:1080px">
  <b-container class="main-reader" fluid>
    <b-row>
  <b-col class="text-right">
    <b-img src="../../img/logo.png" height="79" width="119">

    </b-img>
  </b-col>
    
  <b-col class="text-left align-self-center">
    <h1 class="fonte">
      iPetz
    </h1>
  </b-col>
  </b-row>
  </b-container>
  <b-container>
    <b-row>
      <b-col class="main-login">
        <b-row>
          <b-col class="text-left" v-if="cadastro===false">
            <div style="margin-left:40px">
            <label style="margin-top:40px">
              Nome:
            </label>
            <b-form-input class="form-inputs">

            </b-form-input>
            <label style="margin-top:40px">
              Senha:
            </label>
            <b-form-input class="form-inputs">

            </b-form-input>
            <b-button class="botao-entrar" variant="success">
              ENTRAR
            </b-button>
            <div>
              <h2 class="criar-conta">
                Não tem uma conta? <a style="cursor:pointer" @click="cadastro=true"> Crie uma nova conta </a> 
              </h2>
            </div>
            </div>

          </b-col>
          <b-col class="text-left" v-if="cadastro===true">
            <div style="margin-left:40px">
            <label style="margin-top:40px">
              Nome:
            </label>
            <b-form-input class="form-inputs">

            </b-form-input>
            
             <label style="margin-top:40px">
              Senha:
            </label>
            <b-form-input class="form-inputs">

            </b-form-input>
            <label style="margin-top:40px">
              Confirmar senha:
            </label>
            <b-form-input class="form-inputs">

            </b-form-input>
            <label style="margin-top:40px">
              Tipo de Cliente:
            </label>
            <b-form-group>
              <b-form-radio-group :options="opcoesCadastro" v-model="tipoUsuario"/>
            </b-form-group>
            <b-form-group style="margin-top:40px" label="CPF" v-if="tipoUsuario===1">
              <b-form-input class="form-inputs">

            </b-form-input>
            </b-form-group>
            <b-form-group style="margin-top:40px" label="CNPJ" v-if="tipoUsuario===2">
              <b-form-input class="form-inputs">

            </b-form-input>
            </b-form-group>
             <label style="margin-top:40px">
              Telefone:
            </label>
            <b-form-input class="form-inputs">

            </b-form-input>
             <label style="margin-top:40px">
              Endereço:
            </label>
            <b-form-input class="form-inputs">

            </b-form-input>
            <b-form-group label="Estado:" class="form-inputs" style="margin-top:40px">
            <b-form-select v-model="estado" :options="opcoesEstado">
              
            </b-form-select>
            </b-form-group>
            <b-form-group label="Cidade:" class="form-inputs" style="margin-top:40px">
            <b-form-select v-model="cidade" :options="estado.length==0?'':opcoesCidade">
              
            </b-form-select>
            </b-form-group>
            <b-button @click="cadastro=false" class="botao-entrar" variant="success">
              CADASTRAR
            </b-button>
            <div class="criar-conta">
              <h2 v-if="cadastro===false">
                Não tem uma conta? <a style="cursor:pointer" @click="cadastro=true"> Crie uma nova conta </a> 
              </h2>
            </div>
            </div>

          </b-col>
          <b-col>
            <h2 class="texto-boa">
              Seja bem vindo ao iPetz!
            </h2>
            <b-row >
              <b-col style="margin-top:20px">
                <b-img  src="../../img/login.png" height="298" width="298">
                </b-img>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
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
      cadastro:false,
      opcoesCadastro:[{text:'Usuário',value:1},{text:'Lojista',value:2}],
      tipoUsuario: 1,
      opcoesEstado:[{text:'Espirito Santo',value:1}],
      opcoesCidade:[{text:'Serra',value:1},{text:'Vitória',value:2}],
      estado:'',
      cidade:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-reader{
  background-color:#FBCF3B;
  height: 85px;
}
.fonte{
  font-family: sans-serif;
  font-style: italic;
  color: #ffffff;
}
.main-login{
  height: auto;
  width: 1000px;
  background-color: #ffffff;
  background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 1px 2px 4px #00000029;
    border: 1px solid #EFEEEE;
    border-radius: 10px;
  margin-top: 60px;
}
.botao-entrar{
  margin-top: 40px;
  width: 350px;

}
.criar-conta{
  font-family: sans-serif;
  font-style: italic;
  font-size: 14px;
  margin-top: 15px;
  margin-left: 35px;
  margin-bottom: 180px;
}
.form-inputs{
  width: 350px;
}
.texto-boa{
  margin-top: 40px;
  color: #FBCF3B;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
}

</style>
