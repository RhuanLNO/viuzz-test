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
import { useState, useEffect, MouseEventHandler } from "react";

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
  const [employees, setEmployees] = useState<any>([]);
  //let employees = JSON.parse(localStorage.getItem('name')!) || [];
  // let retrievedObject = JSON.parse(localStorage.getItem('name')!);
  // let retrievedObject2 = JSON.parse(localStorage.getItem('job')!);
  // let retrievedObject3 = JSON.parse(localStorage.getItem('city')!);
  // /* console.log(retrievedObject, retrievedObject2, retrievedObject3); */

  // let testobject = JSON.stringify(localStorage);
  // let test2 = JSON.parse(testobject)
  // var result = Object.keys(test2).map((key) => [Number(key), test2[key]]);
  // console.log(result)
  
  // const dataa = async () => {
  //   await setTable(test2);
  // };

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem('employees')!) || []);
  
  }, []);

  console.log(employees)

  const removeItem = (index: any ) => {
let employeesCopie = JSON.parse(JSON.stringify(employees));

    employeesCopie.splice(index, 1);
    setEmployees(employeesCopie);
    /*     employees.splice(index, 1)
     localStorage.setItem("employees", JSON.stringify(employees));
             console.log(employees); */
  };
  


  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Cargo</TableCell>
            <TableCell align="right">Cidade</TableCell> 
          </TableRow>
        </TableHead>
        {<TableBody>
          {employees.map((employee: any, index: any ) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employee.name}
              </TableCell>
              <TableCell align="right">{employee.job}</TableCell>
              <TableCell align="right">{employee.town}</TableCell>
              <TableCell>
                 <div>
                  <EditIcon color="secondary" onClick={props.toggleShowRegister} />
                  <DeleteIcon color="secondary" onClick={e => removeItem(index)} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>}
      </Table>
    </TableContainer>
   
    </>
  );
}

export { Employees };