import React from 'react';

export function validate(input){
  let error = {};
  if (!input.username){
    error.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = 'Username is invalid';
  }
  if (!input.password){
    error.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)){
    error.password = "Password is invalid";
  }
  return error;
};

export default function Form() {

  const [input, setInput] = React.useState({
    username: "",
    password: ""
  });

  const [error, setError] = React.useState({});

  const handleInputChange = (e)=>{
    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    
    let objError = validate({
      ...input, 
      [e.target.name]: e.target.value
    })
    setError(objError);
  };
  
  return (
      <form>
        <div>
          <label>Username:</label>
          <input 
            key="" 
            type="text" 
            placeholder="Username" 
            name="username" 
            onChange={handleInputChange} 
            value={input.username}
            className={error.username && "danger"}
          />
          {error.username && (
          <p className="danger">{error.username}</p>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input 
            key="" 
            type="password" 
            placeholder="Password" 
            name="password" 
            onChange={handleInputChange} 
            value={input.password}
            className={error.password && "danger"}
          />
          {error.password && (
          <p className="danger">{error.password}</p>
          )}
        </div>
        <input type="submit" value={"Ingresar"}/>
      </form>
  )
}
