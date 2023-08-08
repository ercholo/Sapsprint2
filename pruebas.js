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
Estado de error detectado extendido Otros`;

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
Estado de error detectado extendido Desconocido`;

