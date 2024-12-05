import React from 'react';

// CSS styles as a JavaScript object
const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  navLink: {
    margin: '0 30px',
    textDecoration: 'none',
    color: '#333',
  },
  navLinkHover: {
    color: 'green',
  },
  userIcon: {
    fontSize: '20px',
    marginLeft: '50px',
  },
  uIcon: {
    fontSize: '20px',
    marginLeft: '45px',
  },
  mainContent: {
    padding: '20px',
    textAlign: 'center',
  },
  backButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    marginBottom: '10px',
    marginRight: '1200px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  formGroupLabel: {
    textAlign: 'left',
    marginBottom: '5px',
    fontSize: '14px',
  },
  formInput: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#cc4545',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  submitButtonHover: {
    backgroundColor: '#cc4545',
  },
  contactButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#008241',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '500px',
  },
  contactButtonHover: {
    backgroundColor: '#008241',
  },
  plusButton: {
    position: 'relative',
    top: '100px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    marginBottom: '0px',
    marginLeft: '400px',
  },
};

function App() {
  return (
    <div style={styles.body}>
      {/* Barre de navigation */}
      <header style={styles.navbar}>
        <img src="logo.png" alt="Logo" style={styles.logo} />
        <nav>
          <a href="#" style={{ ...styles.navLink, ...styles.navLinkHover }}>HOME</a>
          <a href="#" style={{ ...styles.navLink, ...styles.navLinkHover }}>About Us</a>
          <a href="#" style={{ ...styles.navLink, ...styles.navLinkHover }}>Subscribe</a>
          <span style={styles.userIcon}>👤</span>
          <span style={styles.uIcon}>❔</span>
        </nav>
      </header>

      {/* Contenu principal */}
      <main style={styles.mainContent}>
        <button style={styles.plusButton}>+</button>
        <button style={styles.backButton}>←</button>
        <h1 style={styles.title}>Subscribe</h1>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.formGroupLabel}>ProductCode:</label>
            <input type="text" name="productCode" style={styles.formInput} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formGroupLabel}>Productid:</label>
            <input type="text" name="productId" style={styles.formInput} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formGroupLabel}>Productname:</label>
            <input type="text" name="productName" style={styles.formInput} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formGroupLabel}>Description:</label>
            <textarea name="description" rows="3" style={styles.formInput}></textarea>
          </div>
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
        <button style={styles.contactButton}>Contact Us</button>
      </main>
    </div>
  );
}

export default App;
