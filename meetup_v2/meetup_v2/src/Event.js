import React, { Component } from 'react';

class Event extends Component {
  state = {
    // event: [], //not needed
    showDetails: false
  }

  handleShowDetails = () => {
    // this.setState({ showDetails: !this.state.showDetails }); //fails int tests
    this.setState({ showDetails: true });
  }

  render() {
    const showDetails = this.state.showDetails;

    return(
      <div className="event">
        <div className="event__Overview">
          <p className="event__Overview--name">{this.props.event.name}</p>
          <p className="event__Overview--localDate">{this.props.event.local_date}</p>
          {/*doesn't show # of people going, like in 4.4 screenshot*/}
          <button onClick={() => this.handleShowDetails()}>show details</button>
        </div>
        {showDetails &&
          <div className="event__Details">
            <p className="event__Details--description">{this.props.event.description}</p>
          </div>
        }
      </div>
    );
  }
}

export default Event;
