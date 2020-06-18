<template>
    <div>
        <mainhead/>
        <b-row class=" justify-content-center">
      <span style="font-size: 30px;font-family: sans-serif;margin-bottom: 20px;margin-top: 20px">
        Seus Dados
      </span>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="3">
                <b-form-group label="Nome">
                    <b-input v-model="$store.state.login.name">
                    </b-input>
                </b-form-group>
            </b-col>

        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="3">
                <b-form-group label="CPF">
                    <b-input v-model="$store.state.login.cpf_cnpj">
                    </b-input>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="3">
                <b-form-group label="Telefone">
                    <b-input v-model="$store.state.login.telefone">
                    </b-input>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="3">
                <b-form-group label="Endereço">
                    <b-input v-model="$store.state.login.endereco">
                    </b-input>
                </b-form-group>
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
        components:{
            Mainhead
        },
        methods: {
            sair() {
                this.$router.push('/')
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .sublinks {
        text-align: left;
        font: Bold 26px/31px Arial;
        letter-spacing: 0px;
        color: #7B7B7B;
        opacity: 1;
        padding-left: 40px;
        padding: 15px;

    }

    .borda {
        border: 1px solid #707070;
    }

    .fonte {
        font-family: sans-serif;
        font-style: italic;
        color: #ffffff;
        font-size: 46px;
    }

    .img-header {
        margin-bottom: 15px;
    }

    .dados {
        margin-left: 133px;
        margin-top: 30px;
        font-size: 35px;
        font-family: Arial, Helvetica, sans-serif;
        color: #FBCF3B;
    }

    .form-inputs {
        width: 350px;

    }

</style>
