import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { AlertDialogSlide } from './dialogEstado';

export const BotonEstado = ({printer}) => {

    const [openDialog, setOpenDialog] = useState(false);
    const [estado, setEstado] = useState({});


    const handleClick = useCallback(async (printer) => {

        console.log(`Boton estado por la impresora ${printer}`);

        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${printer}/estado`, {
                method: 'GET'
            });
            const data = await res.json();
            console.log(data);
            setEstado(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    //Lo ejecuta una vez para todas las impresoras
    // useEffect(() => {
    //     handleClick();
    // }, [handleClick]);


    const handleOpenDialog = async () => {
        console.log("abro el dialogo");
        await handleClick(printer);
        setOpenDialog(true);
    };

    return (
        <>
            <Button
                variant="contained"
                // disabled = {isDisabled}
                onClick={handleOpenDialog}>
                Estado
            </Button>
            <AlertDialogSlide openDialog={openDialog} setOpenDialog={setOpenDialog} estado={estado} />
        </>
    )
}

BotonEstado.propTypes = {
    printer: PropTypes.string
}