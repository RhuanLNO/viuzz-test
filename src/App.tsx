import { useState } from 'react'
import { Header } from "./Components/Home"
import { Register } from "./Components/RegisterForm"
import { LoginForm } from "./Components/Login"
import { Employees } from './Components/Employees'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(true)
  const [showHome, setShowHome] = useState(true)


  const toggleShowLogin = () => {
    setShowLogin(!showLogin);
    setShowHome(false);
    setShowRegister(false); 
  };

  const toggleShowRegister = () => {
    setShowLogin(false);
    setShowHome(false);
    setShowRegister(!showRegister);
  };

  const toggleShowHome = () => {
    setShowLogin(false);
    setShowHome(!showHome);
    setShowRegister(false);
  };

  return ( 
    <>
      <Header />
{/*       {showLogin ? <LoginForm />: null}
      {showRegister ? <Register />: null} */}
      <Register />
{/*       <Employees /> */}
    </>
  );
}

export default App
