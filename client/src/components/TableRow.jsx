import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { BotonPausa } from './botonesPausa';
import { BotonReanudar } from './botonReanudar';
import { BotonEstado } from './botonEstado';
import { BotonDesviar } from './botonDesviar';
import styles from '../styles/celdas.module.css';

export const TableRows = React.memo(({row, data}) => {

    //Esta función cambia el color dependiendo de si hay error en el 'data' (props)
    const getBackgroundColor = filaEvaluadaError => {

        return data.find(printer => {

            if (printer.value.impresora === filaEvaluadaError && printer.value.error === true) {

                return styles.red
            }
        })
    }
    
    return (
        
        <TableRow key={row.nameImpresora} hover={true} className={getBackgroundColor(row.nameImpresora) === undefined ? styles.white : styles.red}>
            <TableCell sx={{ fontWeight: 'bold', color: '#1563B0', fontSize: 18 }} component="th" scope="row" >
                {row.nameImpresora}
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#1873CC', fontSize: 18 }} style={{ width: 160 }} align="center" fontWeight= "bold">
                {row.numTrabajos}
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#1873CC', fontSize: 18 }} style={{ width: 160 }} align="left">
                {row.numAlmacen}
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}style={{ width: 160 }} align="left">
                <BotonPausa printer={row.nameImpresora} />
            </TableCell>
            <TableCell style={{ width: 160 }} align="left">
                <BotonReanudar printer={row.nameImpresora} />
            </TableCell>
            <TableCell style={{ width: 160 }} align="left">
                <BotonEstado printer={row.nameImpresora} />
            </TableCell>
            <TableCell style={{ width: 160 }} align="left">
                <BotonDesviar printer={row.nameImpresora} />
            </TableCell>
        </TableRow>
    )

});

TableRows.displayName = 'TableRows';

TableRows.propTypes = {
    row: PropTypes.object,
    data: PropTypes.array
}