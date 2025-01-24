import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}> Portfolio</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navItem}>Home</Link></li>
          <li><Link to="/about" style={styles.navItem}>About</Link></li>
          <li><Link to="/skills" style={styles.navItem}>Skills</Link></li>
          <li><Link to="/projects" style={styles.navItem}>Projects</Link></li>
          <li><Link to="/contact" style={styles.navItem}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: 'rgba(169, 154, 181, 0.7)',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Header;
