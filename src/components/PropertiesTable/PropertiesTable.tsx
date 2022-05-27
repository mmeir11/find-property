import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Property } from '../../@types';

function createData(property: Property) {
  const {
    sqm,
    id,
    ...rest
  } = property

  return { rest }
}

/* const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]; */

type Props = {
  rows: Array<Property>
}

export default function PropertiesTable(props: Props) {

  // const [rows, setRows] = useState<any>([])

  const { rows } = props

  // useEffect(() => {
  //   const rows = data?.map((row) => createData(row))

  //   setRows(rows)
  // }, [data])


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>כתובת</TableCell>
            <TableCell align="right">חדרים</TableCell>
            <TableCell align="right">קומה</TableCell>
            <TableCell align="right">קומות בבניין</TableCell>
            <TableCell align="right">מעליות</TableCell>
            <TableCell align="right">חניות</TableCell>
            <TableCell align="right">מחיר</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: Property) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.address}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.num_rooms}
              </TableCell>
              <TableCell align="right">{row.floor}</TableCell>
              <TableCell align="right">{row.num_floors}</TableCell>
              <TableCell align="right">{row.elevator}</TableCell>
              <TableCell align="right">{row.parking}</TableCell>
              <TableCell align="right">{Number(row.price).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
