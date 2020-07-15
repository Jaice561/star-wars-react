import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { getAllStarships } from './services/sw-api'
import './App.css';
import StarshipPage from './pages/StarshipPage';

class App extends Component {

  state = {
    starships: [],
  };

  async componentDidMount(){
    const starships = await getAllStarships();
    this.setState({starships: starships.results})
  }

  getStarship = (idx) => {
    return this.state.starships[idx]
  }

  render(){
    return (
      <div className="App">
      <header className="App-header">STAR WARS STARSHIPS</header>
     
      <Route exact path="/" render={() =>
        <section>
          {this.state.starships.map((starships,idx) =>
           <Link
              key={starships.name}
              to={`/starships/${idx}`}
            >
              {starships.name}
          </Link>
        )}
      </section>

      }>
      </Route>
      <Route path='/starships/:idx' render={(props) => 
        <StarshipPage 
          {...props}
          getStarship={this.getStarship}
        />
      }>
      </Route>
    
    </div>
  )
  }
}

export default App;
