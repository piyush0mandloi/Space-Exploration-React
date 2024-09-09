import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Mission.module.css'

const Mission = () => {
  const [missions, setMissions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using the NASA Astronomy Picture of the Day (APOD) API as an example
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=dh67e8gG61kpdf4hA4QDIjSQdLLilZKcBNDRWRnj'
        );
        // Adjust the response data here as needed
        setMissions([response.data]); // Assuming APOD returns a single object
      } catch (error) {
        console.error('Error fetching missions:', error);
        setError('Failed to fetch data from NASA API');
      }
    };

    fetchData();
  }, []); // Empty array ensures the effect only runs once

  return (
    <div className={styles.missionContainer}>
  <h1 className={styles.title}>NASA Missions</h1>
  {error && <p className={styles.error}>{error}</p>}
  {missions.length === 0 ? (
    <p className={styles.loading}>Loading...</p>
  ) : (
    missions.map((mission, index) => (
      <div key={index} className={styles.missionCard}>
        <h2 className={styles.missionTitle}>{mission.title}</h2>
        <p className={styles.missionExplanation}>{mission.explanation}</p>
        <img src={mission.url} alt={mission.title} className={styles.missionImage} />
      </div>
    ))
  )}
</div>

  );
};

export default Mission;
