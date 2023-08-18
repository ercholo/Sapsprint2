import { Button } from '@mui/material';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import PropTypes from 'prop-types';

export const BotonDesviar = ({printer}) => {

    const handleClick = async (printer) => {

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
            startIcon={<AltRouteIcon />}
            // disabled = {isDisabled}
            onClick={() =>
                handleClick(printer)
            }>
            Desviar
        </Button>
    )
}

BotonDesviar.propTypes = {
    printer: PropTypes.string
}