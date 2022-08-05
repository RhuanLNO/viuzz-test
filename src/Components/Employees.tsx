import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';
import { useState, useEffect } from "react";
import { ReactElement, JSXElementConstructor, ReactFragment, Key, ReactPortal } from 'react';

const Employees = (props: {
  toggleShowRegister: React.MouseEventHandler<SVGSVGElement> | undefined;
}) => {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const [table, setTable] = useState([]);

  let retrievedObject = JSON.parse(localStorage.getItem('name')!);
  let retrievedObject2 = JSON.parse(localStorage.getItem('job')!);
  let retrievedObject3 = JSON.parse(localStorage.getItem('city')!);
  /* console.log(retrievedObject, retrievedObject2, retrievedObject3); */

  let testobject = JSON.stringify(localStorage);
  let test2 = JSON.parse(testobject)
  var result = Object.keys(test2).map((key) => [Number(key), test2[key]]);
  console.log(result)
  
  const dataa = async () => {
    await setTable(test2);
  };

  useEffect(() => {
    dataa();
  }, []);


  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        {<TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>}
      </Table>
    </TableContainer>
    <Grid container justifyContent={'end'}>
      <EditIcon color="secondary" onClick={props.toggleShowRegister} />
      <DeleteIcon color="secondary" />
    </Grid>
    </>
  );
}

export { Employees };