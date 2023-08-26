import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { AlertDialogSlide } from './dialogEstado';
import styles from '../styles/loader.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import GradeIcon from '@mui/icons-material/Grade';

export const BotonEstado = ({printer}) => {

    const [openDialog, setOpenDialog] = useState(false);
    const [estado, setEstado] = useState({});
    const [ultTrabajo, setultTrabajo] = useState({});
    const [isDisabled, setDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = useCallback(async (printer) => {

        setDisabled(true);
        setIsLoading(true);

        console.log(`Boton estado por la impresora ${printer}`);

        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${printer}/estado`, {
                method: 'GET'
            });
            const data = await res.json();
            console.log(data);
            setEstado(data);
            // if(data) {setDisabled(false)}
        } catch (error) {
            console.log(error);
        }

        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${printer}/`, {
                method: 'GET'
            });
            const ultTrabajo = await res.json();
            console.log(ultTrabajo)
            setultTrabajo(ultTrabajo)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            // setDisabled(false);
        }

    }, []);

    //Lo ejecuta una vez para todas las impresoras
    // useEffect(() => {
    //     handleClick();
    // }, [handleClick]);


    const handleOpenDialog = async () => {
        await handleClick(printer);
        setOpenDialog(true);
        setDisabled(false);
    };

    return (
        <>
        {isLoading && (
        <div className={styles.overlay}>
          <CircularProgress style={{'color': 'yellow'}} size={160} />
        </div>
      )}
            <Button
                variant="contained"
                startIcon={<GradeIcon />}
                disabled = {isDisabled}
                onClick={handleOpenDialog}>
                {isLoading ? 'Cargando...' : 'Estado'}
            </Button>
            <AlertDialogSlide openDialog={openDialog} setOpenDialog={setOpenDialog} estado={estado} ultTrabajo={ultTrabajo} />
        </>
    )
}

BotonEstado.propTypes = {
    printer: PropTypes.string
}