const app = new Vue({
    el: '#app',
    data:{
        personas: []
    },
    mounted(){
        console.log('Instancia montada')
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then( (respuesta = T)=> {
                console.log(respuesta.data)
                this.personas = respuesta.data
             })
    }
})
