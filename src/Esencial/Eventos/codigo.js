const app = new Vue({
    el: '#main',
    data:{
        tarea: null,
        tareas: [
            'Aprender ES6',
            'Aprender Vue',
            'Descansar toda la tarde'
        ]
    },
    methods:{
        agregarTarea(){
            this.tareas.unshift(this.tarea)
        }
    }
})