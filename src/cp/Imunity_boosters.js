import React from 'react';

const ImmunityBoosters = () => {
  // Define static data
  const boosters = [
    {
      _id: 1,
      name: "Vitamin C",
      details: "Known for its antioxidant properties, vitamin C helps boost the immune system by supporting the production of white blood cells, which are key to fighting infections."
    },
    {
      _id: 2,
      name: "Vitamin D",
      details: "Helps regulate the immune system and is crucial for the function of immune cells. It's often obtained from sunlight exposure and supplements."
    },
    {
      _id: 3,
      name: "Zinc",
      details: "Plays a role in the development and function of immune cells. It's involved in various immune processes, including inflammation and fighting off infections."
    },
    {
      _id: 4,
      name: "Echinacea",
      details: "Believed to stimulate the immune system and reduce the duration of colds and other respiratory infections. It's available in various forms such as tea, capsules, and extracts."
    },
    {
      _id: 5,
      name: "Garlic",
      details: "Contains compounds that have been shown to enhance immune function. It's often used in cooking or taken as a supplement."
    },
    {
      _id: 6,
      name: "Probiotics",
      details: "Beneficial bacteria that reside in the gut and help maintain a healthy balance of gut flora. A healthy gut microbiome is linked to a stronger immune system."
    },
    {
      _id: 7,
      name: "Omega-3 Fatty Acids",
      details: "Found in fish oil and certain plant sources like flaxseeds and chia seeds, omega-3 fatty acids help reduce inflammation and support immune function."
    },
    {
      _id: 8,
      name: "Regular Exercise",
      details: "Physical activity helps to boost the immune system by promoting good circulation, reducing stress hormones, and improving overall health."
    },
    {
      _id: 9,
      name: "Adequate Sleep",
      details: "Lack of sleep can weaken the immune system, so ensuring you get enough quality sleep is crucial for maintaining immunity."
    },
    {
      _id: 10,
      name: "Stress Management",
      details: "Chronic stress can suppress the immune system, so techniques such as meditation, deep breathing exercises, and spending time in nature can help manage stress levels and support immunity."
    }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {boosters.map(booster => (
        <div key={booster._id} style={styles.card}>
          <h2 style={styles.title}>{booster.name}</h2>
          <p style={styles.details}>{booster.details}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    width: '30%',
    margin: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#333',
  },
  details: {
    fontSize: '1rem',
    color: '#666',
  },
};


export default ImmunityBoosters;
