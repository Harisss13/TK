// Login.js
import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth from AuthContext

const Login = () => {
  const { login } = useAuth(); // Destructure the login function from useAuth
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/loginadmin', { username, password });

      // Check if login was successful
      if (response.data.success) {
        console.log('Login successful');
        navigate('/admin');
        login(); // Call the login function from useAuth
      } else {
        // Handle unsuccessful login
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="daftar">
      <h2>Login Admin</h2>
      <form onSubmit={loginAdmin}>
        <div>
          <Form.Group className="mb-3" controlId="nik">
            <label>Username</label>
            <Form.Control
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="nik">
            <label>Password</label>
            <Form.Control
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <button variant="primary" type="submit" className="button is-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
