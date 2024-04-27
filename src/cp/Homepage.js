import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Types of Vaccinations</h1>
      <p style={styles.paragraph}>
        Vaccinations are essential for preventing and controlling infectious diseases. They work by stimulating the immune system to produce an immune response, 
        preparing it to recognize and fight specific pathogens if they are encountered in the future.
      </p>
      <div style={styles.vaccinations}>
        <div style={styles.vaccination}>
          <h2 style={styles.vaccinationTitle}>COVID-19 Vaccine</h2>
          <p style={styles.vaccinationDescription}>The COVID-19 vaccine is designed to provide immunity against the coronavirus.</p>
        </div>
        <div style={styles.vaccination}>
          <h2 style={styles.vaccinationTitle}>Influenza Vaccine</h2>
          <p style={styles.vaccinationDescription}>The influenza vaccine, commonly known as the flu shot, helps prevent influenza viruses.</p>
        </div>
        <div style={styles.vaccination}>
          <h2 style={styles.vaccinationTitle}>MMR Vaccine</h2>
          <p style={styles.vaccinationDescription}>The MMR vaccine protects against measles, mumps, and rubella.</p>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
  },
  paragraph: {
    marginBottom: '20px',
    color: '#666',
  },
  vaccinations: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  vaccination: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    marginBottom: '20px',
  },
  vaccinationTitle: {
    color: '#333',
    marginBottom: '10px',
  },
  vaccinationDescription: {
    color: '#666',
  },
};

export default HomePage;
