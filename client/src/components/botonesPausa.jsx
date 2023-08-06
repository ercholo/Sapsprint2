import { Button } from '@mui/material';
import { useState, useEffect } from 'react';




export const BotonPausa = (nombreImpresora) => {

    const [data, setData] = useState("");

    const printer = nombreImpresora.property
    
    // console.log(printer.nombreImpresora.property)

    function handleClick() {
        // La función para manejar el punchar el botón ¿fetch?
        console.log(`Boton pulsado por la impresora ${printer}`);
    }
    return (

        <Button variant="contained"
            onClick={() =>
                handleClick(printer)
            }>
            Pausar
        </Button>
    )
}