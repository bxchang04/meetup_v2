import React, { Component } from 'react';
import { getSuggestions } from './api';
import { InfoAlert } from './Alert';
import {WarningAlert} from "./Alert";

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: [],
    infoText: '',
    warningText: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    if (!navigator.onLine) {
      this.setState({ warningText: 'You are currently offline, so no queries are possible.' });
    } else {
      this.setState({ warningText: ''});
    }
    getSuggestions(value).then(suggestions => {
      this.setState({ suggestions });

      if (value && suggestions.length === 0) {
        this.setState({
          infoText: 'We can not find the city you are looking for -- please try another city.',
        });
      } else {
        this.setState({
          infoText: '',
        });
      }
    });
  }

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon);
  }

  render() {
    return (
      <div className="CitySearch">
      <WarningAlert text={this.state.warningText} />
      <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {this.state.suggestions.map(item =>
            <li key={item.name_string} onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}>{item.name_string}</li>
          )}
        </ul>
        <InfoAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default CitySearch;
