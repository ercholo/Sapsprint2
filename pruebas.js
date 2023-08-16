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
`Microsoft (R) Windows Script Host Version 5.812
Copyright (C) Microsoft Corporation. All rights reserved.

Id. de trabajo 24
Impresora 18ALETQ02
Documento RADIO18/P010000586504_1
Tipo de datos RAW
Nombre de controlador Generic / Text Only
Descripción 18ALETQ02, 24
Nombre del equipo \\SAPSPRINT2
Notificar SYSTEM
Propietario SYSTEM
Páginas imprimidas 0
Parámetros
Tamaño 3953
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Estado Error asociado al trabajo El trabajo se está imprimiendo
Hora de envío 12/28/2022 12:21:31
Número total de páginas 0

Id. de trabajo 25
Impresora 18ALETQ02
Documento RADIO18/P010000586505_1
Tipo de datos RAW
Nombre de controlador Generic / Text Only
Descripción 18ALETQ02, 25
Tiempo transcurrido 00:00:00
Nombre del equipo \\SAPSPRINT2
Notificar SYSTEM
Propietario SYSTEM
Páginas imprimidas 0
Parámetros
Tamaño 3953
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Estado
Hora de envío 12/28/2022 12:21:31
Número total de páginas 0

Microsoft (R) Windows Script Host Version 5.812
Copyright (C) Microsoft Corporation. All rights reserved.
Job id 24
Printer 18ALETQ02
Document Print Document
Data type RAW
Driver name Generic / Text Only
Description 18ALETQ02, 24
Machine name \\SAPSPRINT2
Notify SYSTEM
Owner SYSTEM
Pages printed 0
Parameters
Size 3953
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Status An error is associated with the job Job is printing
Time submitted 12/28/2022 12:21:31
Total pages 0

Job id 25
Printer 18ALETQ02
Document Print Document
Data type RAW
Driver name Generic / Text Only
Description 18ALETQ02, 25
Elapsed time 00:00:00
Machine name \\SAPSPRINT2
Notify SYSTEM
Owner SYSTEM
Pages printed 0
Parameters
Size 3953
SizeHigh 0
PaperSize A4 210 x 297 mm
PaperWidth 2100
PaperLength 2970
Color MonoChrome
Status
Time submitted 12/28/2022 12:21:31
Total pages 0`;


// const result = sinPapel.match(/No\s\hay\s\papel|no\s\paper/gi);

// const sinPapell = /No\s\hay\s\papel|no\s\paper/gi;

// const regHoraPrimerTrabajo = /^(hora|time).*?$/gim; 

// const regId =  /\d*?$/gim;




// const regid = /trabajo.(\d+)/i

// const prueba = primerTrabajo.match(regid)
const devuelveMal = 
`Microsoft (R) Windows Script Host versión 5.812
Copyright (C) Microsoft Corporation. Reservados todos los derechos.

Nombre de servidor SAPSPRINT2
Nombre de impresora 16ALEXP01
Nombre del recurso compartido 16ALEXP01
Nombre de controlador Ricoh Aficio SP 8100DN PS
Nombre del puerto 172.30.141.248
Comentario Expediciones
Ubicación Tortosa
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


const ipString = 
`Microsoft (R) Windows Script Host versión 5.812
Copyright (C) Microsoft Corporation. Reservados todos los derechos.

Nombre de servidor SAPSPRINT2
Nombre de impresora 16alav201
Nombre del recurso compartido 16ALAV201
Nombre de controlador Ricoh Aficio SP 8100DN PS
Nombre del puerto 172.30.141.245
Comentario Punto AV2. Sector 1
Ubicación Tortosa
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



// const regId =  /\d*?$/gim;

const regFechaPrimerTrabajo = /^(hora|time).*?$/im;

const sinConexionReg = /Sin conexión|offline/gim;

const regIp = /172\.30\.\d+\.\d+/g;

const prueba = ipString.match(regIp)

console.log(prueba)

const ip = "172.30.141.245";
let desviada = false;
const printer = "18ALAV201"
let impresoraDesvio = "";



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

// for ( let impresora of impresorasIP) {

//     if ( impresora.impresora === "18ALAV201" && ip === impresora.ip) {

//         desviada = false;

//     } else if ( impresora.impresora === "18ALAV201" && ip != impresora.ip) {

//         console.log(impresora.impresora)
//         desviada = true;
//         impresoraDesvio = impresorasIP.find(impresora => impresora.ip === ip)
//         console.log(impresoraDesvio)

//     }

// }

// for ( const impresora of impresorasIP) {

//     if ( impresora.impresora === printer && ip === impresora.ip) {

//         desviada = false;

//     } else if ( impresora.impresora === printer && ip != impresora.ip) {

//         desviada = true;
//         impresoraDesvio = impresorasIP.find(impresora => impresora.ip === ip)

//     }

// }



