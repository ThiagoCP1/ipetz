<template>
  <div>
    <Mainhead/>
  </div>
</template>

<script>
import Mainhead from '../components/Mainhead'
export default {
  name: 'HelloWorld',
  components: {
    Mainhead
  },
  props: {
    msg: String
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
