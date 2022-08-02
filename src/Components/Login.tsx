import { Typography, AppBar, Toolbar, Tab, Tabs, Button, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';

const LoginForm = () => {
  return (
    <Grid container justifyContent="center">
    <Grid container item md={3} flexDirection="column" style={{ margin: "60px 0px 20px 0px" }}>
      <Typography align="center" style={{ margin: "0px 0px 30px 0px" }}>Login</Typography>
      <TextField id="name" label="E-mail" variant="outlined" style={{ margin: "10px 0px" }}/>
      <TextField id="city" label="Senha" variant="outlined" style={{ margin: "10px 0px" }}/>
    </Grid>
    <Grid container item alignItems={'center'} flexDirection={'column'}>
        <Button variant="outlined" style={{ margin: "30px 0px", width: "200px"}}>Enviar</Button>
    </Grid>
  </Grid>
  );
}

export { LoginForm };