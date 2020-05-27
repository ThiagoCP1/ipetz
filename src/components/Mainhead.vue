<template>
  <div>
    <b-container class="head" fluid>
      <b-row class="justify-content-center h-100" >
        <b-col class="align-self-center" >
            <b-img src="../../img/logo.png" height="72" width="72"/>
            <span class="fonte">
            iPetz
            </span>
        </b-col>
        <b-col >
        </b-col>
        <b-col>
        </b-col>
        <b-col>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{
  height: 85px;
  background-color: #FBCF3B;
}
.fonte{
  font-family: sans-serif;
  font-style: italic;
  color: #ffffff;
  font-size: ;
  
  

}

</style>
