import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableRows } from './TableRow';
import { SelectAlmacen } from './selectAlmacen';
import { SelectTipoPapel } from './selectTipoPapel';

//Definimos las columnas
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

//Funcion para crear las futuras filas (rows)
function createData(nameImpresora, numTrabajos, numAlmacen, tipo) {
    return { nameImpresora, numTrabajos, numAlmacen, tipo };
}


//Llamada a la funcion que genera las filas pasándole datos de relleno iniciales
const rows = [
    createData('16ALAV101', 0, 'RG16', 'papel'),
    createData('16ALAV201', 0, 'RG16', 'papel'),
    createData('16ALAV102', 0, 'RG16', 'papel'),
    createData('16ALAV202', 0, 'RG16', 'papel'),
    createData('16ALDEV01', 0, 'RG16', 'papel'),
    createData('16ALETQ01', 0, 'RG16', 'etiquetas'),
    createData('16ALETQ02', 0, 'RG16', 'etiquetas'),
    createData('16ALETQ03', 0, 'RG16', 'etiquetas'),
    createData('16ALEXP01', 0, 'RG16', 'papel'),
    createData('16ALJEF01', 0, 'RG16', 'papel'),
    createData('17ADCOM01', 0, 'RG17', 'papel'),
    createData('17ALAV101', 0, 'RG17', 'papel'),
    createData('17ALAV102', 0, 'RG17', 'papel'),
    createData('17ALDEV01', 0, 'RG17', 'papel'),
    createData('17ALGVO01', 0, 'RG17', 'papel'),
    createData('17ALJEF01', 0, 'RG17', 'papel'),
    createData('17ATTOM01', 0, 'RG17', 'papel'),
    createData('18ALAV101', 0, 'RG18', 'papel'),
    createData('18ALAV102', 0, 'RG18', 'papel'),
    createData('18ALAV201', 0, 'RG18', 'papel'),
    createData('18ALAV202', 0, 'RG18', 'papel'),
    createData('18ALETQ01', 0, 'RG18', 'etiquetas'),
    createData('18ALETQ02', 0, 'RG18', 'etiquetas'),
    createData('18ALETQ03', 0, 'RG18', 'etiquetas'),
    createData('18ALEXP01', 0, 'RG18', 'papel'),
    createData('18ALJEF01', 0, 'RG18', 'papel')
]


//Funcion donde se definie la tabla con stickyhead
export default function StickyHeadTable(props) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [almacen, setAlmacen] = React.useState('');
    const [papel, setPapel] = React.useState('');
    const data = props;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    //Aquí insertamos en cada row el valor de números de impresión que recibimos por las props
    const actualizaDatosRow = () => {

        data.product.forEach((item) => {

            rows.find(printer => {

                if (item.value.impresora === printer.nameImpresora) {
                    printer.numTrabajos = item.value.valor
                }
            })
        });
    }

    //Esta es la función que hace el filtro de los select, o lo intenta.
    const filterSelects = () => {

        let arrFilteredAlmacen = [];
        let arrFilteredTipo = [];

        // Hay 3 if, el prinero es la pantalla de inicio sin selección, el segundo solo selección de almacén y el tercero solo con papel. En todos ellos 
        // se llama a la funcion actualizadatosRow para que actualice los datos con cada vista.
        if (almacen === '' && papel === '') {
            actualizaDatosRow();
            return rows;
        } else if (almacen != '' && papel === '') {
            arrFilteredAlmacen = rows.filter(impresora => impresora.numAlmacen === almacen);
            actualizaDatosRow();
            return arrFilteredAlmacen;
        } else if (almacen === '' && papel != '') {
            arrFilteredAlmacen = rows.filter(impresora => impresora.tipo === papel);
            actualizaDatosRow();
            return arrFilteredAlmacen;
        }

        arrFilteredAlmacen = rows.filter(impresora => impresora.numAlmacen === almacen);
        arrFilteredTipo = arrFilteredAlmacen.filter(impresora => impresora.tipo === papel);
        actualizaDatosRow();
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
                                        sx={{ fontWeight: 'bold', fontSize: 18 }}
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
                                    <TableRows key={row.nameImpresora} props={row} data={data}/>
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
StickyHeadTable.propTypes = {
    data: PropTypes.array
}