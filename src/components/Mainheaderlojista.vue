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
      <span @click="linkPedidos" class="sublinks" style="margin-left: 133px">
                Pedidos
            </span>
            <span @click="linkProdutos" class="sublinks">
                Produtos
            </span>
            <span class="sublinks">
                Fatura
            </span>
            <span class="sublinks">
                Perfil
            </span>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Mainheaderlojista",
        data(){
            return{
                opcoesLoja:[{text:'Aberto',value:1},{text:'Fechado',value:2}],
                statusLoja: 2
            }
        },
        methods:{
            linkProdutos(){
                this.$router.push('/produtos')
            },
            linkPedidos(){
                this.$router.push('/gerenciarlojista')
            },
            sair(){
                this.$router.push('/')
            }
        }
    }
</script>

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

</style>
