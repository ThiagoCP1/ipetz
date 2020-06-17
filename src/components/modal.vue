<template>
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
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
