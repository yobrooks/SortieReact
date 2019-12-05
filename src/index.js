import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import events from './components/events'
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class App extends Component {
  constructor() {
    super();
    //const now = new Date();
    //const events=myevents;
    this.state = {
        name: 'React',
        events
      };
      
  }
  

  render() {
    return (
      <div>
        <button>Options</button>
        <div style={{ height: '500pt'}}>
          <Calendar
          //function to change the styles of the events
            events = {this.state.events}
                        eventPropGetter={event => { 
                let newStyle = {
                    background: event.squad,
                    color: 'black',
                    borderRadius: "5px",
                    border: "none" 
                };
                return { style:  newStyle  }; 
            }
            } 
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


