import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Language Translator',
      description: 'A Python-based app that supports multiple languages for text and speech translation.',
      
    },
    {
      name: 'Spotify Data Analysis',
      description: 'An analysis project that processes Spotify data for song recommendations and popularity prediction.',
      
    },
    {
      name: 'Online Auction System',
      description: 'A Java-based auction system that allows users to bid on products with features like auto-bidding and admin management.',
      // link: 'https://github.com/your-github-link/Online-Auction-System',
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h2 style={styles.heading}>My Projects</h2>
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <h3 style={styles.projectName}>{project.name}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
              {/* <a href={project.link} target="_blank" rel="noreferrer" style={styles.projectLink}>
                View Project
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: 'url("https://your-image-link.com/projects-bg.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(223, 197, 243, 0.7)',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '10px',
    color: 'white',
    maxWidth: '80%',
  },
  heading: {
    fontSize: '40px',
    marginBottom: '30px',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  projectCard: {
    backgroundColor: 'rgba(76, 53, 94, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(133, 93, 185, 0.2)',
  },
  projectName: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  projectDescription: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  projectLink: {
    fontSize: '16px',
    color: '#0073e6',
    textDecoration: 'none',
  },
};

export default Projects;
