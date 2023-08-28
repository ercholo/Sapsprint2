import { useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';
import { blue } from '@mui/material/colors';

const impresorasPapel = [
    {
        impresora: "16ALAV101",
        ip: "172.30.141.243"
    },
    {
        impresora: "16ALAV201",
        ip: "172.30.141.245"
    },
    {
        impresora: "16ALAV102",
        ip: "172.30.141.244"
    },
    {
        impresora: "16ALAV202",
        ip: "172.30.141.246"
    },
    {
        impresora: "16ALDEV01",
        ip: "172.30.141.247"
    },
    {
        impresora: "16ALEXP01",
        ip: "172.30.141.248"
    },
    {
        impresora: "16ALJEF01",
        ip: "172.30.141.249"
    },
    {
        impresora: "17ADCOM01",
        ip: "172.30.95.243"
    },
    {
        impresora: "17ALAV101",
        ip: "172.30.95.247"
    },
    {
        impresora: "17ALAV102",
        ip: "172.30.95.242"
    },
    {
        impresora: "17ALDEV01",
        ip: "172.30.95.245"
    },
    {
        impresora: "17ALGVO01",
        ip: "172.30.95.242"
    },
    {
        impresora: "17ALJEF01",
        ip: "172.30.95.245"
    },
    {
        impresora: "17ATTOM01",
        ip: "172.30.141.246"
    },
    {
        impresora: "18ALAV101",
        ip: "172.30.120.246"
    },
    {
        impresora: "18ALAV102",
        ip: "172.30.120.243"
    },
    {
        impresora: "18ALAV201",
        ip: "172.30.120.246"
    },
    {
        impresora: "18ALAV202",
        ip: "172.30.120.243"
    },
    {
        impresora: "18ALDEV01",
        ip: "172.30.120.247"
    },
    {
        impresora: "18ALEXP01",
        ip: "172.30.120.245"
    },
    {
        impresora: "18ALJEF01",
        ip: "172.30.120.248"
    },
    {
        impresora: "18ATTOM01",
        ip: "172.30.120.249"
    },
    {
        impresora: "18ATTOM02",
        ip: "172.30.120.244"
    }
]


const impresorasEtq = [
    {
        impresora: "16ALETQ01",
        ip: "172.30.141.80"
    },
    {
        impresora: "16ALETQ02",
        ip: "172.30.141.81"
    },
    {
        impresora: "16ALETQ03",
        ip: "172.30.141.82"
    },
    {
        impresora: "17ALETQ00",
        ip: "172.30.95.80"
    },
    {
        impresora: "17ALETQ01",
        ip: "172.30.95.81"
    },
    {
        impresora: "17ALETQ02",
        ip: "172.30.95.82"
    },
    {
        impresora: "18ALETQ01",
        ip: "172.30.120.80"
    },
    {
        impresora: "18ALETQ02",
        ip: "172.30.120.81"
    },
    {
        impresora: "18ALETQ03",
        ip: "172.30.120.82"
    }
];

const regImpEtq = /^[0-9]{2}ALETQ[0-9]{2}$/


//Esta función hace desplazarse el dialog
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AlertDialogDesviar = ({ setOpenDialog, openDialog, estado }) => {

    //Si existe la prop(cuando llega) coge los dos primeros caracteres para saber de que almacen es la imperesora que se quiere desviar.
    const almImp = estado?.impresora?.substring(0, 2) || '';

    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);

    const handleclick = async (impresoraDestino) => {

        console.log(`Desviar la impresora ${estado.impresora} por ${impresoraDestino}`);

        try {
            const res = await fetch(`http://172.30.5.181:4444/impresoras/${estado.impresora}/${impresoraDestino}/desviar`, {
                method: 'GET'
            });
            const { isDesviada } = await res.json();
            isDesviada ? setShowAlertSuccess(true) : setShowAlertError(true);

            console.log(isDesviada);
        } catch (error) {
            console.log(error);
        }
    }

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
                aria-describedby="isDesviada-y-desviada"
            >
                <DialogTitle>
                    <span style={{ color: blue[500] }}>Pulsa botón para desviar la impresora {estado.impresora} </span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="isDesviada-y-desviada" component={'span'} sx={{ fontWeight: 'bold', fontSize: 16, color: blue }}>
                        {
                            estado.desviada ?
                                <div style={{ margin: '8px 0' }}>
                                    {/*Si la impresora está desviada no hacemos nada*/}
                                    <span style={{ color: blue[500] }}>DESVÍO:</span> {'LA IMPRESORA ESTÁ DESVIADA, PRIMERO HAY QUE DEVOLVERLA A SU SITIO ORIGINAL'}
                                </div>
                                :
                                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">

                                    {
                                        // Para saber si la impresora es de etiquetas
                                        estado?.impresora?.match(regImpEtq) ? (
                                            // Filtrar y mostrar botones para impresoras de etiquetas
                                            impresorasEtq
                                                .filter((impresora) =>
                                                    impresora.impresora.startsWith(almImp)
                                                )
                                                .map((impresora) => (
                                                    // Excluir el botón con el mismo nombre que estado.impresora
                                                    estado.impresora !== impresora.impresora && (
                                                        <Button
                                                            variant="outlined"
                                                            key={impresora.impresora}
                                                            onClick={() => handleclick(impresora.impresora)}
                                                            className="boton-desviar"
                                                            id={impresora.impresora}
                                                        >
                                                            {impresora.impresora}
                                                        </Button>
                                                    )
                                                ))
                                        ) : (
                                            // Mostrar botones para impresoras de papel
                                            impresorasPapel
                                                .filter((impresora) =>
                                                    impresora.impresora.startsWith(almImp)
                                                )
                                                .map((impresora) => (
                                                    // Excluir el botón con el mismo nombre que estado.impresora
                                                    estado.impresora !== impresora.impresora && (
                                                        <Button
                                                            variant="outlined"
                                                            key={impresora.impresora}
                                                            onClick={() => handleclick()}
                                                            className="boton-desviar"
                                                            id={impresora.impresora}
                                                        >
                                                            {impresora.impresora}
                                                        </Button>
                                                    )
                                                ))
                                        )}
                                    {showAlertSuccess ?
                                        <Snackbar open={showAlertSuccess} autoHideDuration={3000} onClose={handleClose}>
                                            <Alert severity="success">
                                                <AlertTitle>Desviada correctamente</AlertTitle>
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
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}

AlertDialogDesviar.propTypes = {
    openDialog: PropTypes.bool,
    setOpenDialog: PropTypes.func,
    estado: PropTypes.object
};