import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidthTipoPapel() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="seleccionarTipoPapel">Tipo</InputLabel>
        <Select
          labelId="seleccionarTipoPapel"
          id="seleccionarTipoPapel"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Tipo"
        >
          <MenuItem value={0}>Todes</MenuItem>
          <MenuItem value={21}>Papel</MenuItem>
          <MenuItem value={22}>Etiquetas</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}