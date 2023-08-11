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
      <FormControl className="select"  sx={{ m: 1, minWidth: 180, bgcolor: 'text-disabled'}}>
        <InputLabel id="seleccionarTipoPapel" sx={{ fontWeight: 'bold', fontSize: 20 }}>Tipo</InputLabel>
        <Select
          sx={{ fontWeight: 'bold', textAlign: 'center'}}
          labelId="seleccionarTipoPapel"
          id="seleccionarTipoPapel"
          value={papel}
          onChange={handleChange}
          autoWidth
          label="Tipo"
          
        >
          {/* <MenuItem value={"todos"}>Todes</MenuItem> */}
          <MenuItem value={"papel"} sx={{ fontWeight: 'bold', fontSize: 17 }}>Papel</MenuItem>
          <MenuItem value={"etiquetas"} sx={{ fontWeight: 'bold', fontSize: 17 }}>Etiquetas</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
SelectTipoPapel.propTypes = {
  papel: PropTypes.string,
  setPapel: PropTypes.func
};