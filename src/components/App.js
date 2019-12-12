//THIS FIRST  https://stackoverflow.com/questions/46424589/toggle-component-in-react-on-button-click
//https://stackoverflow.com/questions/40791996/changing-a-component-in-reactjs-upon-clicking-a-button
//https://stackoverflow.com/questions/46775233/how-to-render-a-component-on-button-click-in-react
//SETSTATE: https://css-tricks.com/understanding-react-setstate/

import React, { Component } from 'react';
import './App.css'; //change styling in App.css
import Car from './test';
import robinsLogo from './robinsLogo.PNG';
const components = {
    "Test": <Car />
}

class App extends Component{
    constructor(props){
        super(props);
    }
    clicked(){
            alert("Go to new page/component");
        }

    render() {
        return(
        <div className = "mySection" >
              <h1>Warner Robins Air Force Base Sortie Scheduler</h1>
              <img src={robinsLogo} alt="Logo" />
              <button onClick={ this.clicked }>Generate New Calendar</button> <br></br>
              <button onClick={ this.clicked }>View Current Calendar</button>
         </div>
        );
    }
}

export default App;
