//study https://github.com/envincebal/meetup/blob/master/src/Event.js

import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell, Line} from 'recharts';

class Event extends Component {
  state = {
    expanded: false,
  }

  handleShowDetails = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

<<<<<<< HEAD
  getEventData = () => {
    const {event} = this.props;
    const spotsTaken = event.yes_rsvp_count;
    const spotsFree = event.rsvp_limit - spotsTaken;

    return (
      [
        {name: "Attending", value: spotsTaken},
        {name: "Spots Open", value: spotsFree}
      ]
    )
  }

  render() {
    const {event} = this.props;
    let colors = ["#e34542", "#43e06d"]
    return (
      <div className="event">
        <p>{event.local_time + " - " + event.local_date}</p>
        <p className="event-name">{event.name}</p>
        <p><span className="label">Group:</span> {event.group && event.group.name}</p>
        <p className="event-count"><span className="label">RSVP: </span>{event.yes_rsvp_count} people are going</p>
        {event.venue &&
          <p className="event-address"><span className="label">Address: </span>{ event.venue.address_1}, {event.venue.city}, {event.group.state ? event.group.state : event.venue.localized_country_name}</p>
||||||| merged common ancestors
  render() {
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
          </div>
=======
  render() {
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
            {/*<div className="description" dangerouslySetInnerHTML={{__html: event.description}} />*/}
            <p className="visibility">{event.visibility}</p>
            <a className="link" href={event.link}>Event Link</a>
            <p className="event__Details--description">{this.props.event.description}</p>
          </div>
>>>>>>> master
        }
<<<<<<< HEAD
        <p className="event-venue"><span className="label">Venue: </span>{event.venue && event.venue.name}</p>
        {this.state.showDetails && (
          <div className="event-details">
            <hr/>
            {this.props.event.rsvp_limit ? (
              <ResponsiveContainer height={250}>
              <PieChart width={200} height={200}>
                <Pie isAnimationActive={false} data={this.getEventData()} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                  {
                    this.getEventData().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]}/>
                    ))
                  }
                </Pie>
                <Tooltip />
                <Legend verticalAlign="top" height={30}>
                  <Line name="Attending" type="monotone" dataKey="spotsTaken" stroke="#8884d8" />
                  <Line name="Spots Open" type="monotone" dataKey="spotsFree" stroke="#82ca9d" />
                </Legend>
              </PieChart>
            </ResponsiveContainer>
            ):(
              ""
            )
            }

            <p className="event-description" dangerouslySetInnerHTML={{__html: event.description}}></p>
            <a className="event-link" href={event.link}>Event Page</a>
          </div>
        )}
        <button onClick={this.handleShowDetails} className="details-btn">Details</button>
||||||| merged common ancestors
=======
        <button className="details-btn" onClick={this.handleShowDetails}>Details</button>
>>>>>>> master
      </div>
    );
  }
}

export default Event;
