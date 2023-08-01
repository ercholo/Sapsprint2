
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

export const SelectAlmacen = ({almacen, setAlmacen}) => {
  // const [almacen, setAlmacen] = React.useState('');

  const handleChange = (event) => {
    setAlmacen(event.target.value);
  };
  
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="seleccionarAlmacen">Almacén</InputLabel>
        <Select
          labelId="seleccionarAlmacen"
          id="seleccionarAlmacen"
          value={almacen}
          onChange={handleChange}
          autoWidth
          label="selecAlmacen"
        >
          {/* <MenuItem value={"todos"}>Todes</MenuItem> */}
          <MenuItem value={"RG16"}>Tortosa</MenuItem>
          <MenuItem value={"RG17"}>Melilla</MenuItem>
          <MenuItem value={"RG18"}>Granada</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
SelectAlmacen.propTypes = {
  almacen: PropTypes.string,
  setAlmacen: PropTypes.func
};