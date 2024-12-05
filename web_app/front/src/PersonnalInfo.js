import React, { useState } from 'react';

function App() {
  const [cartStatus, setCartStatus] = useState('on the way');
  const [indStatus, setIndStatus] = useState('Requester');
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  const handleCartStatusToggle = () => {
    setCartStatus(cartStatus === 'on the way' ? 'Stop' : 'on the way');
  };

  const handleIndStatusToggle = () => {
    setIndStatus(indStatus === 'Requester' ? 'FullFiller' : 'Requester');
  };

  const handleContactClick = () => {
    setContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setContactFormOpen(false);
  };

  return (
    <div style={styles.app}>
    {/* Navbar */}
    <header style={styles.navbar}>
      <div style={styles.logoSection}>
        <img src="logo.png" alt="Logo" style={styles.logo} />
        <span style={styles.logoText}>IndiCon</span>
      </div>
      <nav style={styles.navLinks}>
        <a href="/" style={styles.navLink}>HOME</a>
        <a href="/about" style={styles.navLink}>About Us</a>
        <a href="/subscribe" style={styles.navLink}>Subscribe</a>
      </nav>
      <div style={styles.navIcons}>
        {/* Bouton pour 👤 */}
        <button
          style={{
            ...styles.iconButton,
            ...styles.userIcon,
          }}
          onClick={() => alert("Bouton utilisateur cliqué !")}
        >
          👤
        </button>
        {/* Bouton pour ? */}
        <button
          style={{
            ...styles.iconButton,
            ...styles.helpIcon,
          }}
          onClick={() => alert("Bouton aide cliqué !")}
        >
          ?
        </button>
      </div>
    </header>
  
      {/* Content */}
      <main style={styles.content}>
        {/* Cart Section */}
        <div style={styles.cartSection}>
          <div style={styles.cartIcon}>🛒</div>
          <div style={styles.cartTitle}>Cart</div>
        </div>

        {/* Table */}
        <div style={styles.table}>
          <div style={styles.tableHeader}>
            <div>CartId</div>
            <div>Road</div>
            <div>DepartureDate</div>
            <div>Arrival Date</div>
            <div>CartStatus</div>
            <div>IndStatus</div>
          </div>
          <div style={styles.tableRow}>
            <div>123</div>
            <div>Route A</div>
            <div>2023-11-22</div>
            <div>2023-11-23</div>
            <button style={styles.statusButton} onClick={handleCartStatusToggle}>
              {cartStatus}
            </button>
            <button style={styles.statusButton} onClick={handleIndStatusToggle}>
              {indStatus}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <button style={styles.contactButton} onClick={handleContactClick}>
          Contact Us
        </button>
      </footer>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Contact Us</h2>
            <form>
              <div style={styles.formGroup}>
                <label>Name</label>
                <input type="text" style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label>Email</label>
                <input type="email" style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label>Message</label>
                <textarea style={styles.textarea} rows="4"></textarea>
              </div>
              <button type="submit" style={styles.submitButton}>Send</button>
              <button type="button" style={styles.closeButton} onClick={handleCloseContactForm}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #ccc',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
  },
  logoText: {
    fontWeight: 'bold',
    marginLeft: '10px',
  },
  navLinks: {
    display: 'flex',
  },
  navLink: {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
  navIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  userIcon: {
    marginLeft: '10px',
    fontSize: '18px',
  },
  helpIcon: {
    marginLeft: '10px',
    fontSize: '18px',
  },
  content: {
    padding: '20px',
  },
  cartSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  cartIcon: {
    fontSize: '50px',
    backgroundColor: '#ddd',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartTitle: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  table: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'left',
  },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 2fr 2fr 1.5fr 1.5fr', // Ajustement des tailles de colonnes
    backgroundColor: '#f3d3b6',
    padding: '10px',
    fontWeight: 'bold',
    borderRadius: '8px',
    gap: '20px', // Espace entre les colonnes
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 2fr 2fr 1.5fr 1.5fr', // Correspond à tableHeader
    padding: '10px',
    backgroundColor: '#f3d3b6',
    borderRadius: '8px',
    gap: '20px', // Espace entre les colonnes
  },
  statusButton: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    padding: '10px',
  },
  contactButton: {
    backgroundColor: '#8fd89e',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    textAlign: 'left',
  },
  formGroup: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitButton: {
    backgroundColor: '#8fd89e',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  closeButton: {
    backgroundColor: '#ccc',
    color: 'black',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default App;