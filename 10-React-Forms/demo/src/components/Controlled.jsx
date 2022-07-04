import React, { useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) {
      // el estado error deja de estar vacío!
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }

  let onSubmit= (e) => {
    e.preventDefault();  // evitamos el comportamiento que tiene pro default el event: onSubmit.
    // Lo que va a suceceder es que no se va a recargar la página
    console.log(username);
    console.log(password);
    console.log(error);
  };

  return (
      <form onSubmit={onSubmit}>
        <input className={error && 'danger'}
          name="username" value={username} placeholder="username" onChange={(e) => validateUser(e.target.value)}/>
        {!error ? null : <span>{error}</span>}
        <input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    );
}