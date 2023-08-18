import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';

export const BotonCancelar = ({ printer, id, isDisabled }) => {

    const handleClick = async(printer, id) => {

        console.log(`Trabajo cancelado por la impresora ${printer}`);
        

        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${printer}/${id}/cancelarTrabajo`, {
                method: 'GET'
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }

    //Lo ejecuta una vez para todas las impresoras
    // useEffect(() => {
    //     handleClick();
    // }, [handleClick]);


    return (
        <>
            <Button
                
                startIcon={<CancelIcon />}
                disabled = {isDisabled}
                onClick={() =>
                    handleClick(printer, id)}>
                Cancelar primer trabajo en cola
            </Button>
        </>
    )
}

BotonCancelar.propTypes = {
    printer: PropTypes.string,
    id: PropTypes.string,
    isDisabled: PropTypes.bool
}