import React from 'react';

function Home() {
  return (
    <div style={styles.overlay}>
      <h2 style={styles.heading}>Welcome to My Portfolio</h2>
      <p style={styles.subheading}>Hi, I'm Roshini , a passionate AI & Data Science student</p>
      <p style={styles.text}>
        Scroll through to know more about my skills, projects, and achievements. Let's build something great together!
      </p>
    </div>
  );
}

const styles = {
  overlay: {
    
    backgroundColor: 'rgba(223, 197, 243, 0.7)',
    padding: '50px',
    textAlign: 'center',
    borderRadius: '10px',
    color: 'black',
    maxWidth: '80%',
    margin: 'auto', // Centering the overlay
    height: '100vh', // Fullscreen height for the content
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
  },
  heading: {
    fontSize: '40px',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '18px',
  },
};

export default Home;
