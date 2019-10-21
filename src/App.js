import React, {Component} from 'react';
import ball from './photos/soccerBall.png';
import './App.css';
import uniqid from 'uniqid';
import coin from './photos/coin.png';
import gold from './photos/gold.png';



class App extends Component {
  state = {
    location: [0, 435],
    dir: 0,
    vertical_walls: [{height: 420, left: 0, top: 0},{height: 205, left: 65, top: 80},{height: 70, left: 115, top: 350}, {height: 50, left: 250, top: 15}, {height: 70, left: 250, top: 215}, {height: 50, left: 335, top: 300}, {height: 120, left: 400, top: 80}, {height: 70, left: 420, top: 350}, {height: 435, left: 485, top: 65}],//, {height: 400, left: 200, top: 0}, {height: 100, left: 300, top: 50}, {height: 340, left: 350, top: 50}],
    horizontal_walls: [{size: 485, left: 15, top: 0}, {size: 135, left: 65, top: 65}, {size: 165, left: 250, top: 65},  {size: 165, left: 250, top: 200},  {size: 200, left: 65, top: 285},  {size: 150, left: 335, top: 285},  {size: 150, left: 200, top: 350},  {size: 435, left: 0, top: 420},  {size: 485, left: 0, top: 485}],
    coins: [{left: 435, top: 435},{left: 15, top: 80},{left: 350, top: 150}, {left: 265, top: 15}],
    gold:[{left: 200, top: 235}],
    width: 50,
    widthOfWalls: 15,
  };

  isThereAWall(dir) {
    let theNearestWall;
    let vertical_walls = [...this.state.vertical_walls];
    let horizontal_walls = [...this.state.horizontal_walls];
    if (dir < 2) {   //left and right
      let isThereAnyObstacle = vertical_walls.filter(wall => wall.top + wall.height <= this.state.location[1] || wall.top >= this.state.location[1] + this.state.width);  // can an object go straight to the border
      if (isThereAnyObstacle.length === vertical_walls.length) return null;// if nothing gets in the ball's way than return null;
      vertical_walls = vertical_walls.filter(el => !isThereAnyObstacle.includes(el));
      theNearestWall = vertical_walls.reduce((acc, cur) => Math.pow((cur.left - this.state.location[0]), 2) < Math.pow((acc.left - this.state.location[0]), 2) ? cur : acc);
      if (dir === 0) {  // LEFT LEFT LEFT
        if (theNearestWall.left >= this.state.location[0]) {
          if (vertical_walls.indexOf(theNearestWall) === 0) return null;
          theNearestWall = vertical_walls[vertical_walls.indexOf(theNearestWall) - 1];
        }
      } else { // RIGHT RIGHT RIGHT
        if (theNearestWall.left <= this.state.location[0]) {
          if (vertical_walls.indexOf(theNearestWall) === vertical_walls.length - 1) return null;
          theNearestWall = vertical_walls[vertical_walls.indexOf(theNearestWall) + 1];
        }
      }
    } else {  //top and bottom
      let isThereAnyObstacle = horizontal_walls.filter(wall => wall.left + wall.size <= this.state.location[0] || wall.left >= this.state.location[0] + this.state.width);  // can an object go straight to the border
      if (isThereAnyObstacle.length === horizontal_walls.length) return null;// if nothing gets in the ball's way than return null;
      horizontal_walls = horizontal_walls.filter(el => !isThereAnyObstacle.includes(el));
      theNearestWall = horizontal_walls.reduce((acc, cur) => Math.pow((cur.top - this.state.location[1]), 2) < Math.pow((acc.top - this.state.location[1]), 2) ? cur : acc);
      if (dir === 2) {  // TOP TOP TOP
        if (theNearestWall.top >= this.state.location[1]) {
          if (horizontal_walls.indexOf(theNearestWall) === 0) return null;
          theNearestWall = horizontal_walls[horizontal_walls.indexOf(theNearestWall) - 1];
          console.log(theNearestWall);
        }
      } else { // BOTTOM BOTTOM BOTTOM
        if (theNearestWall.top <= this.state.location[1]) {
          if (horizontal_walls.indexOf(theNearestWall) === horizontal_walls.length - 1) return null;
          theNearestWall = horizontal_walls[horizontal_walls.indexOf(theNearestWall) + 1];
        }
      }
    }
    return theNearestWall;
  }

  money(left, top, dir){
    if(dir < 2){

    } else {

    }
  }

animation(dir)
{
  let left = this.state.location[0];
  let top = this.state.location[1];
  const wall = this.isThereAWall(dir);
  console.log(wall, "WALL");
  switch (dir) {
    case 0:
      wall === null ? left = 0 : left = wall.left + this.state.widthOfWalls;
      break;
    case 1:
      wall === null ? left = 450 : left = wall.left - this.state.width;
      break;
    case 2:
      wall === null ? top = 0 : top = wall.top + this.state.widthOfWalls;
      break;
    case 3:
      wall === null ? top = 450 : top = wall.top - this.state.width;
  }
  this.money(left, top, dir);
  this.setState({
    location: [left, top],
  });
}

render()
{
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
          {this.state.vertical_walls.map(el => <div key={uniqid()} className="wall" style={{margin: `${el.top}px 0 0 ${el.left}px`,
                                                    width: this.state.widthOfWalls,height: el.height}}></div> )}
          {this.state.horizontal_walls.map(el => <div key={uniqid()} className="wall" style={{margin: `${el.top}px 0 0 ${el.left}px`,
            width: el.size,height: this.state.widthOfWalls}}></div> )}
          {this.state.coins.map(el => <img src={coin} key={uniqid()} className="coin" style={{margin: `${el.top}px 0 0 ${el.left}px`, width: 50, height: 50}}></img>)}
          <img src={gold} className="gold" style={{margin: `${this.state.gold[0].top}px 0 0 ${this.state.gold[0].left}px`}} alt=""/>
        </section>
        <div className="buttons">
          <button onClick={() => this.animation(0)}>Left</button>
          <button onClick={() => this.animation(1)}>Right</button>
          <button onClick={() => this.animation(2)}>Top</button>
          <button onClick={() => this.animation(3)}>Bottom</button>
        </div>
      </div>
    </div>
  );
}
}

export default App;
