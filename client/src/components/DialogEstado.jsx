import React, { useState, useEffect } from 'react';
import { BotonDesviaIpOriginal } from './botonDesviaIpOriginal';
import { BotonCancelar } from './botonCancelarTrabajo';
import { BotonPagPrueba } from './botonPagPrueba'
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

export const AlertDialogSlide = ({ openDialog, setOpenDialog, estado, ultTrabajo }) => {

    const [isBotonCancelarDisabled, setIsBotonCancelarDisabled] = useState(ultTrabajo.idUltimoTrabajo === null);

    const handleClose = () => {
        setOpenDialog(false);
    };

    useEffect(() => {
        setIsBotonCancelarDisabled(ultTrabajo.idUltimoTrabajo === null);
    }, [ultTrabajo.idUltimoTrabajo]);

    const handleBotonCancelarClick = async () => {
        console.log(`Trabajo cancelado por la impresora ${estado.impresora}`);

        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${estado.impresora}/${ultTrabajo.idUltimoTrabajo}/cancelarTrabajo`, {
                method: 'GET'
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsBotonCancelarDisabled(true);
        }
    }

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
                    <BotonDesviaIpOriginal printer={estado.impresora} isDisabled={estado.desviada ? false : true} />
                    {/*Le paso la función del fetch y si el estado para el  debe estar habilitado o no*/}
                    <BotonCancelar
                        isDisabled={isBotonCancelarDisabled}
                        onClick={handleBotonCancelarClick}
                    />
                    <BotonPagPrueba printer={estado.impresora}/>
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