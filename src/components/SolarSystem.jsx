import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul className="ulPlanet">
          {planets.map((e, i) => (
            <li key={ i }>
              <PlanetCard planetName={ e.name } planetImage={ e.image } />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
