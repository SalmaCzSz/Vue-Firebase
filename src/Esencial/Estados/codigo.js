const persona = {
    nombre: 'Cotita'
}

new Vue({
    el: '#app1',
    data:{
        persona: {
            //nombre: 'Salma'
            nombre: persona
        }
    }
})

new Vue({
    el: '#app2',
    data:{
        persona: {
            //nombre: 'Norman'
            nombre: persona
        }
    }
})
