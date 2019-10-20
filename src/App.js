import React, {Component} from 'react';
import ball from './photos/download.jpg';
import './App.css';


class App extends Component {
  state = {
    dir: 0,
  };

  animation(){
    console.log('animation');
    this.setState({
      dir: !this.state.dir,
    });
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
            <img src={ball} className={this.state.dir ? 'ball-right' : 'ball-left'} alt="" width="50" height="50"/>
          </section>
          <button onClick={() => this.animation()}>left</button>
          <button onClick={() => this.animation()}>Right</button>
        </div>
      </div>
    );
  }
}

export default App;
