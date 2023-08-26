const { exec } = require('child_process');

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
    },
    {
        impresora: "18ATTOM01",
        ip: "172.30.120.249"
    },
    {
        impresora: "18ATTOM02",
        ip: "172.30.120.244"
    }
]

const regIsDesviada = /(Impresora configurada|Configured printer)/gi;
let isDesviada = Boolean;
let ip = String

const desviarImpresora = (impresoraDesviada, impresoraDestino) => {

    console.log(impresoraDesviada);
    console.log(impresoraDestino);
    
    for (let impresora of impresorasIP) {

        if (impresora.impresora === impresoraDestino) {

            ip = impresora.ip
            console.log(ip)

        } 
    }

    return new Promise((resolve, reject) => {

        exec(`cscript prncnfg.vbs -t -s sapsprint2 -p ${impresoraDesviada} -r ${ip}`, { cwd: 'C:\\Windows\\System32\\Printing_Admin_Scripts\\es-ES' }, (error, stdout, stderr) => {

            // console.log(stdout)

                //Si hay errores, que los muestre
                if (error) {
                    console.log(stdout);
                    console.log(stderr);
                    reject();
                };

                //Busco el estado de la impresora en el stdout y lo devuelvo
                if (stdout.match(regIsDesviada)) {
                    isDesviada = true
                } else {
                    isDesviada = false;
                }

                    resolve(
                        {
                            isDesviada: isDesviada
                        }
                    );
                
                //Si hay más de 500 lo dejo pasar, hay muchas impresoras averiadas con millones de trabajos
                // if (parseInt(result[0]) > 500) { 
                //     resolve("+500");
                // }; 

            });
    });
};

module.exports = desviarImpresora;