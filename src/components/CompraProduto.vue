<template>
    <div>
        <Mainhead/>
        <b-row v-for="produtoItem in produtoCompra" :key="produtoItem.id">

            <b-col class="imagem text-left">
                <b-img class="img-header" :src="produtoItem.foto_produto" height="300" width="300"/>
            </b-col>
            <b-col class="nome-produto align-self-center text-left">
                <p>
                    {{produtoItem.nome_produto}}
                </p>
                <b-row class="descricao-produto align-self-center text-left">
                    <br>
                    <span>
           {{produtoItem.descricao_produto}}
          </span>
                </b-row>
            </b-col>
            <b-col class="preco-produto align-self-center text-left">
        <span>
          Por<br>
          R${{produtoItem.valor}}

        </span>
                <b-form-group style="margin-top:40px">

                </b-form-group>
                <b-button @click="validar(produtoItem)" class="botao-comprar" variant="success">
                    Comprar
                </b-button>
            </b-col>
        </b-row>
        <b-row>
            <!-- <b-col class="especificacoes align-self-center text-left">
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
            </b-col> -->
          <b-modal
                  ref="my-modal"



          >
            <div>
              <b-row>
                <b-col>
                  <b-row class="justify-content-center" style="background-color:#d3d3d3">
                    <b-icon icon="check-circle" font-scale="3"></b-icon>
                    <h1>
                      Confirmação do Pedido
                    </h1>
                  </b-row>
                </b-col>
              </b-row>
              <b-row>
                <b-col style="margin-top:20px; color:green">
                  <h2>
                    Seu pedido foi finalizado com sucesso!
                  </h2>
                </b-col>
              </b-row>
              <b-row>
                <b-col style="margin-top:20px;">
                  <h3>
                    O número do seu pedido é: 232644<br>
                    Para mais informações clique em "Ver Pedidos"
                  </h3>
                </b-col>
              </b-row>
              <b-row>
                <b-col style="margin-top:30px;">
                  <b-button variant="success">
                    Ver Pedidos
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </b-modal>
        </b-row>
    </div>
</template>

<script>
    import Mainhead from '../components/Mainhead'
    import API from "../lib/api/config/api";

    export default {
        name: 'HelloWorld',
        components: {
            Mainhead
        },
        data() {
            return {
                compra: false,
                produtoCompra: []
            }
        },
        props: {
            msg: String
        },
        methods: {

          validar(produtoItem){
            // this.$refs['my-modal'].show()
            this.boxTwo = ''
            this.$bvModal.msgBoxConfirm('Tem certeza que deseja comprar esse produto?', {
              title: 'Atenção!',
              size: 'sm',
              buttonSize: 'sm',
              okVariant: 'danger',
              okTitle: 'SIM',
              cancelTitle: 'NÃO',
              footerClass: 'p-2',
              hideHeaderClose: false,
              centered: true
            })
                    .then(value => {
                      if(value==true){
                        this.comprar(produtoItem)
                      }
                    })
                    .catch(err => {
                      // An error occurred
                    })
          },
            comprar(produtoItem) {
                // if(this.compra == false){
                //   this.$router.push('/dashboard')
                // }else{
                //   compra =true
                // }

                API.post('pedidos', {

                    id_cliente: this.$store.state.login.id,
                    id_lojista: produtoItem.id_lojista,
                    id_produto: produtoItem.id,
                    nome_cliente: this.$store.state.login.name,
                    nome_produto: produtoItem.nome_produto,
                    categoria: produtoItem.categoria,
                    valor: produtoItem.valor,
                    descricao_produto: produtoItem.descricao_produto,
                    data_compra: new Date(),
                    status: 1

                }).then(resp=>{
                  this.$router.push('/Pedidos')
                })
            }
        },
        created() {
            API.post('produtosbyid', {
                id: this.$route.params.id
            }).then(resp => {
                this.produtoCompra.push(resp.data)

            })

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .imagem {
        margin-top: 80px;
        margin-left: 100px;
        max-width: 300px;
        max-height: 300px;
    }

    .nome-produto {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 30px;

        margin-left: 30px;
    }

    .descricao-produto {
        margin-left: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
    }

    .preco-produto {
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        margin-top: 90px;
        border: 1px solid lightgray;
        max-width: 335px;
        height: 230px;
        margin-right: 170px;
    }

    .botao-comprar {
        width: 300px;
        margin-bottom: 30px;
    }

    .especificacoes {
        margin-top: 100px;
        margin-left: 133px;
        margin-bottom: 30px;
    }

</style>
