let arr =
    [
        {
            "status": "fulfilled",
            "value": {
                "impresora": "16ALAV101",
                "valor": "11"
            }
        },
        {
            "status": "fulfilled",
            "value": {
                "impresora": "16ALAV102",
                "valor": "12"
            }
        },
        {
            "status": "fulfilled",
            "value": {
                "impresora": "18ALETQ01",
                "valor": "5"
            }
        },
        {
            "status": "fulfilled",
            "value": {
                "impresora": "18ALETQ02",
                "valor": "55"
            }
        }
    ]

function createData(nameImpresora, numTrabajos, numAlmacen, tipo) {
    return { nameImpresora, numTrabajos, numAlmacen, tipo };
}

const rows = [
    createData('16ALAV101', 0, 'RG16', 'papel'),
    createData('16ALAV102', 0, 'RG16', 'papel'),
    createData('18ALETQ01', 0, 'RG18', 'etiquetas'),
    createData('18ALETQ02', 0, 'RG18', 'etiquetas')
]

const setTrabajosOnRow = () => {
    
    arr.forEach((item) => {

        rows.find(printer => {

            if (item.value.impresora === printer.nameImpresora) {
                printer.numTrabajos = item.value.valor
            }
        })
    });
}
setTrabajosOnRow();

console.log(rows)