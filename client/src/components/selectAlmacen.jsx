import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [almacen, setAlmacen] = React.useState('');

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
          label="Age"
        >
          <MenuItem value={0}>Todes</MenuItem>
          <MenuItem value={16}>Tortosa</MenuItem>
          <MenuItem value={17}>Melilla</MenuItem>
          <MenuItem value={18}>Granada</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}