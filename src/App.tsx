import { useState } from 'react'
import { Header } from "./Components/Home"
import { Register } from "./Components/RegisterForm"
import { Employees } from './Components/Employees'
import { LoginForm2 } from './Components/Login2'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showEmployees, setShowEmployees] = useState(false)
  const [IsLoggedIn, setIsLoggedIn] = useState(false)

  const toggleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowEmployees(false);
  };

  const toggleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
    setShowEmployees(false);
  };

  const toggleShowHome = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowEmployees(false);

  };

  const toggleShowEmployees = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowEmployees(true);
  };

  const toggleLogin = () => {
    setIsLoggedIn(true);
    console.log(IsLoggedIn);
  };

  const toggleShowEdit = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowEmployees(false);
  };

  return ( 
    <>
      <Header toggleShowLogin={toggleShowLogin} toggleShowRegister={toggleShowRegister} toggleShowHome={toggleShowHome} toggleShowEmployees={toggleShowEmployees} />
      {showLogin ? <LoginForm2 toggleLogin={toggleLogin} />: null}
      {showRegister && IsLoggedIn ?  <Register toggleShowEmployees={toggleShowEmployees} />: null}
      {showEmployees && IsLoggedIn ? <Employees toggleShowRegister={toggleShowRegister} toggleShowEdit={toggleShowRegister} />: null}
    </>
  );
}

export default App
