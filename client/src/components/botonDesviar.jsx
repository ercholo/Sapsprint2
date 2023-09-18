import { Button, CircularProgress } from '@mui/material';
import { useState} from 'react';
import { AlertDialogDesviar } from './dialogDesviar';
import styles from '../styles/loader.module.css';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import PropTypes from 'prop-types';

export const BotonDesviar = ({ printer }) => {

    const [estado, setEstado] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

    //Revisamos el estado de la impresora y lo pasamos por prop a diálogo de desviar
    const checkDesviada = async (printer) => {

        setDisabled(true);
        setIsLoading(true);

        // La función para manejar el punchar el botón ¿fetch?
        console.log(`Desviar la impresora ${printer}`);

        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${printer}/estado`, {
                method: 'GET'
            });
            const data = await res.json();
            console.log(data);
            setEstado(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            // setDisabled(false);
        }

    }
    //Si pulsamos en desviar abrimos el dialog con la lista de impresoras disponibles para desviar
    const handleOpenDialog = async () => {
        await checkDesviada(printer);
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
                startIcon={<AltRouteIcon />}
                disabled = {isDisabled}
                onClick={handleOpenDialog}>
                {isLoading ? 'Cargando...' : 'Desviar'}
            </Button>
            <AlertDialogDesviar openDialog={openDialog} setOpenDialog={setOpenDialog} estado={estado} />
        </>
    )
}

BotonDesviar.propTypes = {
    printer: PropTypes.string
}