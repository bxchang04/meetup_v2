import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import {WarningAlert} from "./Alert";

class App extends Component {

  state = {
    events: [],
    page: null,
    defaultCity: '',
    lat: null,
    lon: null,
    warningText: ''
  }

  componentDidMount() {
    getEvents().then(response => this.setState({ events: response }));

    if (!navigator.onLine) {
      this.setState({warningText: 'Note: The app is offline; information shown may not be up to date.'});
    } else {
      this.setState({warningText: ''});
    };
    this.updateEvents(undefined, undefined, 32);
  };

  updateEvents = (lat, lon, page) => {
    if(lat && lon) {
      getEvents(lat, lon, this.state.page).then(response => this.setState({ events: response, lat, lon }));
    }
    else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({ events: response, page }));
    }
    else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({ events: response }));
    }
  }

  render() {
    return (
      <div className="App">
        <WarningAlert text={this.state.warningText} />
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.events.length} lat={this.state.lat} lon={this.state.lon} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
