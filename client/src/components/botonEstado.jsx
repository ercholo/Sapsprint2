import { Button } from '@mui/material';

export const BotonEstado = (nombreImpresora) => {

    const printer = nombreImpresora.property;

    const handleClick = async () => {

        // La función para manejar el punchar el botón ¿fetch?
        console.log(`Boton estado por la impresora ${printer}`);
        
        try {
            const res = await fetch('http://172.30.5.181:4444/impresoras', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ estado: printer })
            })
            const data = await res.json();
            console.log(data.pausa);            
            
        } catch (error)      {
            console.log(error);
        }
           
    }

    return (

        <Button variant="contained"
            onClick={() =>
                handleClick(printer)
            }>
            Estado
        </Button>
    )
}