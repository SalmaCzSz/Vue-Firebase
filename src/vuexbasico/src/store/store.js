import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//creamos nuestro almacén/fuente de datos
// para enviar las funciones fuera del state utilizamos un commit
export const store = new Vuex.Store({
    state: {
        contador: 0
    },
    mutations: { //funciones
        sumar(state){
            state.contador++
        },
        restar(state){
            state.contador--
        }
    }
})
// estos dos commit deben tener los mismos nombres que en mutations
store.commit('sumar')
store.commit('restar')