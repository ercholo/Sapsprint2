import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import { BotonDesviaIpOriginal, BotonCancelar, BotonPagPrueba } from './index';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, AlertTitle, Snackbar } from '@mui/material/';
import MuiAlert from '@mui/material/Alert';
import { blue } from '@mui/material/colors';
import PropTypes from 'prop-types';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AlertDialogSlide = ({ openDialog, setOpenDialog, estado, ultTrabajo }) => {

    const [isBotonCancelarDisabled, setIsBotonCancelarDisabled] = useState(ultTrabajo.idUltimoTrabajo === null);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);

    const handleClose = () => {
        setOpenDialog(false);
    };

    useEffect(() => {
        setIsBotonCancelarDisabled(ultTrabajo.idUltimoTrabajo === null);
    }, [ultTrabajo.idUltimoTrabajo]);

    const handleBotonCancelarClick = useCallback(async () => {
        
        console.log(`Trabajo cancelado por la impresora ${estado.impresora}`);

        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${estado.impresora}/${ultTrabajo.idUltimoTrabajo}/cancelarTrabajo`, {
                method: 'GET'
            });
            const data = await res.json();
            data.cancelado ? setShowAlertSuccess(true) : setShowAlertError(true);
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsBotonCancelarDisabled(true);
        }
    },[estado.impresora, ultTrabajo.idUltimoTrabajo])

    return (
        <div>
            <Dialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="estado-y-ultimo-trabajo"
            >
                <DialogTitle>
                    <span style={{ color: '#1563B0' }}>Estado impresora {estado.impresora} </span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="estado-y-ultimo-trabajo" component={'span'} sx={{ fontWeight: 'bold', fontSize: 16, color: blue }}>
                        <div style={{ margin: '8px 0' }}>
                            <span style={{ color: '#1563B0' }}>Estado:</span> {estado.estado}
                        </div>
                        <div style={{ margin: '8px 0' }}>
                            <span style={{ color: '#1563B0' }}>Desvío:</span> {estado.desviada ? 'DESVIADA' : 'Sin desvío'}
                        </div>
                        <div style={{ margin: '8px 0' }}>
                            <span style={{ color: '#1563B0' }}>IP actual: </span> {estado.ip}
                        </div>
                        <div style={{ margin: '8px 0' }}>
                            <span style={{ color: '#1563B0' }}>Impresora desviada:</span> {estado.desviada ? estado.impresoraDesvio : 'Sin desvío'}
                        </div>
                        <div style={{ margin: '8px 0' }}>
                            {/*si la fecha del último trabajo es null es que no tiene trabajos en cola..*/}
                            <span style={{ color: '#1563B0' }}>Fecha primer trabajo en cola:</span> {ultTrabajo.fechaPrimerTrabajo === null ? 'No hay trabajos pendientes' : ultTrabajo.fechaPrimerTrabajo}
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/*si no existe valor de id es que no hay trabajos para cancelar, entonces deshabilito el BotonCancelar.*/}
                    <BotonDesviaIpOriginal printer={estado.impresora} isDisabled={estado.desviada ? false : true} />
                    {/*Le paso la función del fetch y si el estado para el  debe estar habilitado o no*/}
                    <BotonCancelar
                        isDisabled={isBotonCancelarDisabled}
                        onClick={handleBotonCancelarClick}
                    />
                    <BotonPagPrueba printer={estado.impresora}/>
                    <Button onClick={handleClose}>Cerrar</Button>
                    {showAlertSuccess ?
                                        <Snackbar open={showAlertSuccess} autoHideDuration={2000} onClose={handleClose}>
                                            <Alert severity="success">
                                                <AlertTitle>Cancelado correctamente</AlertTitle>
                                            </Alert>
                                        </Snackbar>
                                        :
                                        <Snackbar open={showAlertError} autoHideDuration={3000} onClose={handleClose}>
                                            <Alert severity="error">
                                                <AlertTitle>Error</AlertTitle>
                                                <strong>No hay trabajos pendientes para cancelar. </strong>
                                            </Alert>
                                        </Snackbar>
                                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}

AlertDialogSlide.propTypes = {
    openDialog: PropTypes.bool,
    setOpenDialog: PropTypes.func,
    estado: PropTypes.object,
    ultTrabajo: PropTypes.object
};