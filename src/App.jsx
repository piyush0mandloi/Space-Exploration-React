import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mission from './components/Mission';
import Event from './components/Event';
import img from './assets/download.jpeg'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <nav className='nav'>
          <img src={img} alt="" />
          <ul>
            <li>
              <Link to="/missions">Missions</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/missions" element={<Mission />} />
          <Route path="/events" element={<Event />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
