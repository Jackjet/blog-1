import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import http from '@/api/http'
import api from '@/api/api'
import prompt from '@/utils/prompt'
Vue.use(Vuex)

const state = {
    username: '',
    token:null
}

const getters = {}

const mutations = {
    getUser(state, user ) {
        state.username = user.username
        state.token = user.token
    },
    getToken(state, token){
        state.token = token
    }
}

const actions = {
    async login({ commit },data) {
        let res = await http.post(api.login, data)
        window.localStorage.setItem('TOKEN', JSON.stringify(res.data.token))
        if (res.data.code===0) {
            commit('getUser',res.data)
            prompt.ok(res.data.msg)
        }else{
            prompt.no(res.data.msg)
        }
    },
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;