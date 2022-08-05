import { useState } from "react";
import { LoginFormi } from "./LoginFormi";

const LoginLogic = () => {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  };

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = (details: any) => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Credentials do not match");
      setError("Credentials do not match");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: ""});
  }
  return (
    <div>{(user.email != "") ? (
      <div>
        <h2>Welcome, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
      </div>    
    ) : (
      <LoginFormi Login={Login} error={error} />
    )} </div>
  );

};
  

export { LoginLogic }