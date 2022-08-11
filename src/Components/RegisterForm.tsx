import { Typography, Grid } from "@mui/material";
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import { CenterGrid, JobText, TownForm, SendButton, SucAlert } from '../assets/Styled';
import { useForm } from "react-hook-form";
import AlertTitle from '@mui/material/AlertTitle';

const Register = (props: {toggleShowEmployees: React.MouseEventHandler<HTMLButtonElement> | any | undefined}) => {

  const [data, setData] = useState<any>([]);
  const [town, setTown] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ saveIndex, setSaveIndex ] = useState<any>(null);

  type FormData = {
    name: string;
    job: string;
  };

  const { register, getValues, setValue, formState:{errors} } = useForm<FormData>();

  const onSubmit=(e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const FetchData= () =>{ axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
  .then((response) => {
    const newData = response.data
    const nomesData = newData.map((data: { nome: any; municipio: any; }) => data.municipio.nome)
    const unique = [...new Set(nomesData)]
    setData(unique);
    return unique
    })
  .catch((error) => { console.log(error) });
  }

  useEffect(() => {
    FetchData();
    const testIndex = localStorage.getItem("index");
    setSaveIndex(testIndex);
    if (testIndex){
      const employees = JSON.parse(localStorage.getItem("employees")!);
      const selectEmployee = employees[testIndex];
      console.log(selectEmployee);
      setValue("name", selectEmployee.name);
      setValue("job", selectEmployee.job);
      setTown(selectEmployee.town);
      console.log(getValues("name"));
    }
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setTown(event.target.value as string);
  };

  const saveInfor = (e: any) => {
    let newEmployee = {
      name: getValues('name'),
      job: getValues('job'),
      town: town
    };
    let listEmployees = JSON.parse(localStorage.getItem("employees")!) || [];
    if (saveIndex) {
      listEmployees.splice(saveIndex, 1, newEmployee);
      props.toggleShowEmployees();
    } else {
      listEmployees.push(newEmployee);
    }
    localStorage.setItem("employees", JSON.stringify(listEmployees));
    setValue("name", "");
    setValue("job", "");
    setTown("");
    localStorage.removeItem("index");
  };

  return (
    <Grid container justifyContent="center">
      <CenterGrid container item md={3} flexDirection="column" >
        <Grid container width="100%">
          <form onSubmit={onSubmit}>
            {saveIndex ? <Typography align="center">Editar Funcionário</Typography> :<Typography align="center">Cadastrar novo funcionário</Typography>}
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
            <SendButton variant="outlined" value="Register" type="submit" onClick={saveInfor}>Salvar</SendButton>
          </form>
          {isSubmitted ? <SucAlert severity="success">
          <AlertTitle><strong>Sucesso</strong></AlertTitle>
          Funcionário cadastrado!
          </SucAlert> :  null}
        </Grid>
      </CenterGrid>
      <Grid container item alignItems={'center'} flexDirection={'column'}>
      </Grid>
    </Grid>
  );
}

export { Register };