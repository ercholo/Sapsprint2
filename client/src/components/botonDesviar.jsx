import { Button } from '@mui/material';
import {useState} from 'react';

export const BotonDesviar = (nombreImpresora) => {

    const printer = nombreImpresora.property;

    const [isDisabled, setDisabled] = useState(false);

    const handleClick = async () => {

        setDisabled(true);
        // La función para manejar el punchar el botón ¿fetch?
        console.log(`Desviar la impresora ${printer}`);

        // try {
        //     const res = await fetch(`http://172.30.5.181:4444/impresoras/${printer}/estado`, {
        //         method: 'GET'
        //     })
        //     const data = await res.json();
        //     console.log(data);
        //     if(data) {setDisabled(false)}

        // } catch (error) {
        //     console.log(error);
        // }

    }

    return (

        <Button
            variant="contained"
            disabled = {isDisabled}
            onClick={() =>
                handleClick(printer)
            }>
            Desviar
        </Button>
    )
}