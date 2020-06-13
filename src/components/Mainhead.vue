<template xmlns:b-row="http://www.w3.org/1999/html">
    <div>
        <b-row style="background-color: #FBCF3B">
            <b-col class="align-self-center head text-left" style="margin-left: 48px">
                <b-img class="img-header" src="../../img/logo.png" height="72" width="72"/>
                <span class="fonte">
                  Ipetz
              </span>
            </b-col>
            <b-col class="align-self-center">
                <div class="input-group-prepend">
                    <i class="fas fa-search"></i>
                    <b-form-input placeholder="Buscar itens...">
                    </b-form-input>
                </div>
            </b-col>
            <b-col class="align-self-center text-right" style="cursor:pointer">
                <b-icon icon="person-fill" font-scale="2"></b-icon>
                <span>{{this.$store.state.login.name}}</span>
            </b-col>
            <b-col class="align-self-center" @click="sair" style="cursor:pointer">
                <b-icon icon="box-arrow-right" font-scale="2"></b-icon>
                <span style="margin-left:10px">Sair</span>
            </b-col>
        </b-row>
        <b-row class="align-items-center borda">
            <span class="sublinks" style="margin-left: 133px">
                Cachorro
            </span>
            <span class="sublinks">
                Gato
            </span>
            <span class="sublinks">
                Roedores
            </span>
            <span class="sublinks">
                Passáros
            </span>
            <span class="sublinks">
                Peixes
            </span>
            <span class="sublinks">
                Serviços
            </span>
            <span class="sublinks">
                Promoções
            </span>
            <span class="sublinks">
                Marcas
            </span>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
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

    .head {
        padding: 15px;

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

</style>
