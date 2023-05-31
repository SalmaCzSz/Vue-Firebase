const app = new Vue({
    el: '#main',
    data:{
        tarea: null,
        tareas: [
            {titulo: 'Aprender ES6', completado: false },
            {titulo: 'Aprender VUE', completado: false },
            {titulo: 'Descansar toda la tarde', completado: false },
            {titulo: 'Traducir documentos T24', completado: true }
        ]
    },
    methods:{
        agregarTarea(){
            this.tareas.unshift({titulo:this.tarea, completado:false})
        }
    },
    computed:{
        mostrarCompletadas(){
            return this.tareas.filter(item => item.completado)
        },
        mostrarPorTitulo(){
             return this.tareas.filter(item => item.titulo.includes(this.tarea))
        }
    }
})