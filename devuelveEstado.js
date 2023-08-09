const { exec } = require('child_process');
const regInactiva = /inactivo|idle/gi;
const regImprimiendo = /imprimiendo|printing/gi;
const regPausa = /pausado|paused/gi;
const sinPapel = /No\s\hay\s\papel|no\s\paper/gi;
const sinConexion = /Sin\sconexión|offline/gi;
const lowToner = /falta\s\toner|low\s\toner/gi;
const regError = /error/gi;

const estados = (printer) => {

    return new Promise((resolve, reject) => {

        exec(`cscript prncnfg.vbs -g -s SAPSPRINT2 -p ${printer}`, { cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr) => {

            console.log(stdout)

            //Si hay errores, que los muestre
            if (error) {
                console.log(stdout);
                console.log(stderr);
                reject();
            };

            //Si la impresora tiene un "error" en el stdout devuelvo true en el campo "error"
            if (stdout.match(regInactiva)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "INACTIVA"
                    }
                );

            } else if (stdout.match(regImprimiendo)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "IMPRIMIENDO"
                    }
                );

            } else if (stdout.match(regPausa)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "PAUSADA"
                    }
                );

            } else if (stdout.match(sinPapel)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "SIN PAPEL"
                    }
                );

            } else if (stdout.match(sinConexion)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "SIN CONEXION"
                    }
                );

            } else if (stdout.match(lowToner)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "TÓNER BAJO"
                    }
                );

            } else if (stdout.match(regError)) {
                resolve(
                    {
                        impresora: printer,
                        estado: "ERROR"
                    }
                );
            } else {
                resolve(
                    {
                        impresora: printer,
                        estado: "PROBABLEMENTE ERROR"
                    }
                );
            }
            //Si hay más de 500 lo dejo pasar, hay muchas impresoras averiadas con millones de trabajos
            // if (parseInt(result[0]) > 500) { 
            //     resolve("+500");
            // }; 


        }
        );

    });

};

module.exports = estados;