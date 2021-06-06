import React, {
    Component
} from 'react';
import './../../CSS/sectors_and_planets.css';

export class Sector extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount()
  {
      console.log("Hey, you are in a sector component");
      //TODO make backend and database to easily import planets and sectors dynamically
  }

  toCamelCase(inputArray) {
    let result = "";
    for(let i = 0 , len = inputArray.length; i < len; i++) {
      let currentStr = inputArray[i];
      let tempStr = currentStr.toLowerCase();
        // convert first letter to upper case (the word is in lowercase)
          tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
       result +=tempStr + " ";
    }
    return result;
}

  transformIDToName(id) {
    var planetName = id.split('_');
    planetName = this.toCamelCase(planetName);
    return planetName;
  }

    render() {
      return (
        <div id={this.props.id} className="planet">
          <button className="planetImageButton"><img width="45.0" height="45.0" src={this.props.planetImageURL} alt={this.props.id} onClick={this.myFunction} /></button>
          <div className="planetName">
            {this.transformIDToName(this.props.id)}
          </div>
        </div>
      );
    }
  }
