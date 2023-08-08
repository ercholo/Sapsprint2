const { exec } = require('child_process');
const regexNumImp = /\d+$/g;
const regexError = /error/gi;

const trabajos = (printer) => {

    return new Promise((resolve, reject) => {

        exec(`cscript prnjobs.vbs -l -s sapsprint2 -p ${printer}`, { cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr) => {

            //Si hay errores, que los muestre
            if (error) {
                console.log(stdout);
                console.log(stderr);
                reject();
            };

            //result es el array que tiene los trabajos en cola cuando la impresora es llamada
            const result = stdout.replace(/\r\n/g, '').match(regexNumImp);

            //Si la impresora tiene un "error" en el stdout devuelvo true en el campo "error"
            if (stdout.match(regexError)) {
                error = true
            } else { error = false }


            //Si hay más de 500 lo dejo pasar, hay muchas impresoras averiadas con millones de trabajos
            // if (parseInt(result[0]) > 500) { 
            //     resolve("+500");
            // }; 

            resolve(
                {
                    impresora: printer,
                    valor: result[0],
                    error: error
                }
            );
        });

    });

};

module.exports = trabajos;