import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API or email service.
    console.log('Form Submitted', formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Contact Me</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Your Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>

      <div style={styles.details}>
        <h3 style={styles.detailsHeading}>You can also reach me at:</h3>
        <p style={styles.text}>Email: <a href="mailto:roshini.b2023ai-ds@sece.ac.in">roshini.b2023ai-ds@sece.ac.in</a></p>
        <p style={styles.text}>Phone: 9342778607</p>
        <p style={styles.text}>
          LinkedIn: <a href="https://www.linkedin.com/in/roshini-balamurugan-06a057299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noreferrer">My LinkedIn</a>
        </p>

        <div style={styles.downloadSection}>
          <a href="https://docs.google.com/document/d/1YKZ2SahcLwLBL2CJU3RNOPSQoeHU5lM6/edit?usp=sharing&ouid=111673700370547228664&rtpof=true&sd=true" download style={styles.downloadButton}>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: 'url("https://your-image-link.com/contact-bg.jpg")', // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    color: 'black',
  },
  formContainer: {
    backgroundColor: 'rgba(223, 197, 243, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    width: '100%',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '100%',
    height: '150px',
    resize: 'none',
  },
  button: {
    padding: '12px',
    backgroundColor: '#0073e6',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#005bb5',
  },
  details: {
    backgroundColor: 'rgba(223, 197, 243, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    width: '100%',
  },
  detailsHeading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '18px',
    margin: '10px 0',
  },
  downloadSection: {
    marginTop: '20px',
  },
  downloadButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    fontSize: '18px',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block',
    transition: 'background-color 0.3s',
  },
  downloadButtonHover: {
    backgroundColor: '#45a049',
  },
};

export default Contact;
