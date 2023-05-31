import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        usuarios: [
            { nombre: 'Salma', edad: 24, activo: false },
            { nombre: 'Norman', edad: 24, activo: false },
            { nombre: 'Thamar', edad: 22, activo: false },
            { nombre: 'Silvia', edad: 56, activo: false },
        ]
    },
    getters: {
        listadoactivo: (state) => {
            return state.usuarios.filter( usuario => usuario.activo).length
        }
    }
})