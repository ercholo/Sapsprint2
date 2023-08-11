import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AlertDialogSlide = (props) => {
    
    const handleClickOpen = () => {
        props.setOpenDialog(true);
    };

    const handleClose = () => {
        props.setOpenDialog(false);
    };

    return (
        <div>
            <Dialog
                open={props.openDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="estado-y-ultimo-trabajo"
            >
                <DialogTitle>{"Estado impresora "}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="estado-y-ultimo-trabajo">
                        La impresora {props.estado.impresora} está en {props.estado.estado}                      
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar Trabajo</Button>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

AlertDialogSlide.propTypes = {
    openDialog: PropTypes.bool,
    setOpenDialog: PropTypes.func,
    estado: PropTypes.object
  };