import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

type Props = {
  label: string
  value: number
  onChange: React.Dispatch<React.SetStateAction<number>>
  defaultValue: number
}

const Range = (props: Props) => {
  const {
    value,
    label,
    onChange,
    defaultValue,
  } = props

  return (
    <FormControl fullWidth>
      <InputLabel id="range-select-label">{label}</InputLabel>
      <Select
        labelId="range-select-label"
        id="range-select"
        value={value}
        label={label}
        onChange={({ target }) => onChange(Number(target.value))}
      >
        <MenuItem value={defaultValue}>הכל</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Range