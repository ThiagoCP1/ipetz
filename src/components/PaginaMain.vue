<template>
  <div>
    <Mainhead/>
    <b-row>
      <b-img src="../../img/banner.jpg" height="300" width="1999">
      </b-img>
    </b-row>
    <b-row class="produtos-mais-comprados" style="border-bottom: 1px solid ">
      <div style="margin-left: 133px">
        <b-icon class="align-self-center" icon="star-fill" font-scale="1"></b-icon>
        <span style="margin-left:10px">
        Lojas melhores avaliadas
      </span>
      </div>

    </b-row >
    <b-row>
      <b-col v-for=" loja in lojista" :key="loja.id" cols="1" style="margin-left: 150px;margin-top: 15px" class="text-left" >
        <b-img width="150" height="150" :src="loja.fotoloja"></b-img>
        <b-row class="justify-content-center">
          <b-col  class="text-center">
            <strong>{{loja.nomeloja}}</strong>
          </b-col>

        </b-row>
      </b-col>
<!--      <b-col cols="1" style="margin-left: 150px" class="text-left">-->
<!--        <b-img width="150" height="150" src="https://ipetz.s3.sa-east-1.amazonaws.com/avatar_usuario_15_06_2020_15_48_33.png"></b-img>-->
<!--        <b-row class="justify-content-center">-->
<!--          <b-col  class="text-center">-->
<!--            <span>Pett do gay</span>-->
<!--          </b-col>-->

<!--        </b-row>-->
<!--      </b-col>-->
    </b-row>
<!--    <b-row>-->
<!--      <input  type="file" ref="inputFoto" @change="alterarFoto"/>-->
<!--    </b-row>-->
<!--    <div v-for="teste in image">-->
<!--    </div>-->
<!--    <b-row class="produtos-mais-comprados">-->
<!--      <b-icon class="align-self-center" icon="star-fill" font-scale="1"></b-icon>-->
<!--      <span style="margin-left:10px">-->
<!--        Lojas melhores avaliadas-->
<!--      </span>-->
<!--    </b-row >-->
    <b-row>
<!--      <b-col v-for="listLojas in lojas" :key="listLojas.id" class="lojas">-->
<!--      </b-col>-->
    </b-row>
  </div>
</template>

<script>
import Mainhead from '../components/Mainhead'
import API from '../lib/api/config/api'
import s3 from "../lib/s3";
export default {
  name: 'HelloWorld',
  components: {
    Mainhead
  },
  props: {
    msg: String
  },
  data(){
    return{
      fotos:[{img:"@/assets/images/gato", id:1}],
      loja1: false,
      image:[{img:'https://ipetz.s3-sa-east-1.amazonaws.com/avatar_usuario_15_06_2020_14_26_39.jpg'},{img:'https://ipetz.s3-sa-east-1.amazonaws.com/avatar_usuario_15_06_2020_14_29_40.jpg'}],
      lojista:null

    }
  },
  methods:{
    alterarFoto(){

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
            console.log(url)
            this.$bvModal
                    .msgBoxConfirm("Alterar foto de perfil?", {
                      title: "Atenção!",
                      size: "sm",
                      buttonSize: "sm",
                      okVariant: "success",
                      okTitle: "SIM",
                      cancelVariant: "danger",
                      cancelTitle: "NÃO",
                      footerClass: "p-2",
                      hideHeaderClose: false,
                      centered: true
                    })
                    .then(value => {
                      if (value === true) {

                      }
                    })
                    .catch(err => {
                      // An error occurred
                    });
          });
        });
      };
    }
  },
  created() {
    API.get('http://localhost:3333/lojistas').then(resp=>{
      this.lojista=resp.data

    })

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.produtos-mais-comprados{

  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight:bold;
}
.produtos{
  width: 388px;
  height: 223px;
  text-align: center;
  background-image: url("../../img/racao.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #707070;
}
.lojas{
  background-image: url("../../img/loja1.png");
  width: 300px;
  height: 200px;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #707070;
  margin-bottom: 20px;
}

</style>
