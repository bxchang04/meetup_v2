import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, null, value);

    if (value < 1) {
      this.setState({
        infoText: 'Number should be at least 1',
      });
    } else {
      this.setState({
        infoText: '',
      });
    }
  }


  render() {
    return(
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          id="numberOfEvents__input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;
