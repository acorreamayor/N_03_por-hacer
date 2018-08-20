const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}


const argv = require('yargs')
    .command('listar', 'Lista las tareas que están por hacer')
    .command('crear', 'Crea una nueva lista por hacer', opts)
    .command('actualizar', 'Actualizar el estado de una lista', opts)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;


module.exports = {
    argv
}