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
            <TableCell sx={{ fontWeight: 'bold', color: 'blue', fontSize: 16 }} component="th" scope="row" >
                {row.nameImpresora}
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'blue', fontSize: 16 }} style={{ width: 160 }} align="center" fontWeight= "bold">
                {row.numTrabajos}
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'blue', fontSize: 16 }} style={{ width: 160 }} align="left">
                {/* {console.log("renderizo")} */}
                {row.numAlmacen}
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}style={{ width: 160 }} align="left">
                <BotonPausa property={row.nameImpresora} />
            </TableCell>
            <TableCell style={{ width: 160 }} align="left">
                <BotonReanudar property={row.nameImpresora} />
            </TableCell>
            <TableCell style={{ width: 160 }} align="left">
                <BotonEstado property={row.nameImpresora} />
            </TableCell>
            <TableCell style={{ width: 160 }} align="left">
                <BotonDesviar property={row.nameImpresora} />
            </TableCell>
        </TableRow>
    )

});

TableRows.displayName = 'TableRows';

TableRows.propTypes = {
    row: PropTypes.object,
    data: PropTypes.array
}