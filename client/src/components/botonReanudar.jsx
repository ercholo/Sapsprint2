import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export const BotonReanudar = ({printer}) => {

    const handleClick = async (printer) => {

        // La función para manejar el punchar el botón ¿fetch?
        console.log(`Boton reanudado por la impresora ${printer}`);
        
        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${printer}/reanuda`, {
                method: 'GET'
            })
            const data = await res.json();
            console.log(data);
                    
        } catch (error)      {
            console.log(error);
        }
        
    }

    return (

        <Button variant="contained"
            onClick={() =>
                handleClick(printer)
            }>
            Reanudar
        </Button>
    )
}

BotonReanudar.propTypes = {
    printer: PropTypes.string
}