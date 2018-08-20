const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('========Por hacer============='.green);
            console.log(tarea.descripcion);
            console.log('Estado; ', tarea.completado);
            console.log('============================='.green);
        }

        break;
    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        porHacer.borrar(argv.descripcion);
        break;
    default:
        console.log('Comando no es reconocido');
}