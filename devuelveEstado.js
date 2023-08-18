const { exec } = require('child_process');
const regInactiva = /inactivo|idle/gi;
const regImprimiendo = /imprimiendo|printing/gi;
const regPausa = /pausado|paused/gi;
const regSinPapel = /No\s\hay\s\papel|no\s\paper/gi;
const regSinConexion = /Sin conexi|offline/gi;
const regLowToner = /falta t|low toner/gi;
const regError = /Error/g;
const regIp = /172\.30\.\d+\.\d+/g;
let ip = "";
let desviada = false;
let impresoraDesvio = "Sin desviar";
const impresorasIP = [
    {
        impresora: "16ALAV101",
        ip: "172.30.141.243"
    },
    {
        impresora: "16ALAV201",
        ip: "172.30.141.245"
    },
    {
        impresora: "16ALAV102",
        ip: "172.30.141.244"
    },
    {
        impresora: "16ALAV202",
        ip: "172.30.141.246"
    },
    {
        impresora: "16ALDEV01",
        ip: "172.30.141.247"
    },
    {
        impresora: "16ALETQ01",
        ip: "172.30.141.80"
    },
    {
        impresora: "16ALETQ02",
        ip: "172.30.141.81"
    },
    {
        impresora: "16ALETQ03",
        ip: "172.30.141.82"
    },
    {
        impresora: "16ALEXP01",
        ip: "172.30.141.248"
    },
    {
        impresora: "16ALJEF01",
        ip: "172.30.141.249"
    },
    {
        impresora: "17ADCOM01",
        ip: "172.30.95.243"
    },
    {
        impresora: "17ALAV101",
        ip: "172.30.95.247"
    },
    {
        impresora: "17ALAV102",
        ip: "172.30.95.242"
    },
    {
        impresora: "17ALDEV01",
        ip: "172.30.95.245"
    },
    {
        impresora: "17ALGVO01",
        ip: "172.30.95.242"
    },
    {
        impresora: "17ALJEF01",
        ip: "172.30.95.245"
    },
    {
        impresora: "17ATTOM01",
        ip: "172.30.95.246"
    },
    {
        impresora: "17ALETQ00",
        ip: "172.30.95.80"
    },
    {
        impresora: "17ALETQ01",
        ip: "172.30.95.81"
    },
    {
        impresora: "17ALETQ02",
        ip: "172.30.95.82"
    },
    {
        impresora: "18ALAV101",
        ip: "172.30.120.246"
    },
    {
        impresora: "18ALAV102",
        ip: "172.30.120.243"
    },
    {
        impresora: "18ALAV201",
        ip: "172.30.120.246"
    },
    {
        impresora: "18ALAV202",
        ip: "172.30.120.243"
    },
    {
        impresora: "18ALDEV01",
        ip: "172.30.120.247"
    },
    {
        impresora: "18ALETQ01",
        ip: "172.30.120.80"
    },
    {
        impresora: "18ALETQ02",
        ip: "172.30.120.81"
    },
    {
        impresora: "18ALETQ03",
        ip: "172.30.120.82"
    },
    {
        impresora: "18ALEXP01",
        ip: "172.30.120.245"
    },
    {
        impresora: "18ALJEF01",
        ip: "172.30.120.248"
    }
]

const estados = (printer) => {

    return new Promise((resolve, reject) => {

        exec(`cscript prncnfg.vbs -g -s SAPSPRINT2 -p ${printer}`, { cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr) => {

            // console.log(stdout)

            ip = stdout.match(regIp);
            
            //Comparo el puerto del stdout con el puerto que tiene predefinido la impresora. Si hay diferencias es que está desviada.
            for ( let impresora of impresorasIP) {

                if ( impresora.impresora === printer && ip[0] === impresora.ip) {
            
                    desviada = false;
            
                } else if ( impresora.impresora === printer && ip[0] != impresora.ip) {
            
                    console.log(ip[0])
                    desviada = true;
                    impresoraDesvio = impresorasIP.find(impresora => impresora.ip === ip[0])
                    console.log(impresoraDesvio)            
                }
            }            

            //Si hay errores, que los muestre
            if (error) {
                console.log(stdout);
                console.log(stderr);
                reject();
            };

            //Busco el estado de la impresora en el stdout y lo devuelvo
            if (stdout.match(regInactiva)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "INACTIVA",
                        desviada: desviada,
                        impresoraDesvio: impresoraDesvio.impresora

                    }
                );

            } else if (stdout.match(regImprimiendo)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "IMPRIMIENDO",
                        desviada: desviada,
                        impresoraDesvio: impresoraDesvio.impresora
                    }
                );

            } else if (stdout.match(regPausa)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "PAUSADA",
                        desviada: desviada,
                        impresoraDesvio: impresoraDesvio.impresora
                    }
                );

            } else if (stdout.match(regSinPapel)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "SIN PAPEL",
                        desviada: desviada,
                        impresoraDesvio: impresoraDesvio.impresora
                    }
                );

            } else if (stdout.match(regSinConexion)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "SIN CONEXION",
                        desviada: desviada,
                        impresoraDesvio: impresoraDesvio.impresora
                    }
                );

            } else if (stdout.match(regLowToner)) {

                resolve(
                    {
                        impresora: printer,
                        estado: "TÓNER BAJO",
                        desviada: desviada,
                        impresoraDesvio: impresoraDesvio.impresora
                    }
                );

            } else if (stdout.match(regError)) {
                
                resolve(
                    {
                        impresora: printer,
                        estado: "ERROR",
                        desviada: desviada,
                        impresoraDesvio: impresoraDesvio.impresora
                    }
                );
            } else {
                resolve(
                    {
                        impresora: printer,
                        estado: "PROBABLEMENTE ERROR",
                        desviada: desviada,
                        impresoraDesvio: impresoraDesvio.impresora
                    }
                );
            }
            //Si hay más de 500 lo dejo pasar, hay muchas impresoras averiadas con millones de trabajos
            // if (parseInt(result[0]) > 500) { 
            //     resolve("+500");
            // }; 

        });
    });
};

module.exports = estados;