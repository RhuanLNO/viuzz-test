import { Grid, FormControl } from "@mui/material";
import { TopGrid, LoginTypography, FormTextfield, SendButton } from '../assets/StyledLogin'
/* import { TopGrid, LoginTypography, FormTextfield, SendButton } from '../assets/Styled'; */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {

  type FormData = {
    email: string;
    password: string;
  };

  const { register, getValues, handleSubmit, formState:{errors} } = useForm<FormData>();
  const [ users, setUsers ] = useState({email: "", password: ""})
  const onSubmit=(data: any) => {
    console.log(data)
    setUsers(getValues())
  };

  console.log(users)

  return (
    <Grid container justifyContent="center">
    <TopGrid container item md={3} flexDirection="column">
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginTypography align="center">Login</LoginTypography>
        <FormTextfield id="email" label="E-mail" type="email" variant="outlined" 
          {...register("email", {
          required: "Required", pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
          },
          })} 
          error={!!errors?.email} 
          />
        <FormTextfield id="password" label="Senha" type="password" variant="outlined" 
        {...register("password", {
          required: "Required"
          })} 
          error={!!errors?.password}
        />
        <SendButton variant="outlined" type="submit" value="LOGIN" onClick={() => {
          const check = getValues();
          console.log(check)
        }}>Enviar</SendButton>
      </form>
    </TopGrid>
    <Grid container item alignItems={'center'} flexDirection={'column'}>
    </Grid>
  </Grid>
  );
}

export { LoginForm };