//https://www.youtube.com/watch?v=UK0WlRXrfsI
//https://flaviocopes.com/react-show-different-component-on-click/
//https://stackoverflow.com/questions/48476400/how-to-render-different-view-when-onclick-button-in-reactjs
//https://reactnavigation.org/docs/en/navigating.html
//https://medium.com/better-programming/rendering-components-in-onclick-events-in-react-bc0d7b54e1cd
//https://www.w3schools.com/react/react_events.asp
import React, { Component } from 'react';
import './App.css'; //change styling in App.css


class App extends Component{

    clicked(){
        console.log("Button was clicked");
    }

    render() {
        return(
        <div>
              <h1>Warner Robbins Air Force Base Sortie Scheduler</h1>
              <button onClick={ this.clicked }>Generate New Calendar</button> <br></br>
              <button onClick={ this.clicked }>View Current Calendar</button>
         </div>
        )
    }
}

export default App;
