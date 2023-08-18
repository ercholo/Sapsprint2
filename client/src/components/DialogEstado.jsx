import * as React from 'react';
import { BotonCancelar } from './botonCancelarTrabajo';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { blue } from '@mui/material/colors';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AlertDialogSlide = ({ setOpenDialog, openDialog, estado, ultTrabajo }) => {

    // console.log(ultTrabajo.fechaPrimerTrabajo)

    // const handleClickOpen = () => {
    //     setOpenDialog(true);
    // };

    // const isUltimoTrabajo = () => {

    //     if ()
    // }

    const handleClose = () => {
        setOpenDialog(false);
    };

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
                    <BotonCancelar printer={estado.impresora} id={ultTrabajo.idUltimoTrabajo} isDisabled={ultTrabajo.idUltimoTrabajo === null || ultTrabajo.idUltimoTrabajo === undefined?true:false} />
                    <Button onClick={handleClose}>Cerrar</Button>
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