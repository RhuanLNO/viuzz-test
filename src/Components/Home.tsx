import { Typography, AppBar, Toolbar, Box, Tab, Tabs, Button } from "@mui/material";
import toggleShowHome  from '../App'
import toggleShowLogin from '../App'
import toggleShowRegister from '../App'

const Header = () => {
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
        <Tabs
          sx={{ marginLeft: "20px"}}
          indicatorColor="secondary"
          textColor="inherit"
        />
        <Tab label="Início" sx={{color: 'black'}} />
        <Tab label="Funcionários" sx={{color: 'black'}} />
        <Button sx={{ marginLeft: "auto"}} variant="contained" color="secondary" onClick={toggleShowLogin}>
          Login
        </Button>
        <Button sx={{ marginLeft: "10px" }} variant="contained" color="secondary">
          Cadastro
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export { Header };