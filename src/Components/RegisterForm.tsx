import '../assets/Register.css';
import { Typography, Button, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";

const Register = () => {

  const [data, setData] = useState<any>([]);
  const [town, setTown] = useState("");

  const FetchData= () =>{ axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
  .then((response) => {
    const newData = response
    setData(newData.data);
    })
  .catch((error) => { console.log(error) });
  }

  useEffect(() => {
    FetchData();
  }, []);

  let mySet = new Set(data);
  
  const setArray = [...mySet];

  console.log(mySet);

  const handleChange = (event: SelectChangeEvent) => {
    setTown(event.target.value as string);
  };

  return (
    <Grid container justifyContent="center">
      <Grid container item md={3} flexDirection="column" className="centerGrid">
        <Typography align="center">Cadastrar novo funcionário</Typography>
        <TextField id="name" label="Nome" variant="outlined" />
        <TextField id="job" label="Cargo" variant="outlined" className="jobText" />
        <FormControl fullWidth>
          <InputLabel>Cidade</InputLabel>
            <Select
            value={town}
            label="Cidade"
            onChange={handleChange}
            >
              {setArray.map((townNames: any) =>
                {
                  return (
                    <MenuItem value={townNames.nome} key={townNames.id}>{townNames.nome}</MenuItem>
                  )
                }
              )}
            </Select>
        </FormControl>
      </Grid>
      <Grid container item alignItems={'center'} flexDirection={'column'}>
        <Button variant="outlined" style={{ margin: "30px 0px", width: "200px"}}>Enviar</Button>
      </Grid>
    </Grid>
  );
}

export { Register };