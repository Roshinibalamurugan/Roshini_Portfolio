import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>© {new Date().getFullYear()} Roshini B. All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'rgba(77, 67, 84, 0.7)',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  },
  footerText: {
    margin: '0',
    fontSize: '16px',
  },
};

export default Footer;
