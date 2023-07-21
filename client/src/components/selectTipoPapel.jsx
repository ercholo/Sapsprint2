import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

export const SelectTipoPapel = ({papel, setPapel}) => {
  //const [papel, setPapel] = React.useState('');

  const handleChange = (event) => {
    setPapel(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="seleccionarTipoPapel">Tipo</InputLabel>
        <Select
          labelId="seleccionarTipoPapel"
          id="seleccionarTipoPapel"
          value={papel}
          onChange={handleChange}
          autoWidth
          label="Tipo"
        >
          <MenuItem value={"todos"}>Todes</MenuItem>
          <MenuItem value={"papel"}>Papel</MenuItem>
          <MenuItem value={"etiquetas"}>Etiquetas</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
SelectTipoPapel.propTypes = {
  papel: PropTypes.string
};