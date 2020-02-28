const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};
const argv = require('yargs')
    .command('listar', 'Imprime en cosola la tabla de Multiplicar', opts)
    .command('crear', 'Crear el archivo de la Tabla de Multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
};