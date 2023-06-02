import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

Vue.directive('alerta', {
    bind(el, binding){
        el.style.color = 'red'
        el.style.fontSize = binding.value + 'px'
    }
})

Vue.directive('topfix', {
    bind(el, binding){
        console.log(el, binding)
        el.style.position = 'fixed'

        if(binding.expression){
            el.style.top = binding.expression + 'px'
        }
        if(binding.arg){
            let color = 'DarkMagenta'
            let modificadores = Object.keys(binding.modifiers)

            if(modificadores.length > 0){
                color = modificadores[0]
            }

            el.style.backgroundColor = color
        }
    }
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
