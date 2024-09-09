import axios from 'axios'
import styles from './Event.module.css'
import React, { useEffect, useState } from 'react'

const Event = () => {

    const [events, setEvents] = useState([])
    const [error, setError] = useState(null);


    useEffect(()=>{
        const fetchEvents = async ()=>{
            try{
                const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-09-02&end_date=2024-09-09&api_key=dh67e8gG61kpdf4hA4QDIjSQdLLilZKcBNDRWRnj`)
                const neoData = Object.values(response.data.near_earth_objects).flat()
                setEvents(neoData)
            }catch(error){
                console.error('Error fetching missions:', error);
                setError('Failed to fetch data from NASA API');
            }
        }
        fetchEvents()
    },[])
  return (
    <div className={styles.events}>
        <h1>Astronomical Events</h1>
        {error && <p>{error}</p>}
        {events.length === 0 ? (
        <p>Loading...</p>
      ) : (
        events.slice(1,11).map((event, index) => (
          <div key={index} className={styles.events_description}>
            <h2>{event.name}</h2>
            <p>Estimated Diameter: {event.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} - {event.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</p>
            <p>Potentially Hazardous: {event.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Event