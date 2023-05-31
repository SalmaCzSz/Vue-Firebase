const app = new Vue({
    el: '#main', //punto de anclaje
    data:{
        conectado: true,  //false: en el DOM el elemento existe, pero no está renderizado
        edad: 21,
        lista: ['Manuel', 'José', 'Victoria'],
        listapersonas: [
            {
                nombre: 'Manuel',
                edad: 37
            },
            {
                nombre: 'Jose',
                edad: 34
            },
            {
                nombre: 'Victoria',
                edad: 20
            }
        ]
    }
})