import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.leftItems}>
        <Link to="/" style={styles.navItem}>Home</Link>
        <Link to="/login" style={styles.navItem}>Login</Link>
        <Link to="/register" style={styles.navItem}>Register</Link>
        <Link to="/about" style={styles.navItem}>About Us</Link>
        <Link to="/drive" style={styles.navItem}>Drives</Link>

      </div>
      <div style={styles.rightItems}>
        <div style={styles.navItem}>Notification <span style={styles.notificationIcon}>🔔</span></div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
  },
  leftItems: {
    display: 'flex',
  },
  rightItems: {
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
    marginRight: '20px',
  },
  notificationIcon: {
    fontSize: '1.2rem',
    marginLeft: '5px',
  },
};

export default Navbar;
