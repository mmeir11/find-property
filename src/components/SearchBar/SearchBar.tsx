import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type Props = {
  optionsData: Array<string>
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBar(props: Props) {
  const [open, setOpen] = React.useState(false);

  const {
    optionsData,
    value,
    onChange,
  } = props

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
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
          label="הזן כתובת מלאה (רחוב, מספר בית)"
          value={value}
          onChange={({ target }) => onChange(target.value)}
        />
      )}
    />
  );
}

/* import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(() => ({
  root: {

  }
  type Props {
    
  }
}), { name: 'SearchBar'props })

type Props {
  
}
const SearchBar props= () => {
  const classes = useStyles()

  return (
    <div>

    </div>
  )
}

type Props {
  
}
export default SearchBar props*/