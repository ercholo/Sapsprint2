import { Button } from '@mui/material';
import { useState, forwardRef } from 'react';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const BotonReanudar = ({ printer }) => {

    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);

    const handleClick = async (printer) => {

        // La función para manejar el punchar el botón ¿fetch?
        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${printer}/reanuda`, {
                method: 'GET'
            })
            const data = await res.json();
            data.reanuda ? setShowAlertSuccess(true) : setShowAlertError(true);

        } catch (error) {
            console.log(error);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlertSuccess(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Button
                variant="contained"
                startIcon={<PlayArrowIcon />}
                onClick={() =>
                    handleClick(printer)
                }>
                Reanudar
            </Button>
            {showAlertSuccess ?
                <Snackbar open={showAlertSuccess} autoHideDuration={3000} onClose={handleClose}>
                    <Alert severity="success">
                        <AlertTitle>Reanuda impresión correcta</AlertTitle>
                    </Alert>
                </Snackbar>
                :
                <Snackbar open={showAlertError} autoHideDuration={3000} onClose={handleClose}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert — <strong>check it out!</strong>
                    </Alert>
                </Snackbar>
            }
        </Stack>
    )
}

BotonReanudar.propTypes = {
    printer: PropTypes.string
}