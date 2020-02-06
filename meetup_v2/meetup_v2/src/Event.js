import React, { Component } from 'react';

class Event extends Component {
  state = {
    expanded: false,
  }

  onDetailsButtonClicked = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  render() {
<<<<<<< HEAD
    const event = this.props.event;
    return (
      <div className="event"> {/*changed from Event*/}
        <p className="time">{event.local_time} - {event.local_date}</p>
        <p className="name">{event.name}</p>
        {event.group && event.group.name && <p className="group-name">Group: {event.group.name}</p>}
        <p className="going">{event.yes_rsvp_count} people are going</p>
        {this.state.expanded &&
          <div className="extra">
            {event.venue && event.venue.name &&
              <p className="address">
                {event.venue.name
                  + ', ' + event.venue.address_1
                  + ', ' + event.venue.city
                  + ', ' + event.venue.localized_country_name
                }
              </p>
            }
            <div className="description" dangerouslySetInnerHTML={{__html: event.description}} />
            <p className="visibility">{event.visibility}</p>
            <a className="link" href={event.link}>Event Link</a>
||||||| merged common ancestors
    const showDetails = this.state.showDetails;

    return(
      <div className="event">
        <div className="event__Overview">
          <p className="event__Overview--name">{this.props.event.name}</p>
          <p className="event__Overview--localDate">{this.props.event.local_date}</p>
          {/*doesn't show # of people going, like in 4.4 screenshot*/}
          {/*<button className="details-btn" onClick={() => this.handleShowDetails()}>show details</button>*/}
          <button onClick={() => this.handleShowDetails()}>show details</button>
        </div>
        {showDetails &&
          <div className="event__Details">
            <p className="event__Details--description">{this.props.event.description}</p>
=======
    const showDetails = this.state.showDetails;

    return(
      <div className="event">
        <div className="event__Overview">
          <p className="event__Overview--name">{this.props.event.name}</p>
          <p className="event__Overview--localDate">{this.props.event.local_date}</p>
          <button className="details-btn" onClick={() => this.handleShowDetails()}>show details</button>
          {/*<button onClick={() => this.handleShowDetails()}>show details</button>*/}
        </div>
        {showDetails &&
          <div className="event__Details">
            <p className="event__Details--description">{this.props.event.description}</p>
>>>>>>> 4.5
          </div>
        }
        <button onClick={this.onDetailsButtonClicked}>Details</button>
        {/*<button className="details-btn" onClick={this.onDetailsButtonClicked}>Details</button>*/}
      </div>
    );
  }
}

export default Event;
