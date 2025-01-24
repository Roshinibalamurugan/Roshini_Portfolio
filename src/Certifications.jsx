import React from 'react';
// import './styles/Certifications.css';

function Certifications() {
  const certifications = [
    'C for Beginners: Coursera (2023)',
    'The Complete Introduction to C++ Programming: Udemy (2024)',
    'Web Development: Udemy (2024)',
    'Mastering Data Structure and Algorithm in C and C++: Udemy (2024)',
    'Pandas: Kaggle (2024)',
  ];

  return (
    <div className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;
