<template>
<div id="app">
  
<h2>De:</h2>
<input list="moedas" name="lista"/>
<datalist id="moedas">
  
<option v-for="moeda of moedas" v-bind:key="moeda.id">{{moedas.name}}</option>

</datalist>
</div>
</template> 

<script>
import Moedas from './services/moedas'
export default {

  data(){
    return{
      moedas:[],
    }
  },

  mounted(){
    Moedas.listar().then(resposta =>{
      console.log(resposta.data.data)
      this.moedas = resposta.data
    })
  },
  name: "app",

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
