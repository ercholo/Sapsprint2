
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

export const SelectAlmacen = ({ almacen, setAlmacen }) => {

  const handleChange = (event) => {
    setAlmacen(event.target.value);
  };

  return (
    <div>
      <FormControl className="select" sx={{ m: 1, minWidth: 180, bgcolor: 'text-disabled' }}>
        <InputLabel id="seleccionarAlmacen" sx={{ fontWeight: 'bold', fontSize: 20 }}>Almacén</InputLabel>
        <Select
          sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}
          labelId="seleccionarAlmacen"
          id="seleccionarAlmacen"
          value={almacen}
          onChange={handleChange}
          autoWidth
          label="selecAlmacen"
        >
          {/* <MenuItem value={"todos"}>Todes</MenuItem> */}
          <MenuItem value={"RG16"} sx={{ fontWeight: 'bold', fontSize: 17 }}>Tortosa</MenuItem>
          <MenuItem value={"RG17"} sx={{ fontWeight: 'bold', fontSize: 17 }}>Melilla</MenuItem>
          <MenuItem value={"RG18"} sx={{ fontWeight: 'bold', fontSize: 17 }}>Granada</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
SelectAlmacen.propTypes = {
  almacen: PropTypes.string,
  setAlmacen: PropTypes.func
};