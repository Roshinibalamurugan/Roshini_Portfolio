import React from 'react';

function Skills() {
  const skills = [
    {
      name: 'HTML',
      image: 'https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png',
      description: 'HTML is the standard markup language for creating web pages. It structures the content and layout of a webpage.'
    },
    {
      name: 'CSS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
      description: 'CSS is used for styling HTML elements. It controls the layout, design, and overall look of a webpage.'
    },
    {
      name: 'JavaScript',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      description: 'JavaScript is a versatile programming language used to add interactivity to websites and build dynamic content.'
    },
    {
      name: 'React',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      description: 'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.'
    },
    {
      name: 'Python',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      description: 'Python is a high-level programming language known for its simplicity and versatility in various fields such as web development, data analysis, and AI.'
    },
    {
      name: 'Java',
      image: 'https://static.vecteezy.com/system/resources/previews/022/100/214/original/java-logo-transparent-free-png.png',
      description: 'Java is a popular object-oriented programming language used for building robust and scalable applications.'
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Skills</h2>
      <div style={styles.skillGrid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.skillCard}>
            <img src={skill.image} alt={skill.name} style={styles.skillImage} />
            <h3 style={styles.skillName}>{skill.name}</h3>
            <p style={styles.skillDescription}>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: 'rgba(223, 197, 243, 0.7)',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
  },
  skillGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  skillCard: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  skillImage: {
    width: '80px',
    height: '80px',
    marginBottom: '10px',
  },
  skillName: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  skillDescription: {
    fontSize: '16px',
    color: '#555',
  },
};

export default Skills;
