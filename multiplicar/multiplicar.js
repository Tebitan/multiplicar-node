const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {
    data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${ base * i}\n`;
    }
    console.log('========================='.green);
    console.log(`===== Tabla del ${ base } =======`.green);
    console.log('========================='.green);
    console.log(data.yellow);
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor Introducido ${base} No es un Numero `);
            return;
        }
        data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }
        fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`table-${base}.txt`.green);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
};