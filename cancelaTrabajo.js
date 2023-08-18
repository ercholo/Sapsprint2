const { exec } = require('child_process');
const regexCorrecto = /(Correcto|Success)/gi;
let cancelado = Boolean;

const trabajos = (printer, id) => {
    console.log(printer);
    console.log(id)

    return new Promise((resolve, reject) => {

        exec(`cscript prnjobs.vbs -x -j ${id} -s SAPSPRINT2 -p ${printer}`, { cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES', encoding: 'latin1' }, (error, stdout, stderr) => {

            console.log(stdout)
            //Si hay errores, que los muestre
            if (error) {
                console.log(stdout);
                console.log(stderr);
                reject();
            };

            if (stdout.match(regexCorrecto)) {
                cancelado = true
            } else { cancelado = false }

            resolve(
                {
                    cancelado: cancelado
                }
            );
        });
    });
};

module.exports = trabajos;