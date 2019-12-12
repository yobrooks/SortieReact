import { Calendar, momentLocalizer } from 'react-big-calendar';
import React, { Component } from 'react';
import events from './events'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

const DragAndDropCalendar = withDragAndDrop(Calendar)
const localizer = momentLocalizer(moment);

class App extends Component {
    constructor(props) { 
      super(props);
      this.state = {
          events: events
        };
        this.moveEvent = this.moveEvent.bind(this);
        this.resizeEvent = this.resizeEvent.bind(this);
    }
    
    moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
      const { events } = this.state
  
      const idx = events.indexOf(event)
      let allDay = event.allDay
  
      if (!event.allDay && droppedOnAllDaySlot) {
        allDay = true
      } else if (event.allDay && !droppedOnAllDaySlot) {
        allDay = false
      }
  
      const updatedEvent = { ...event, start, end, allDay }
  
      const nextEvents = [...events]
      nextEvents.splice(idx, 1, updatedEvent)
  
      this.setState({
        events: nextEvents,
      })
  
      // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
    }
  
    resizeEvent = ({ event, start, end }) => {
      const { events } = this.state
  
      const nextEvents = events.map(existingEvent => {
        return existingEvent.id == event.id
          ? { ...existingEvent, start, end }
          : existingEvent
      })
  
      this.setState({
        events: nextEvents,
      })
  
    }
  
    render() {
      return (
        <div>
          <button>Options</button>
          <div style={{ height: '500pt'}}>
            <DragAndDropCalendar
              selectable
              onEventDrop = {this.moveEvent}
              resizableAccessor={() => true}
              onEventResize={this.resizeEvent}
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

export default App;