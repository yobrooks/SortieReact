import React, { Component } from 'react';



class App extends Component{

    clicked(){
        console.log("Button was clicked");
    }

    render() {
        return(
        <div>
              <h1>Warner Robbins Air Force Base Sortie Scheduler</h1>
              <button onClick={ this.clicked }>Generate New Calendar</button>
              <button onClick={ this.clicked }>View Current Calendar</button>
         </div>
        )
    }
}

export default App;
