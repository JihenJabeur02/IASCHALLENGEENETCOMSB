import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function SignIn() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setData((prev) => ({
          ...prev,
          latitude: latitude.toString(),
          longitude: longitude.toString(),
        }));
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  };

  const add = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/industries/add', data)
      .then(() => {
        // Redirect to the Login page after successful sign up
        navigate('/login');
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
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#2c8f31', marginBottom: '40px' }}>
            Sign Up
          </h2>
          <form>
            <label style={styles.label}>
              IndustryName:
              <input
                onChange={handleChange}
                type="text"
                name="IndustryName"
                placeholder="Enter industry name"
                style={styles.input}
              />
            </label>

            <label style={styles.label}>
              IndustryCode:
              <input
                onChange={handleChange}
                type="text"
                name="IndustryCode"
                placeholder="Enter industry code"
                style={styles.input}
              />
            </label>

            <label style={styles.label}>
              Email:
              <input
                onChange={handleChange}
                type="text"
                name="Email"
                placeholder="Enter email"
                style={styles.input}
              />
            </label>

            <label style={styles.label}>
              Password:
              <input
                onChange={handleChange}
                type="password"
                name="Password"
                placeholder="Enter password"
                style={styles.input}
              />
            </label>

            <button
              type="button"
              onClick={handleLocation}
              style={styles.locationButton}
            >
              Get Location
              {data.latitude && data.longitude ? (
                <img
                  style={styles.icon}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/768px-Sign-check-icon.png"
                  alt="location check"
                />
              ) : (
                <img
                  style={styles.icon}
                  src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/151_check_no_delete_error_remove-512.png"
                  alt="location error"
                />
              )}
            </button>

            <div style={styles.buttonsContainer}>
              <button onClick={add} style={styles.submitBtn}>
                Submit
              </button>

              <p style={styles.accountText}>
                If you have an account, <span style={styles.link} onClick={() => navigate('/login')}>Login</span>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

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
  locationButton: {
    width: '50%',
    padding: '12px',
    boxShadow: '0 2px 4px rgba(255,255,255,255)',
    backgroundColor: '#D9D9D9',
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
  icon: {
    width: '30px',
    height: '30px',
    marginLeft: '10px',
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
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  accountText: {
    fontSize: '16px',
    color: '#000',
    marginTop: '15px',
  },
  link: {
    color: '#2c8f31',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default SignIn;
