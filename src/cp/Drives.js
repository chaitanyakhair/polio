import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Drives = () => {
  // Static data for vaccination drives
  const drivesData = [
    {
      id: 1,
      name: 'Community Vaccination Drive',
      location: 'City Park Community Center',
      date: 'April 30, 2024',
      time: '10:00 AM - 4:00 PM',
      vaccine: 'Pfizer-BioNTech',
      capacity: '200 doses available',
    },
    {
      id: 2,
      name: 'School Vaccination Program',
      location: 'Springfield High School',
      date: 'May 5, 2024',
      time: '9:00 AM - 2:00 PM',
      vaccine: 'Moderna',
      capacity: '150 doses available',
    },
    {
      id: 3,
      name: 'Drive-through Vaccination Clinic',
      location: 'City Health Department',
      date: 'May 12, 2024',
      time: '11:00 AM - 6:00 PM',
      vaccine: 'Johnson & Johnson',
      capacity: '300 doses available',
    },
  ];

  const navigate = useNavigate(); // Hook from react-router-dom for navigation

  const handleBook = (driveId) => {
    // Logic for booking the drive with driveId
    console.log(`Booked drive with ID: ${driveId}`);
    navigate('/booking'); // Navigate to the booking page
  };

  return (
    <div style={styles.container}>
      <h2>Vaccination Drives</h2>
      <div style={styles.cardContainer}>
        {drivesData.map(drive => (
          <div key={drive.id} style={styles.card}>
            <h3>{drive.name}</h3>
            <p><strong>Location:</strong> {drive.location}</p>
            <p><strong>Date:</strong> {drive.date}</p>
            <p><strong>Time:</strong> {drive.time}</p>
            <p><strong>Vaccine:</strong> {drive.vaccine}</p>
            <p><strong>Capacity:</strong> {drive.capacity}</p>
            <button onClick={() => handleBook(drive.id)} style={styles.button}>Book</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '5px',
    width: '80%',
    maxWidth: '800px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ccc',
    padding: '20px',
    margin: '10px',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '400px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Drives;
