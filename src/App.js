import React, {Component} from 'react';
import ball from './photos/download.jpg';
import './App.css';


class App extends Component {
  state = {
    location: [0, 0],
    dir: 0,
    walls: [{height: 400, left: 242.5, top: 0}],
    width: 50,
    field: 500
  };

  animation(dir) {
    let left = this.state.location[0];
    let top = this.state.location[1];
    switch(dir){
      case 0:
        left = 0;
        break;
      case 1:
        left = this.state.walls[0].left - this.state.width;
        break;
      case 2:
        top = 0;
        break;
      case 3:
        top = this.state.field - this.state.width;
    }
    this.setState({
      location: [left, top],
    });
    console.log(this.state.location);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Labyrinth</h1>
          <nav className="mainNav">
            <ul>
              <li>Status</li>
              <li>Points</li>
              <li>Money</li>
            </ul>
          </nav>
        </header>
        <div className='container'>
          <section className="game">
            <img src={ball} className="ball"
                 style={{
                   transition: `margin 0.7s`,
                   margin: `${this.state.location[1]}px 0 0 ${this.state.location[0]}px`,
                 }}
                 alt="" width="50" height="50"/>
            <div className="wall-1"></div>
          </section>
          <button onClick={() => this.animation(0)}>Left</button>
          <button onClick={() => this.animation(1)}>Right</button>
          <button onClick={() => this.animation(2)}>Top</button>
          <button onClick={() => this.animation(3)}>Bottom</button>
        </div>
      </div>
    );
  }
}

export default App;
