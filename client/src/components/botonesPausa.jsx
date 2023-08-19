import { Button } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import PauseIcon from '@mui/icons-material/Pause';

export const BotonPausa = ({printer}) => {

    const [buttonText, setButtonText] = useState('Pausar');

    const handleClick = async (printer) => {

        // La función para manejar el punchar el botón ¿fetch?
        console.log(`Boton pulsado por la impresora ${printer}`);
        
        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${printer}/pausa/`, {
                method: 'GET'
            })
            const data = await res.json();
            console.log(data);           
            
        } catch (error)      {
            console.log(error);
        }        
        setButtonText('Pausar');        
    }
  
    return (

        <Button 
            variant="contained"
            startIcon={<PauseIcon />}
            onClick={() =>
                handleClick(printer)
            }>
            {buttonText}
        </Button>
    )
}

BotonPausa.propTypes = {
    printer: PropTypes.string
}