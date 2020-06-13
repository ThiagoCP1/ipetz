import Vue from 'vue'
import Vuex from 'vuex'
import api from '../lib/api/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:[],
    cadastro:{
        name:"",
        password_hash:"",
        provider:0,
        cpf_cnpj:"",
        telefone:"",
        endereco:"",
        estado:"",
        cidade:""
  },
    cadastroSucesso:''
  },
  mutations: {
    SUCCESS_LOGIN(state, payload) {
      state.login = payload
    },
    SUCCESS_CADASTRO(state, payload) {
      state.cadastroSucesso = payload
    },

  },
  actions: {
    async realizarLogin(store, payload) {
      await api.login(payload).then(response => {
        store.commit('SUCCESS_LOGIN', response.data)
      })
    },
    async realizarCadastro(store,state) {
      await api.cadastrarUsuario(this.state.cadastro).then(response => {
        console.log(response.data)
        store.commit('SUCCESS_CADASTRO', response.data)
      })
    },
  },
  modules: {
  }
})
