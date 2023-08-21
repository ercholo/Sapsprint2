const { exec } = require('child_process');
const regexCorrecto = /(Correcto|Success)/gi;
let imprPagPrueba = Boolean;

const imprimirPaginaPrueba = (printer) => {

    return new Promise((resolve, reject) => {

        exec(`cscript prnqctl.vbs -e -s SAPSPRINT2 -p ${printer}`, { cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES', encoding: 'latin1' }, (error, stdout, stderr) => {

            console.log(stdout)
            //Si hay errores, que los muestre
            if (error) {
                console.log(stdout);
                console.log(stderr);
                reject();
            };

            if (stdout.match(regexCorrecto)) {
                imprPagPrueba = true
            } else { imprPagPrueba = false }

            resolve(
                {
                    imprPagPrueba: imprPagPrueba
                }
            );
        });
    });
};

module.exports = imprimirPaginaPrueba;