import React, {Component} from 'react';
import StarWarsTitle from "./../images/Star-Wars-Rebellion-title.png";
import './../CSS/game_start.css';

export class Welcome extends Component {
  render() {
  return (
    <div className="space_background">
    <div>
      <img src={StarWarsTitle} alt="Star Wars Rebellion" className="game_title center"></img>
    </div>
    <div>
      <button className="center button_display">Start Game</button>
    </div>
    </div>
  );
  }
}
