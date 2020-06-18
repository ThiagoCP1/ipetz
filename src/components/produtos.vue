<template>
    <div>
        <HeaderLojista/>

        <b-row v-if="cadastro">
            <b-col style="background-color: #d3d3d3;margin-left: 10px" class="text-left">
                <b-icon style="margin-left:30px" icon="plus-circle-fill" font-scale="2"></b-icon>
                <span class="adicionar-produto">Adicionar Produtos</span>
            </b-col>
        </b-row>
        <b-row v-if="cadastro">
            <b-col class="text-left" cols="2">
                <b-col style="height: 150px;width: 150px;margin-top: 30px;margin-left:10px" class="text-center align-self-center">
                    <span v-if="foto.length==0">
                    Foto
                   </span>
                    <b-img style="margin-left: 20px" width="150" height="150" :src="foto"></b-img>
                </b-col>

                <b-row>
                    <div style="margin-left: 50px;margin-top:20px" class='input-wrapper'>
                        <label for='input-file'>
                            Selecionar foto
                        </label>
                        <input ref="inputFoto" @change="uploadFoto" id='input-file' type='file' value=''/>
                        <span id='file-name'></span>
                    </div>
                </b-row>
            </b-col>

            <b-col class="text-left">
                <b-row>
                    <b-form-group label="Nome do produto">
                        <b-input v-model="$store.state.cadastroProduto.nome_produto" style="width: 400px">

                        </b-input>
                    </b-form-group>
                    <b-form-group style="padding-left: 50px" label="Categoria">
                        <b-form-select :options="options" v-model="$store.state.cadastroProduto.categoria"
                                       style="width: 400px">

                        </b-form-select>
                    </b-form-group>
                    <b-form-group style="padding-left: 50px" label="Valor do produto R$">
                        <b-input v-model="$store.state.cadastroProduto.valor" style="width: 400px">

                        </b-input>
                    </b-form-group>
                </b-row>
                <b-row>
                    <b-form-group label="Descrição do produto">
                        <b-textarea v-model="$store.state.cadastroProduto.descricao_produto" no-resize
                                    style="width: 1300px;height: 180px">

                        </b-textarea>
                    </b-form-group>
                </b-row>
                <b-row>
                    <b-button @click="salvarProduto" variant="success">
                        Salvar produto
                    </b-button>
                </b-row>

            </b-col>

        </b-row>
        <b-row class="lojaNome" v-if="cadastro==false">
      <span>
        {{this.$store.state.login.nomeloja}}
      </span>
        </b-row>
        <b-row class="descricaoLoja" v-if="cadastro==false">
            <b-button variant="success" @click="cadastro=true">
                Cadastrar Produto
            </b-button>
        </b-row>
        <b-row v-if="cadastro==false">
            <b-col @click="comprarProduto" style="cursor:pointer" v-for="produtosLoja in produtosItem"
                   :key="produtosLoja.id" class="produtos text-center">
                <b-img class="imagem-produtos" :src="produtosLoja.foto_produto" height="147" width="165"/>
                <b-row>
                    <b-col class="descricao-produto">
                        <p>
                            {{produtosLoja.nome_produto}}
                        </p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="preco">
                        <p>
                            R${{produtosLoja.valor}}
                        </p>
                    </b-col>
                </b-row>

            </b-col>

        </b-row>


    </div>

</template>

<script>
    import HeaderLojista from './Mainheaderlojista'
    import s3 from "../lib/s3";
    import API from '../lib/api/config/api'

    export default {
        name: "produtos",
        components: {
            HeaderLojista
        },
        data() {
            return {
                foto: '',
                options: [
                    {
                        text: 'Ração', value: 'racao'
                    },
                    {
                        text: 'Acessórios', value: 'acessorios'
                    },
                    {
                        text: 'Higiene e Beleza', value: 'higiene e beleza'
                    },
                    {
                        text: 'Farmácia', value: 'farmacia'
                    },
                    {
                        text: 'Serviços', value: 'servicos'
                    }
                ],
                cadastro: false,
                array: [{v: 1, id: 1}, {v: 2, id: 2}],
                produtosItem: null

            }
        },
        methods: {
            uploadFoto() {
                this.file = this.$refs.inputFoto.files[0];
                this.fileName = this.$refs.inputFoto.files[0].name;
                if (this.file) {
                    this.uploadS3();
                }
            },
            uploadS3() {
                const reader = new FileReader();
                reader.readAsArrayBuffer(this.file);
                reader.onerror = event => {
                    this.carregandoFoto = false;
                    alert("Erro ao ler o arquivo");
                    return false;
                };

                let extension = ".jpg";
                if (this.file.type === "image/png") {
                    extension = ".png";
                }

                const fileName = `avatar_usuario_${new Date()
                    .toLocaleDateString("pt-BR")
                    .split("/")
                    .join("_")}_${new Date()
                    .toLocaleTimeString("pt-BR")
                    .split(":")
                    .join("_")}${extension}`;
                reader.onloadend = event => {
                    s3.save(event.currentTarget.result, fileName).then(res => {
                        s3.getUrl(fileName).then(url => {

                            this.$store.state.cadastroProduto.foto_produto = url
                            this.foto = url
                        });
                    });
                };
            },
            salvarProduto() {

                API.post('/produtos', {
                    id_lojista: this.$store.state.cadastroProduto.id_lojista,
                    nome_produto: this.$store.state.cadastroProduto.nome_produto,
                    categoria: this.$store.state.cadastroProduto.categoria,
                    valor: this.$store.state.cadastroProduto.valor,
                    foto_produto: this.$store.state.cadastroProduto.foto_produto,
                    descricao_produto: this.$store.state.cadastroProduto.descricao_produto,
                }).then(resp => {

                    API.post('/produtoslojista', {
                        id_lojista: this.$store.state.cadastroProduto.id_lojista,
                    }).then(resp => {
                        this.produtosItem = resp.data
                        this.cadastro = false

                    })
                })

            },
            comprarProduto() {
                this.$router.push('/comprar/1')
            }
        },
        created() {
            API.post('/produtoslojista', {
                id_lojista: this.$store.state.cadastroProduto.id_lojista,
            }).then(resp => {
                this.produtosItem = resp.data
            })


        }
    }
</script>
d
<style scoped>
    input[type='file'] {
        display: none
    }

    .input-wrapper label {
        background-color: #3498db;
        border-radius: 5px;
        color: #fff;
        margin: 10px;
        padding: 6px 20px
    }

    .input-wrapper label:hover {
        background-color: #2980b9
    }

    .lojaNome {
        margin-left: 133px;
        margin-top: 20px;
        font-family: Arial, Helvetica, sans-serif;
        color: #3f3e3e;
        font-size: 36px;
        font-weight: bold;
    }

    .descricaoLoja {
        font-size: 16px;
        color: #717171;
        margin-left: 133px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .produtos {
        border: 1px solid #707070;
        margin-top: 200px;
        margin-right: 5px;
        margin-left: 150px;
        max-width: 261px;
        height: 500px;
        margin-bottom: 50px;
    }

    .imagem-produtos {
        margin-top: 20px;
    }

    .descricao-produto {
        font-family: Arial, Helvetica, sans-serif;
        color: #4c4c4c;
        margin-top: 26px;
        font-size: 18px;
    }

    .preco {
        margin-top: 80px;
        font-family: Arial, Helvetica, sans-serif;
        color: green;
        font-weight: bold;
        font-size: 23px;
    }
    .adicionar-produto{
        margin-left: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 26px;
        margin-top: 10px;
    }

</style>
