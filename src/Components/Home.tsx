import { AppBar, Toolbar, Box, Tab, Tabs, Button } from "@mui/material";
import { Logo, Banner, NavTab, LoginButton, RegisterButton } from '../assets/StyledHome'

const Header = (props: {
  toggleShowRegister: React.MouseEventHandler<HTMLButtonElement> | undefined; 
  toggleShowLogin: React.MouseEventHandler<HTMLButtonElement> | undefined;
  toggleShowHome: React.MouseEventHandler<HTMLDivElement> | undefined;
  toggleShowEmployees: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return(
    <AppBar position="static" color="default">
      <Toolbar variant="regular">
        <Box
          component="img"
          sx={{
          height: 60,
          width: 60,
          margin: 1
          }}
          alt="Logo"
          src={'../src/assets/Logo.png'}
        />
        <Banner
          indicatorColor="secondary"
          textColor="inherit"
        />
        <NavTab label="Início" onClick={props.toggleShowHome} />
        <NavTab label="Funcionários" onClick={props.toggleShowEmployees} />
        <LoginButton variant="contained" color="secondary" onClick={props.toggleShowLogin}>
          Login
        </LoginButton>
        <RegisterButton variant="contained" color="secondary" onClick={props.toggleShowRegister} >
          Cadastro
        </RegisterButton>
      </Toolbar>
    </AppBar>
  );
}

export { Header };