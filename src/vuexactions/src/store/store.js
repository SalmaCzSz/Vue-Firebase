import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        usuario: null
    },
    mutations: { //modifica el state
        obtenerusuarios(state){
            axios.get('https://jsonplaceholder.typicode.com/users')
                 .then( r => {state.usuario = r.data})
        }

    },
    actions: { //genera una llamada a la mutación
        getusuarios(context){
            context.commit('obtenerusuarios')
        }
    }
})