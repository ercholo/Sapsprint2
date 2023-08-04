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

const fila = "18ALETQ01";
const siONo = "styles.white"

const getBackgroundColor = filaEvaluadaError => {

   arr.find(printer => {

        // console.log(printer)

        if (printer.value.impresora === filaEvaluadaError && printer.value.error === true) {

            siONo = "styles.red"
            
        }

        return siONo
    })
}

const hola = getBackgroundColor(fila);

console.log(hola)



// const trues = [true, false, true];

// const uno = 1
// const dos = 2

// const getBackgroundColor = () => {

//     trues.forEach((item) => {

//         if (trues) {
//             return uno;

//         } else {
//             return dos;
//         }

//     })

// }
// console.log(getBackgroundColor())