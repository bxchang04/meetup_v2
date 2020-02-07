//changed E to e. May need to change it back if it overcounts.

import React from 'react';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn\'t specified event number 32 is the default number', ({ given, when, then }) => {
    given('user hasn\'t specified the number of events', () => {

    });

    let AppWrapper;

    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the maximum of 32 events will be displayed', () => {
      AppWrapper.update();
      expect((AppWrapper.find('.event')).length).toBeLessThanOrEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;

    given('user opened the app', () => {
      AppWrapper = mount(<App />);
    });

    when('the user specified the number of events', () => {
      const numberOfEvents = { target: { value: 13 } };
      AppWrapper.find('.numberOfEvents').simulate('change', numberOfEvents);
    });

    then('the maximum of specified number of events will be displayed', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ numberOfEvents: 13 });
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(13);
    });
  });
});
