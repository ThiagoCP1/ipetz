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
    import  MainLojista from  './Mainheaderlojista'
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
