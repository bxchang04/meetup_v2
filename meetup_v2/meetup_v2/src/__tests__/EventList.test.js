import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList'; //missing in exercise
import Event from '../Event';

describe('<App /> component', () => {
  test('render correct number of events', () => {
      const EventListWrapper = shallow(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}/>);
      expect(EventListWrapper.find(Event)).toHaveLength(4);
    });
});
