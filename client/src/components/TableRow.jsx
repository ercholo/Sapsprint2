import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { BotonPausa } from './botonesPausa';
import { BotonReanudar } from './botonReanudar';
import { BotonEstado } from './botonEstado';
import styles from '../styles/celdas.module.css';

export const TableRows = (filas) => {


    const row = filas.props;
    const data = filas.data.product;
    // console.log(data)

    // Esta función cambia el color dependiendo de si hay error en el 'data' (props)
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
            <TableCell style={{ width: 760 }} align="right">
                {row.numTrabajos}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                {row.numAlmacen}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                <BotonPausa property={row.nameImpresora} />
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                <BotonReanudar property={row.nameImpresora} />
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                <BotonEstado property={row.nameImpresora} />
            </TableCell>
        </TableRow>
    )

}

TableRows.propTypes = {
    row: PropTypes.array
}