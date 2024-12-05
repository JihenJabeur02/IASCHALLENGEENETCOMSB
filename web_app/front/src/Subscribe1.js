import React from 'react';

function SubscribeForm() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="logo.png" alt="Logo" style={styles.logo} />
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>HOME</a>
          <a href="/about" style={styles.link}>About Us</a>
          <a href="/subscribe" style={styles.link}>Subscribe</a>
          <a href="/login" style={styles.icon}>👤</a>
          <a href="/help" style={styles.icon}>❓</a>
        </nav>
      </header>

      <main style={styles.main}>
        <button style={styles.backButton}>⬅</button>
        <h2 style={styles.title}>Subscribe</h2>

        <form style={styles.form}>
          <label style={styles.label}>
            IndustryCode (Requester): 
            <input type="text" style={styles.input} />
          </label>

          <label style={styles.label}>
            IndustryId: 
            <input type="text" style={styles.input} />
          </label>

          <label style={styles.label}>
            IndustryName: 
            <input type="text" style={styles.input} />
          </label>

          <label style={styles.label}>
            IndustryLocation: 
            <input type="text" style={styles.input} />
          </label>

          <label style={styles.label}>
            Email: 
            <input type="email" style={styles.input} />
          </label>

          <label style={styles.label}>
            Password: 
            <input type="password" style={styles.input} />
          </label>
          <label style={styles.label}>
            VerifyPassword: 
            <input type="verifypassword" style={styles.input} />
          </label>

          <label style={styles.label}>
            Location: 
            <input type="text" style={styles.input} />
          </label>

          <div style={styles.buttonContainer}>
            <button type="button" style={styles.addButton}>Add Product</button>
            <button type="submit" style={styles.submitButton}>Submit</button>
          </div>
        </form>

        <button style={styles.contactButton}>Contact Us</button>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
  logo: {
    height: '40px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: '20px',
    marginLeft: '10px',
  },
  main: {
    marginTop: '20px',
  },
  backButton: {
    fontSize: '16px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    position: 'absolute',  // Positionne le bouton en bas à gauche
    left: '20px',
    top: '20px',
  },
  title: {
    fontSize: '24px',
    margin: '20px 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginTop: '5px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  addButton: {
    backgroundColor: '#cc4545',
    color: '#0',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  submitButton: {
    backgroundColor: '#cc4545',
    color: '#0',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  contactButton: {
    backgroundColor: '#008241',
    color: '#0',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    marginTop: '20px',
    cursor: 'pointer',
  },
};

export default SubscribeForm;