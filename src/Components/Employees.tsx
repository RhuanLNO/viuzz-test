import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react";

  const Employees = (props: {
    toggleShowRegister: any | React.MouseEventHandler<SVGSVGElement> | undefined;
    toggleShowEdit: any | React.MouseEventHandler<SVGSVGElement> | undefined;
  }) => {

  const [employees, setEmployees] = useState<any>([]);

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem('employees')!) || []);

  }, []);


  const removeItem = (index: any ) => {
    let employeesCopie = JSON.parse(JSON.stringify(employees));
    employeesCopie.splice(index, 1);
    setEmployees(employeesCopie);
    localStorage.setItem("employees", JSON.stringify(employeesCopie));
  };
  
  const editHandle = (index: any, values: any) => {
    console.log(index, values);
    localStorage.setItem("index", index);
    props.toggleShowEdit();
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
          {employees.map((employee: any, index: any ) => {
            
            const savedValues = {
              name: employee.name,
              job: employee.job,
              town: employee.town
            };

            return(
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
                  <EditIcon color="secondary" onClick={e => editHandle(index, savedValues)} />
                  <DeleteIcon color="secondary" onClick={e => removeItem(index)} />
                </div>
              </TableCell>
            </TableRow>
          )})}
        </TableBody>}
      </Table>
    </TableContainer>
    </>
  );
};

export { Employees };