import { useState } from "react";

const LoginFormi = (Login: any, error: any) => {
  const [details, setDetails] = useState ({name: "", email: "", password: ""});

  const submitHandler = (e: any) => {
    e.preventDefault();

    Login(details);
  }

  return(
    <form onSubmit={submitHandler}>
      <div>
        <h2>Login</h2>
        {(error != "") ? (<div>{error} </div>) : ""}
          <label htmlFor="name">Name:</label>
          <input type='text' name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
      </div>
      <div className="form-group"></div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        <input type="submit" value="LOGIN" />
    </form>
  );
}

export {LoginFormi}