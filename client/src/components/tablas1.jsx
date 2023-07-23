import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { SelectAlmacen } from './selectAlmacen';
import { SelectTipoPapel } from './selectTipoPapel';


function TablePaginationActions(props) {

  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(nameImpresora, numTrabajos, numAlmacen, tipo, hidden) {
  return { nameImpresora, numTrabajos, numAlmacen, tipo, hidden };
}
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

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [almacen, setAlmacen] = React.useState('');
  const [papel, setPapel] = React.useState('');

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
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
      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 600 }} aria-label="custom pagination table">
          <TableHead >
            <TableRow >
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
            ).map((row) => (
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
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 15, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={filterSelects().length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}