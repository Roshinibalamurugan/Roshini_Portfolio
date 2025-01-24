import React from 'react';

function About() {
  return (
    <div style={styles.overlay}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
        I'm Roshini B, currently pursuing my B.Tech in Artificial Intelligence and Data Science. 
        I specialize in building AI-driven solutions and am passionate about solving complex problems. 
        I enjoy learning new technologies and constantly strive to improve my skills.
      </p>
      

      <div style={styles.certifications}>
        <h3 style={styles.certHeading}>Certifications</h3>
        <div style={styles.mindMap}>
          <div style={styles.node}>
            <p style={styles.certText}>C for Beginners: Coursera (2023)</p>
          </div>
          <div style={styles.connector}></div>
          <div style={styles.node}>
            <p style={styles.certText}>The Complete Introduction to C++ Programming: Udemy (2024)</p>
          </div>
          <div style={styles.connector}></div>
          <div style={styles.node}>
            <p style={styles.certText}>Web Development: Udemy (2024)</p>
          </div>
          <div style={styles.connector}></div>
          <div style={styles.node}>
            <p style={styles.certText}>Mastering Data Structure and Algorithm in C and C++: Udemy (2024)</p>
          </div>
          <div style={styles.connector}></div>
          <div style={styles.node}>
            <p style={styles.certText}>Pandas: Kaggle (2024)</p>
          </div>
        </div>
      </div>
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
  },
  heading: {
    fontSize: '40px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
  certifications: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
  },
  certHeading: {
    fontSize: '30px',
    marginBottom: '20px',
    color: '#4e2c91',
  },
  mindMap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  node: {
    backgroundColor: '#f4f4f4',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '250px',
    textAlign: 'center',
    fontSize: '18px',
    transition: 'transform 0.3s ease-in-out',
  },
  certText: {
    margin: 0,
  },
  connector: {
    width: '2px',
    height: '40px',
    backgroundColor: '#4e2c91',
    margin: '20px 0',
  },
};

export default About;
