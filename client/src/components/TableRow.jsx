import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { BotonPausa } from './botonesPausa';
import { BotonReanudar } from './botonReanudar';
import { BotonEstado } from './botonEstado';
import { BotonDesviar } from './botonDesviar';
import styles from '../styles/celdas.module.css';

export const TableRows = (filas) => {

    const row = filas.props;
    const data = filas.data;
    // console.log({data})

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
            <TableCell component="th" scope="row" >
                {row.nameImpresora}
            </TableCell>
            <TableCell style={{ width: 160 }} align="center">
                {row.numTrabajos}
            </TableCell>
            <TableCell style={{ width: 160 }} align="left">
                {row.numAlmacen}
            </TableCell>
            <TableCell style={{ width: 160 }} align="left">
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

}

TableRows.propTypes = {
    row: PropTypes.array
}