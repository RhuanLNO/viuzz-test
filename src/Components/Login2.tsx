import { Grid, FormControl, Typography, Input, Box, FormGroup } from "@mui/material";
import { TopGrid, LoginTypography, FormTextfield, SendButton } from '../assets/StyledLogin'
import { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const LoginForm2 = (props: {toggleLogin: React.FormEventHandler<HTMLButtonElement> | undefined;}) => {

/*   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminAccount = {
    email: 'admin@admin.com',
    password: '12345'
  };

  const IsLoggedIn = () => {

  }

  const handleChangeEmail = (data: any) => {
    setEmail(data)
  };

  const handleChangePassword = (data: any) => {
    setPassword(data)
  };

  const Login = () => {
    var done=0;
    if (email == "admin@admin.com" && password == "12345") {
      done=1;
      return(
        alert("Você está logado")
      )
    }else
    { alert("Dados incorretos, tente novamente"); }
  }; */

    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

  
    // User Login info
    const database = [
      {
        username: "admin",
        password: "admin"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };

    const handleSubmit = (event: any) => {
      console.log(typeof props.toggleLogin)
      /* props.toggleLogin(); */
      event.preventDefault();
            
/*       const callFunc = () => {
        props.toggleLogin;
      }; */
  
      var { uname, pass } = document.forms[0];
  
      const userData = database.find((user) => user.username === uname.value);
  
      if (userData) {
        if (userData.password !== pass.value) {
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        };
      } else {
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };

      const renderForm = (
        <Grid container justifyContent="center">
        <TopGrid container item md={3} flexDirection="column">
          <form onSubmit={handleSubmit}>
            <Grid container flexDirection="column">
              <LoginTypography align="center">Login</LoginTypography>
              <FormTextfield id="email" label="E-mail" name="uname" variant="outlined" />
              <FormTextfield id="password" label="Senha" type="password" name="pass" variant="outlined" />
              <SendButton variant="outlined" type="submit" value="LOGIN" onClick={props.toggleLogin} >Enviar</SendButton>
            </Grid>
          </form>
        </TopGrid>
      </Grid>
      );
    
      return (
        <Grid container item justifyContent="center">
        {isSubmitted ? <Alert severity="success">
        <AlertTitle>Sucesso</AlertTitle>
        Você está logado! <strong>Acesso Liberado</strong>
        </Alert> :  renderForm}
        </Grid>
      );
    }

export { LoginForm2 };