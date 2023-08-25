import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export const AlertDialogDesviar = ({ setOpenDialog, openDialog, estado }) => {

    const almImp = estado?.impresora?.substring(0, 2) || '';

    const handleclick = () => {

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
                                <div id="contenedor-boton">

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
                                                            key={impresora.impresora}
                                                            onClick={() => handleclick()}
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
                                </div>
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

AlertDialogDesviar.propTypes = {
    openDialog: PropTypes.bool,
    setOpenDialog: PropTypes.func,
    estado: PropTypes.object
};