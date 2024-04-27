import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h2>About Us</h2>
      <p>VaxNow is a platform dedicated to promoting vaccination and raising awareness about the importance of immunization for public health. Our mission is to provide accurate information, debunk myths, and encourage people to get vaccinated against preventable diseases.</p>
      <p>At VaxNow, we believe that vaccination is one of the most effective ways to prevent the spread of infectious diseases and protect individuals, families, and communities. We strive to empower individuals with knowledge about vaccines and their benefits, helping them make informed decisions about their health.</p>
      <p>Our team consists of healthcare professionals, researchers, and advocates who are passionate about public health and dedicated to promoting vaccination as a vital component of disease prevention. Together, we work to combat misinformation and promote evidence-based practices that promote immunization.</p>
      <p>Join us in our mission to promote vaccination, protect public health, and save lives. Together, we can create a healthier and safer future for everyone.</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '5px',
    width: '80%',
    maxWidth: '800px',
    textAlign: 'justify',
  },
};

export default AboutUs;
