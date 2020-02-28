//const {crearArchivo} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
const multiplicar = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando.toLowerCase()) {
    case 'listar':
        multiplicar.listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(` Archivo  creado : ${archivo}`))
            .catch(err => console.log('Error', err));
        break;
    default:
        console.log('Comando no reconocido');
}