import React, { useState } from "react";
import axiosWithAuth from './axiosWithAuth';

const Login = props => {
  const [credentials, setCredentials] = useState({})

  const handleChanges = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubblepage')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input type="text" name="username" placeholder="Username" value={credentials.username} onChange={handleChanges} />
        <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChanges} />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
