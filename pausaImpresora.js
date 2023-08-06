const { exec } = require('child_process');
const regexCorrecto = /Correcto/gi;
const pausa = Boolean;

const pausar = (printer) => {

    return new Promise((resolve, reject) => {

        exec(`cscript prnqctl.vbs -z -s SAPSPRINT2 -p ${printer}`, { cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr) => {

            //Si hay errores, que los muestre
            if (error) {
                console.log(stdout);
                console.log(stderr);
                reject();
            };

            // //result es el array que tiene los trabajos en cola cuando la impresora es llamada
            // const result = stdout.replace(/\r\n/g, '').match(regexNumImp);

            //Si la impresora tiene un "error" en el stdout devuelvo true en el campo "error"
            if (stdout.match(regexCorrecto)) {
                pausa = true
            } else { pausa =  false }


            //Si hay más de 500 lo dejo pasar, hay muchas impresoras averiadas con millones de trabajos
            // if (parseInt(result[0]) > 500) { 
            //     resolve("+500");
            // }; 

            resolve(
                {
                    pausa: pausa
                }
            );
        });

    });

};

module.exports = pausar;