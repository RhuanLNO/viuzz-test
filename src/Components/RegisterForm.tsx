import { Typography, Button, Grid } from "@mui/material";
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import { CenterGrid, JobText, TownForm, SendButton } from '../assets/Styled';
import { useForm } from "react-hook-form";

const Register = () => {

  const [data, setData] = useState<any>([]);
  const [town, setTown] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  type FormData = {
    name: string;
    job: string;
  };

  const { register, getValues, handleSubmit, formState:{errors} } = useForm<FormData>();

  const onSubmit=(e: any) => {
    e.preventDefault();
  };

  const FetchData= () =>{ axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
  .then((response) => {
    const newData = response
    const Datinha = response.data
    /* setData(newData.data); */
    const nomesDatinha = Datinha.map((data: { nome: any; municipio: any; }) => data.municipio.nome)
    const unique = [...new Set(nomesDatinha)]
    console.log(unique)
    setData(unique);
    return unique
    })
  .catch((error) => { console.log(error) });
  }

  useEffect(() => {
    FetchData();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setTown(event.target.value as string);
    /* localStorage.setItem("Cidade", event.target.value); */
    let cityhistory = JSON.parse(localStorage.getItem("city")!) || [];
    cityhistory.push(event.target.value);
    localStorage.setItem("city", JSON.stringify(cityhistory));
  };

  const saveInfor = (e: any) => {
    let newEmployee = {
      name: getValues('name'),
      job: getValues('job'),
      town: town
    };
    let listEmployees = JSON.parse(localStorage.getItem("employees")!) || [];
    listEmployees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(listEmployees));
    //console.log(listEmployees);
    // e.preventDefault();
    // const names = getValues("name")
    // const jobs = getValues("job")
    // let namehistory = JSON.parse(localStorage.getItem("name")!) || [];
    // namehistory.push(names);
    // localStorage.setItem("name", JSON.stringify(namehistory));
    // let jobhistory = JSON.parse(localStorage.getItem("job")!) || [];
    // jobhistory.push(jobs);
    // localStorage.setItem("job", JSON.stringify(jobhistory));

  }
  const values = getValues("name")
  const values2 = getValues("job")
  console.log(values, values2)

  return (
    <Grid container justifyContent="center">
      <CenterGrid container item md={3} flexDirection="column" >
        <Grid container width="100%">
          <form onSubmit={onSubmit}>
            <Typography align="center">Cadastrar novo funcionário</Typography>
            <JobText id="name" label="Nome" variant="outlined"  
            {...register("name", {
              required: "Required"
              })} 
              error={!!errors?.name}
            />
            <JobText id="job" label="Cargo" variant="outlined" 
              {...register("job", {
                required: "Required"
                })} 
                error={!!errors?.job}
            />
            <TownForm fullWidth>
              <InputLabel>Cidade</InputLabel>
                <Select
                value={town}
                label="Cidade"
                onChange={handleChange}
                >
                  {data.map((townNames: any) =>
                    {
                      return (
                        <MenuItem value={townNames} key={townNames.index}>{townNames}</MenuItem>
                      )
                    }
                  )}
                </Select>
            </TownForm>
            <SendButton variant="outlined" value="Register" type="submit" onClick={saveInfor}>Enviar</SendButton>
          </form>
        </Grid>
      </CenterGrid>
      <Grid container item alignItems={'center'} flexDirection={'column'}>
      </Grid>
    </Grid>
  );
}

export { Register };