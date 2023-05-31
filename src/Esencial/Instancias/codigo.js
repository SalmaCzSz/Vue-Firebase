const puente = new Vue({
    data:{
        datosgenerico: 'Este String es compartido'
    }
})

const app = new Vue({  //genera una copia del motor V8 del navegador
    el: '#main',
    data:{
        titulo: 'Instancia numero 1',
        dato: 35,
        datogenerico: puente.datosgenerico
    }
})

const app2 = new Vue({
    el: '#app2',
    data:{
        titulo: 'Instancia numero 2',
        dato: 12,
        datogenerico: puente.datosgenerico
    }
})