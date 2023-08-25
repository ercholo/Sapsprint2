let arr =
    [
        {
            "status": "fulfilled",
            "value": {
                "error": false,
                "impresora": "16ALAV101",
                "valor": "11"
            }
        },
        {
            "status": "fulfilled",
            "value": {
                "error": false,
                "impresora": "16ALAV102",
                "valor": "12"
            }
        },
        {
            "status": "fulfilled",
            "value": {
                "error": true,
                "impresora": "18ALETQ01",
                "valor": "5"
            }
        },
        {
            "status": "fulfilled",
            "value": {
                "error": false,
                "impresora": "18ALETQ02",
                "valor": "55"
            }
        }
    ]


const error =
    `Nombre de servidor SAPSPRINT2
Nombre de impresora 18aletq02
Nombre del recurso compartido
Nombre de controlador Generic / Text Only
Nombre del puerto 172.30.120.81
Comentario
Ubicación 172.30.120.231
Archivo separador
Procesador de impresión winprint
Tipo de datos RAW
Parámetros
Prioridad 1
Prioridad predeterminada 0
Impresora siempre disponible
Atributos local do_complete_first

Estado de la impresora Otros
Estado de impresora extendido Error
Estado de error detectado Otros
Estado de error detectado extendido Otros

Server name SAPSPRINT2
Printer name 18aletq02
Share name
Driver name Generic / Text Only
Port name 172.30.120.81
Comment
Location 172.30.120.231
Separator file
Print processor winprint
Data type RAW
Parameters
Priority 1
Default priority 0
Printer always available
Attributes local do_complete_first

Printer status Other
Extended printer status Error
Detected error state Other
Extended detected error state Other`;

const inactiva =
    `Nombre de servidor SAPSPRINT2
Nombre de impresora 18aletq01
Nombre del recurso compartido
Nombre de controlador Generic / Text Only
Nombre del puerto 172.30.120.80
Comentario
Ubicación
Archivo separador
Procesador de impresión winprint
Tipo de datos RAW
Parámetros
Prioridad 1
Prioridad predeterminada 0
Impresora siempre disponible
Atributos local do_complete_first

Estado de la impresora Inactivo
Estado de impresora extendido Desconocido
Estado de error detectado Desconocido
Estado de error detectado extendido Desconocido

Server name SAPSPRINT2
Printer name 16alav101
Share name 16ALAV101
Driver name Ricoh Aficio SP 8100DN PS
Port name 172.30.141.243
Comment Punto AV1. Sector 1
Location Tortosa
Separator file
Print processor winprint
Data type RAW
Parameters
Priority 1
Default priority 0
Printer always available
Attributes local shared do_complete_first

Printer status Idle
Extended printer status Unknown
Detected error state Unknown
Extended detected error state Unknown`;

const pausa =
    `Nombre de servidor SAPSPRINT2
Nombre de impresora 01sipro01
Nombre del recurso compartido 01SIPRO01
Nombre de controlador Ricoh Aficio MP 161 PCL6
Nombre del puerto 172.30.2.15
Comentario Programación
Ubicación Sistemas de Información
Archivo separador
Procesador de impresión winprint
Tipo de datos RAW
Parámetros
Prioridad 1
Prioridad predeterminada 0
Impresora siempre disponible
Atributos local shared do_complete_first

Estado de la impresora Otros
Estado de impresora extendido Pausado
Estado de error detectado Otros
Estado de error detectado extendido Otros

Server name SAPSPRINT2
Printer name 01siope01
Share name 01SIOPE01
Driver name Ricoh Aficio SP 8100DN PS
Port name 172.30.2.3
Comment
Location Operacion
Separator file
Print processor winprint
Data type RAW
Parameters
Priority 1
Default priority 0
Printer always available
Attributes local shared do_complete_first

Printer status Other
Extended printer status Paused
Detected error state Other
Extended detected error state Other`


const imprimiendo =
    `Nombre de servidor SAPSPRINT2
Nombre de impresora 01sipro01
Nombre del recurso compartido 01SIPRO01
Nombre de controlador Ricoh Aficio MP 161 PCL6
Nombre del puerto 172.30.2.15
Comentario Programación
Ubicación Sistemas de Información
Archivo separador
Procesador de impresión winprint
Tipo de datos RAW
Parámetros
Prioridad 1
Prioridad predeterminada 0
Impresora siempre disponible
Atributos local shared do_complete_first

Estado de la impresora Imprimiendo
Estado de impresora extendido Desconocido
Estado de error detectado Otros
Estado de error detectado extendido Desconocido

Server name SAPSPRINT2
Printer name 18aldev01
Share name 18ALDEV01
Driver name Ricoh Aficio SP 8100DN PS
Port name 172.30.120.247
Comment Devoluciones
Location Granada
Separator file
Print processor winprint
Data type RAW
Parameters
Priority 1
Default priority 0
Printer always available
Attributes local shared do_complete_first

Printer status Printing
Extended printer status Unknown
Detected error state Other
Extended detected error state Unknown`


const sinConexion =
    `Microsoft (R) Windows Script Host versión 5.812
Copyright (C) Microsoft Corporation. Reservados todos los derechos.

Nombre de servidor SAPSPRINT2
Nombre de impresora 17ATTOM01
Nombre del recurso compartido 17ATTOM01
Nombre de controlador Ricoh Aficio MP 161 PCL6
Nombre del puerto 172.30.95.246
Comentario Atención al cliente
Ubicación Melilla
Archivo separador
Procesador de impresión winprint
Tipo de datos RAW
Parámetros
Prioridad 1
Prioridad predeterminada 0
Impresora siempre disponible
Atributos local shared do_complete_first

Estado de la impresora Otros
Estado de impresora extendido Sin conexión
Estado de error detectado Sin conexión
Estado de error detectado extendido Otros`

const sinPapel =

    `Nombre de servidor SAPSPRINT2
Nombre de impresora 17aldev01
Nombre del recurso compartido 17ALDEV01
Nombre de controlador Ricoh Aficio MP 161 PCL6
Nombre del puerto 172.30.95.245
Comentario Devoluciones
Ubicación 172.30.95.245 Melilla
Archivo separador
Procesador de impresión winprint
Tipo de datos RAW
Parámetros
Prioridad 1
Prioridad predeterminada 0
Impresora siempre disponible
Atributos local shared do_complete_first

Estado de la impresora Otros
Estado de impresora extendido Otros
Estado de error detectado No hay papel
Estado de error detectado extendido No hay papel

Server name SAPSPRINT2
Printer name 08alexp01
Share name 08ALEXP01
Driver name Ricoh Aficio SP 8100DN PS
Port name 172.30.41.245
Comment Expediciones
Location Albacete
Separator file
Print processor winprint
Data type RAW
Parameters
Priority 1
Default priority 0
Printer always available
Attributes local shared do_complete_first

Printer status Other
Extended printer status Other
Detected error state No paper
Extended detected error state No paper`


const bajoToner =

    `Nombre de servidor SAPSPRINT2
Nombre de impresora 01apcom01
Nombre del recurso compartido 01APCOM01
Nombre de controlador Ricoh Aficio MP 161 PCL6
Nombre del puerto 172.30.2.112
Comentario Aprovisionamiento
Ubicación Oficinas Almacén
Archivo separador
Procesador de impresión winprint
Tipo de datos RAW
Parámetros
Prioridad 1
Prioridad predeterminada 0
Impresora siempre disponible
Atributos local shared do_complete_first

Estado de la impresora Otros
Estado de impresora extendido Otros
Estado de error detectado Falta tóner
Estado de error detectado extendido Falta tóner

Server name SAPSPRINT2
Printer name 01apcom01
Share name 01APCOM01
Driver name Ricoh Aficio MP 161 PCL6
Port name 172.30.2.112
Comment Aprovisionamiento
Location Oficinas Almacén
Separator file
Print processor winprint
Data type RAW
Parameters
Priority 1
Default priority 0
Printer always available
Attributes local shared do_complete_first

Printer status Other
Extended printer status Other
Detected error state Low toner
Extended detected error state Low toner`


const primerTrabajo =
    `Microsoft (R) Windows Script Host versión 5.812
Copyright (C) Microsoft Corporation. Reservados todos los derechos.


Id. de trabajo 1980
Impresora 18ALETQ02
Documento Página de prueba
Tipo de datos RAW
Nombre de controlador Generic / Text Only
Descripción 18ALETQ02, 1980
Nombre del equipo CPD21
Notificar gregorio.sanchez
Propietario gregorio.sanchez
Páginas imprimidas 0
Parámetros
Tamaño 1800
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Estado Error asociado al trabajo El trabajo se está imprimiendo
Hora de envío 08/01/2023 16:57:44
Número total de páginas 1

Id. de trabajo 1981
Impresora 18ALETQ02
Documento Página de prueba
Tipo de datos RAW
Nombre de controlador Generic / Text Only
Descripción 18ALETQ02, 1981
Tiempo transcurrido 00:00:00
Nombre del equipo CPD21
Notificar gregorio.sanchez
Propietario gregorio.sanchez
Páginas imprimidas 0
Parámetros
Tamaño 1800
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Estado
Hora de envío 08/01/2023 17:00:10
Número total de páginas 1

Id. de trabajo 1941
Impresora 18ALETQ02
Documento Página de prueba
Tipo de datos RAW
Nombre de controlador Generic / Text Only
Descripción 18ALETQ02, 1941
Tiempo transcurrido 00:00:00
Nombre del equipo CPD21
Notificar gregorio.sanchez
Propietario gregorio.sanchez
Páginas imprimidas 0
Parámetros
Tamaño 1800
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Estado
Hora de envío 08/03/2023 17:05:26
Número total de páginas 1

Id. de trabajo 924
Impresora 18ALETQ02
Documento RADIO18/P010000872822_1
Tipo de datos RAW
Nombre de controlador Generic / Text Only
Descripción 18ALETQ02, 924
Tiempo transcurrido 00:00:00
Nombre del equipo \\SAPSPRINT2
Notificar SYSTEM
Propietario SYSTEM
Páginas imprimidas 0
Parámetros
Tamaño 2743
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Estado
Hora de envío 08/07/2023 14:50:31
Número total de páginas 0

Id. de trabajo 925
Impresora 18ALETQ02
Documento RADIO18/P010000872821_1
Tipo de datos RAW
Nombre de controlador Generic / Text Only
Descripción 18ALETQ02, 925
Tiempo transcurrido 00:00:00
Nombre del equipo \\SAPSPRINT2
Notificar SYSTEM
Propietario SYSTEM
Páginas imprimidas 0
Parámetros
Tamaño 2743
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Estado
Hora de envío 08/07/2023 14:50:31
Número total de páginas 0

Id. de trabajo 928
Impresora 18ALETQ02
Documento RADIO18/P010000872859_1
Tipo de datos RAW
Nombre de controlador Generic / Text Only
Descripción 18ALETQ02, 928
Tiempo transcurrido 00:00:00
Nombre del equipo \\SAPSPRINT2
Notificar SYSTEM
Propietario SYSTEM
Páginas imprimidas 0
Parámetros
Tamaño 2743
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Estado
Hora de envío 08/07/2023 14:51:11
Número total de páginas 0

Id. de trabajo 929
Impresora 18ALETQ02
Documento RADIO18/P010000872860_1
Tipo de datos RAW
Nombre de controlador Generic / Text Only
Descripción 18ALETQ02, 929
Tiempo transcurrido 00:00:00
Nombre del equipo \\SAPSPRINT2
Notificar SYSTEM
Propietario SYSTEM
Páginas imprimidas 0
Parámetros
Tamaño 2743
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Estado
Hora de envío 08/07/2023 14:51:11
Número total de páginas 0

Id. de trabajo 935
Impresora 18ALETQ02
Documento RADIO18/P010000873130_1
Tipo de datos RAW
Nombre de controlador Generic / Text Only
Descripción 18ALETQ02, 935
Tiempo transcurrido 00:00:00
Nombre del equipo \\SAPSPRINT2
Notificar SYSTEM
Propietario SYSTEM
Páginas imprimidas 0
Parámetros
Tamaño 2743
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Estado
Hora de envío 08/07/2023 14:53:04
Número total de páginas 0

Id. de trabajo 936
Impresora 18ALETQ02
Documento RADIO18/P010000873126_1
Tipo de datos RAW
Nombre de controlador Generic / Text Only
Descripción 18ALETQ02, 936
Tiempo transcurrido 00:00:00
Nombre del equipo \\SAPSPRINT2
Notificar SYSTEM
Propietario SYSTEM
Páginas imprimidas 0
Parámetros
Tamaño 2743
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Estado
Hora de envío 08/07/2023 14:53:04
Número total de páginas 0

Número de trabajos de impresión enumerados 9`



// const regId =  /\d*?$/gim;



// const match = primerTrabajo.match(regExp);

// const sinConexionReg = /Sin conexión|offline/gim;

// const regIp = /172\.30\.\d+\.\d+/g;



// const ip = "172.30.141.245";
// let desviada = false;
// const printer = "18ALAV201"
// let impresoraDesvio = "";


const puestaPorSuSitio =
    `Microsoft (R) Windows Script Host versión 5.812
Copyright (C) Microsoft Corporation. Reservados todos los derechos.

Impresora configurada 18aletq03`

// const regEnSuSitioOriginal = /(Impresora configurada|Configured printer)/gi;

// const regId =  /Id\. de trabajo (\d+)(?=\n\n|[\s\S]*$)/;

// const regId =  /(trabajo|id).(\d+)/i;

// const prueba = primerTrabajo.match(regId)
// console.log(prueba[2])


const regFechaPrimerTrabajo = /^(hora|time).*?$/im;
// console.log(prueba)

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
            ip: "172.30.141.246"
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
            impresora: "18ALEXP01",
            ip: "172.30.120.245"
        },
        {
            impresora: "18ALJEF01",
            ip: "172.30.120.248"
        }
    ]


    const impresorasEtq = [
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
        }
    ]


const regImpEtq = /^[0-9]{2}ALETQ[0-9]{2}$/
const printer = '18ALJEF01';
const printerEtq = '18ALETQ02';
const almImp = printer.substring(0, 2);

console.log(almImp)


//Funcion para filtrar las impresoras compatibles para el desvío (si es de etiquetas o de papel y si es de un almacén en cocreto)
const comprueba = () => {

    // Para saber si la impresora es de etiquetas
    if (printerEtq.match(regImpEtq)) {

        const resultado = impresorasEtq.filter(impresora =>
            impresora.impresora.startsWith(almImp)
        );

        resultado.map(impresora => console.log(impresora.impresora))
    } else {

    }
}

comprueba();

// const comprueba = () => {

//     impresorasEtq.map((impresora) => {
//         if (impresora.impresora.match(regImpEtq)) {
//             console.log(`match! ${impresora.impresora}`)
//         }
//     });
// }
//  comprueba();


// const regAlmacen = /18ALETQ02/
// const regAlmacen = /^[0-9]{2}\w/

// let result1 = impresorasIP.map(impresora => {
//     // 
//     console.log(impresora.impresora.match(regAlmacen))
// })



// console.log(result1);

const ipString1 =
    `Microsoft (R) Windows Script Host versión 5.812
Copyright (C) Microsoft Corporation. Reservados todos los derechos.

Nombre de servidor SAPSPRINT2
Nombre de impresora 18ALAV201
Nombre del recurso compartido 18ALAV201
Nombre de controlador Ricoh Aficio SP 8100DN PS
Nombre del puerto 172.30.120.246
Comentario AV2 Sector 1
Ubicación Granada
Archivo separador
Procesador de impresión winprint
Tipo de datos RAW
Parámetros
Prioridad 1
Prioridad predeterminada 0
Impresora siempre disponible
Atributos local shared do_complete_first

Estado de la impresora Inactivo
Estado de impresora extendido Desconocido
Estado de error detectado Desconocido
Estado de error detectado extendido Desconocido`




