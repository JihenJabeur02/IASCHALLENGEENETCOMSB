// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

const Login = () => {
  const [data, setData] = useState({});

  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/industries/login', data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('id', response.data.Id);
        window.location = 'http://localhost:3000/industry';
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="App" style={styles.app}>
      <Header />
      <main style={styles.main}>
        <div style={styles.formContainer}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#2c8f31', marginBottom: '40px' }}>Login</h2>
          <form onSubmit={login}>
            <label style={styles.label}>
              Code:
              <input
                type="text"
                name="code"
                placeholder="Enter your code"
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Password:
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <button type="submit" style={styles.submitBtn}>
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    padding: '20px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  formContainer: {
    maxWidth: '480px',
    width: '90%',
    padding: '60px',
    borderRadius: '10px',
    backgroundColor: '#69a9c7',
    boxShadow: '0 4px 8px rgba(0,0,0,0)',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginTop: '5px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  submitBtn: {
    width: '50%',
    padding: '12px',
    boxShadow: '0 2px 4px rgba(255,255,255,255)',
    backgroundColor: '#2c8f31',
    border: 'none',
    borderRadius: '4px',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '20px',
    cursor: 'pointer',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Login;
