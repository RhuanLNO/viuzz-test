import { useState } from 'react'
import { Header } from "./Components/Home"
import { Register } from "./Components/RegisterForm"
import { LoginForm } from "./Components/Login"
import { Employees } from './Components/Employees'
import { LoginForm2 } from './Components/Login2'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showEmployees, setShowEmployees] = useState(false)


  const toggleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowEmployees(false) 
  };

  const toggleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
    setShowEmployees(false)
  };

  const toggleShowHome = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowEmployees(false)
  };

  const toggleShowEmployees = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowEmployees(true);
  };

  return ( 
    <>
      <Header toggleShowLogin={toggleShowLogin} toggleShowRegister={toggleShowRegister} toggleShowHome={toggleShowHome} toggleShowEmployees={toggleShowEmployees} />
      {showLogin ? <LoginForm2 />: null}
      {showRegister ? <Register />: null}
      {showEmployees ? <Employees toggleShowRegister={toggleShowRegister}/>: null}
    </>
  );
}

export default App
