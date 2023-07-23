import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { SelectAlmacen } from './selectAlmacen';
import { SelectTipoPapel } from './selectTipoPapel';


const columns = [
    {
        id: 'impresoras',
        label: 'Impresoras',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'trabajos',
        label: 'Trabajos',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'almacen',
        label: 'Almacén',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(nameImpresora, numTrabajos, numAlmacen, tipo, hidden) {
    return { nameImpresora, numTrabajos, numAlmacen, tipo, hidden };
}

const rows = [
    createData('16ALAV101', 0, 'RG16', 'papel', true),
    createData('16ALAV102', 0, 'RG16', 'papel', false),
    createData('16ALAV201', 0, 'RG16', 'papel', false),
    createData('16ALAV202', 0, 'RG16', 'papel', false),
    createData('16ALDEV01', 0, 'RG16', 'papel', false),
    createData('16ALETQ01', 0, 'RG16', 'etiquetas', false),
    createData('16ALETQ02', 0, 'RG16', 'etiquetas', false),
    createData('16ALETQ03', 0, 'RG16', 'etiquetas', false),
    createData('16ALEXP01', 0, 'RG16', 'papel', false),
    createData('16ALJEF01', 0, 'RG16', 'papel', false),
    createData('17ADCOM01', 0, 'RG17', 'papel', false),
    createData('17ALAV101', 0, 'RG17', 'papel', false),
    createData('17ALAV102', 0, 'RG17', 'papel', false),
    createData('17ALDEV01', 0, 'RG17', 'papel', false),
    createData('17ALGVO01', 0, 'RG17', 'papel', false),
    createData('17ALJEF01', 0, 'RG17', 'papel', false),
    createData('17ATTOM01', 0, 'RG17', 'papel', false),
    createData('18ALAV101', 0, 'RG18', 'papel', false),
    createData('18ALAV102', 0, 'RG18', 'papel', false),
    createData('18ALAV201', 0, 'RG18', 'papel', false),
    createData('18ALAV202', 0, 'RG18', 'papel', false),
    createData('18ALETQ01', 0, 'RG18', 'etiquetas', false),
    createData('18ALETQ02', 0, 'RG18', 'etiquetas', false),
    createData('18ALETQ03', 0, 'RG18', 'etiquetas', false),
    createData('18ALEXP01', 0, 'RG18', 'papel', false),
    createData('18ALJEF01', 0, 'RG18', 'papel', false),
]//.sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [almacen, setAlmacen] = React.useState('');
    const [papel, setPapel] = React.useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    //Esta es la función que hace el filtro de los select, o lo intenta.
    const filterSelects = () => {

        let arrFilteredAlmacen = [];
        let arrFilteredTipo = [];

        // Hay 3 if, el prinero es la pantalla de iniciio sin selección, el segundo solo selección de almacén y el tercero con los dos selec.

        if (almacen === '' && papel === '') {
            return rows;
        } else if (almacen != '' && papel === '') {
            arrFilteredAlmacen = rows.filter(impresora => impresora.numAlmacen === almacen);
            return arrFilteredAlmacen;
        };

        arrFilteredAlmacen = rows.filter(impresora => impresora.numAlmacen === almacen);
        arrFilteredTipo = arrFilteredAlmacen.filter(impresora => impresora.tipo === papel);

        return arrFilteredTipo;
    }

    return (
        <>
            <div className="flexbox">
                <SelectAlmacen
                    almacen={almacen}
                    setAlmacen={setAlmacen}
                />
                <SelectTipoPapel
                    papel={papel}
                    setPapel={setPapel}
                />
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 600 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? filterSelects().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : filterSelects()
                            ).map((row) => {
                                return (
                                    //   <TableRow  hover role="checkbox" tabIndex={-1} key={row.code}>
                                    //     {columns.map((column) => {
                                    //       const value = row[column.id];
                                    //       return (
                                    //         <TableCell key={column.id} align={column.align}>
                                    //           {column.format && typeof value === 'number'
                                    //             ? column.format(value)
                                    //             : value}
                                    //         </TableCell>
                                    //       );
                                    //     })}
                                    //   </TableRow>
                                    <TableRow key={row.nameImpresora} hover={true}>
                                        <TableCell component="th" scope="row">
                                            {row.nameImpresora}
                                        </TableCell>
                                        <TableCell style={{ width: 760 }} align="right">
                                            {row.numTrabajos}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }} align="right">
                                            {row.numAlmacen}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={filterSelects().length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}