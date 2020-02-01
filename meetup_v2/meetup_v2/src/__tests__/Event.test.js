import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

import EventList from '../EventList';
import Event from '../Event';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('test that component is rendered', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('test that event wrapping div is rendered', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('test that event wrapping div just shows event__Overview', () => {
    expect(EventWrapper.find('.event').children()).toHaveLength(1);
  });

  test('test that event__Overview is rendered', () => {
    expect(EventWrapper.find('.event__Overview')).toHaveLength(1);
  });

  test('test that event__Overview children are rendered', () => {
    expect(EventWrapper.find('.event__Overview').children()).toHaveLength(3);
  });

  test('test that event__Details children are rendered', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.event__Details--description')).toHaveLength(1);
  });

  test('test that show/hide details button is rendered', () => {
    expect(EventWrapper.find('.event__Overview button')).toHaveLength(1);
  });

  test('click on button should show details', () => {
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find('.event__Overview button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('set mock eventdata as state', () => {
      EventWrapper.setState({
        event: { //need to remove quotes?
          "created": 1536239636000,
          "duration": 7200000,
          "id": "rvwdfqybcdbcb",
          "name": "Saturday 9-11 am Tennis at Newton South High School-Intermediate skill level &up",
          "rsvp_limit": 16,
          "date_in_series_pattern": false,
          "status": "upcoming",
          "time": 1580565600000,
          "local_date": "2020-02-01",
          "local_time": "09:00",
          "updated": 1536239636000,
          "utc_offset": -18000000,
          "waitlist_count": 0,
          "yes_rsvp_count": 1,
          "venue": {
          "id": 1082097,
          "name": "Newton South High School",
          "lat": 42.31231689453125,
          "lon": -71.18464660644531,
          "repinned": true,
          "address_1": "180 Brandeis Rd. ",
          "city": "Newton",
          "country": "us",
          "localized_country_name": "USA",
          "zip": "02459",
          "state": "MA"
          },
          "group": {
          "created": 1269228542000,
          "name": "Boston Tennis Players",
          "id": 1618259,
          "join_mode": "open",
          "lat": 42.369998931884766,
          "lon": -71.08999633789062,
          "urlname": "boston-tennis",
          "who": "Boston Tennis Players",
          "localized_location": "Cambridge, MA",
          "state": "MA",
          "country": "us",
          "region": "en_US",
          "timezone": "US/Eastern"
          },
          "link": "https://www.meetup.com/boston-tennis/events/rvwdfqybcdbcb/",
          "description": "<p>This Meetup is for players with intermediate skills and up.</p> <p>Weekly Saturday morning tennis at Newton South High School. Look for the regulars and say hello to people.</p> <p>The nets at Newton South have been put back up.</p> <p>I am continuing this meetup because of high interest in the Brookline meetup. People who live near Newton are welcome to come. Hope to see you guys there!</p> ",
          "how_to_find_us": "Ask anybody playing if they are there for the meetup. Look for regulars.",
          "visibility": "public",
          "member_pay_fee": false
        },
      });
      console.log(EventWrapper.state('event'));
      expect(EventWrapper.state('event').name).toBe('Saturday 9-11 am Tennis at Newton South High School-Intermediate skill level &up');
    });
  });
