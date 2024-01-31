import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/api/users/login', {
        params: {
          email,
          password,
        },
      });

      console.log(response.data); // handle success response
    } catch (error) {
      console.error('Login failed', error); // handle error
    }
  };

  return (
    <div id='div'>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:<br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br/>
        <label>
          Password:<br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Dont have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;