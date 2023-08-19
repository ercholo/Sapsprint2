import { useCallback, useEffect, useState, useMemo} from 'react';
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
        minWidth: 10,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'trabajos',
        label: 'Trabajos',
        minWidth: 10,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'almacen',
        label: 'Almacén',
        minWidth: 10,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'pausar',
        label: 'Pausar',
        minWidth: 10,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'reanudar',
        label: 'Reanudar',
        minWidth: 10,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'estado',
        label: 'Estado',
        minWidth: 10,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'desviar',
        label: 'Desviar',
        minWidth: 10,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
];

//Funcion para crear las futuras filas (rows)
function createData(nameImpresora, numTrabajos, numAlmacen, tipo, ip) {
    return { nameImpresora, numTrabajos, numAlmacen, tipo, ip };
}


//Llamada a la funcion que genera las filas pasándole datos de relleno iniciales
const rows = [
    createData('16ALAV101', 0, 'RG16', 'papel', '172.30.141.243'),
    createData('16ALAV201', 0, 'RG16', 'papel', '172.30.141.245'),
    createData('16ALAV102', 0, 'RG16', 'papel', '172.30.141.244'),
    createData('16ALAV202', 0, 'RG16', 'papel', '172.30.141.246'),
    createData('16ALDEV01', 0, 'RG16', 'papel', '172.30.141.247'),
    createData('16ALETQ01', 0, 'RG16', 'etiquetas', '172.30.141.80'),
    createData('16ALETQ02', 0, 'RG16', 'etiquetas', '172.30.141.81'),
    createData('16ALETQ03', 0, 'RG16', 'etiquetas', '172.30.141.82'),
    createData('16ALEXP01', 0, 'RG16', 'papel', '172.30.141.248'),
    createData('16ALJEF01', 0, 'RG16', 'papel', '172.30.141.249'),
    createData('17ADCOM01', 0, 'RG17', 'papel', '172.30.95.243'),
    createData('17ALAV101', 0, 'RG17', 'papel', '172.30.95.247'),
    createData('17ALAV102', 0, 'RG17', 'papel', '172.30.95.242'),
    createData('17ALDEV01', 0, 'RG17', 'papel', '172.30.95.245'),
    createData('17ALGVO01', 0, 'RG17', 'papel', '172.30.95.242'),
    createData('17ALJEF01', 0, 'RG17', 'papel', '172.30.95.245'),
    createData('17ATTOM01', 0, 'RG17', 'papel', '172.30.95.246'),
    createData('17ALETQ00', 0, 'RG17', 'etiquetas', '172.30.95.80'),
    createData('17ALETQ01', 0, 'RG17', 'etiquetas', '172.30.95.81'),
    createData('17ALETQ02', 0, 'RG17', 'etiquetas', '172.30.95.82'),
    createData('18ALAV101', 0, 'RG18', 'papel', '172.30.120.246'),
    createData('18ALAV102', 0, 'RG18', 'papel', '172.30.120.243'),
    createData('18ALAV201', 0, 'RG18', 'papel', '172.30.120.246'),
    createData('18ALAV202', 0, 'RG18', 'papel', '172.30.120.243'),
    createData('18ALDEV01', 0, 'RG18', 'papel', '172.30.120.247'),
    createData('18ALETQ01', 0, 'RG18', 'etiquetas', '172.30.120.80'),
    createData('18ALETQ02', 0, 'RG18', 'etiquetas', '172.30.120.81'),
    createData('18ALETQ03', 0, 'RG18', 'etiquetas', '172.30.120.82'),
    createData('18ALEXP01', 0, 'RG18', 'papel', '172.30.120.245'),
    createData('18ALJEF01', 0, 'RG18', 'papel', '172.30.120.248')
]


//Funcion donde se definie la tabla con stickyhead
export const StickyHeadTable = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [almacen, setAlmacen] = useState('');
    const [papel, setPapel] = useState('');
    const [data, setData] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const getImpresoras = useCallback(async () => {
        const res = await fetch('http://172.30.5.181:4444/impresoras');
        const newData = await res.json();

        if (JSON.stringify(data) !== JSON.stringify(newData)) {
            setData(newData);
            console.log({ data: newData });
        }
    }, [data]);

    //Aquí insertamos en cada row el valor de números de impresión que recibimos por las props
    const actualizaDatosRow = useCallback(() => {
        data.forEach((item) => {
            rows.find(printer => {
                if (item.value.impresora === printer.nameImpresora) {
                    printer.numTrabajos = item.value.valor
                }
            })
        });
    },[data]) 

    useEffect(() => {
        const interval = setInterval(() => {
            getImpresoras();
        }, 5000);
        return () => clearInterval(interval);
    }, [getImpresoras]);


    // const useEffectFunction = useCallback(() => {
    //     getImpresoras();

    //     const interval = setInterval(() => {
    //         getImpresoras();
    //     }, 6000);
    //     return () => clearInterval(interval);
    // }, [getImpresoras]);


    // useEffect(useEffectFunction, [useEffectFunction]);

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
                <img className="logo" src='../../images/LogoHefame.png'></img>
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
                <TableContainer sx={{ maxHeight: 800 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        sx={{ fontWeight: 'bold', fontSize: 20 }}
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
                                    <TableRows key={row.nameImpresora} row={row} data={data} />
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