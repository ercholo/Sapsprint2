import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import QuizIcon from '@mui/icons-material/Quiz';

export const BotonPagPrueba = ({printer}) => {

    const handleClick = async (printer) => {

        // La función para manejar el punchar el botón ¿fetch?
        console.log(`Pagina de prueba por la impresora ${printer}`);
        
        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${printer}/pagPrueba/`, {
                method: 'GET'
            })
            const data = await res.json();
            console.log(data);           
            
        } catch (error)      {
            console.log(error);
        }            
    }
  
    return (
        <Button
            startIcon={<QuizIcon />}
            onClick={() =>
                handleClick(printer)
            }>
            Imprimir pagina de prueba
        </Button>
    )
}

BotonPagPrueba.propTypes = {
    printer: PropTypes.string
}