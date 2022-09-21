import React from 'react';
import Header from './components/Header';
// import Missions from './components/Missions';
// import SolarSystem from './components/SolarSystem';
// import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <section className="container">
        <Header />
        {/* <SolarSystem />
        <Missions />
        <MissionCard /> */}
      </section>
    );
  }
}

export default App;
