import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type Props = {
  optionsData: Array<string>
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
  label: string
}

export default function SearchBar(props: Props) {
  const [open, setOpen] = React.useState(false);

  const {
    optionsData,
    value,
    onChange,
    label,
  } = props

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300, display: 'flex', alignItems: 'center' }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option.toString()}
      options={optionsData}
      onChange={(e, value) => onChange(value ?? '')}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          value={value}
          onChange={({ target }) => onChange(target.value)}
        />
      )}
    />
  );
}