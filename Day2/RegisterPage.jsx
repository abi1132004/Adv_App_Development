// RegisterPage.jsx
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { useSpring } from 'react-spring';
import axios from 'axios';
import './RegisterPage.css'

const RegisterPage = () => {
  const [user, setUser] = useState({
    fullName: '',
    emailId: '',
    age: '',
    phone: '',
    password: ''
  });

  const navigate = useNavigate();

  //const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/register', user);

      console.log(response.data); // handle success response

      // If registration is successful, navigate to the login page
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error); // handle error
    }
  };

  return (
    <div id='div'>
      <h2>Register Page</h2>
      <form onSubmit={handleRegistration}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={user.fullName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="emailId" value={user.emailId} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={user.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="phone" value={user.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
