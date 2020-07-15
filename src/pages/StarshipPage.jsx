import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/StarshipPage.css'

function StarshipPage(props) {
  
    const starship = props.getStarship(props.match.params.idx);
    
    return (
      <div className='StarshipPage'>
        {starship ?
          <div className='StarshipPage-starship'>
            
            <span>NAME:</span>
            <span>{starship.name}</span>
            <span>MODEL:</span>
            <span>{starship.model}</span>
            <Link to='/'>RETURN</Link>
          </div>
          :
          <h3>Loading...</h3>
        }
      </div>
    );
  };

export default StarshipPage;