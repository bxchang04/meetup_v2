import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';

import App from '../App';

import NumberOfEvents from '../NumberOfEvents';
import { mockEvents } from '../mock-events'

const feature = loadFeature('./src/__features__/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn\'t specified event number 32 is the default number', ({ given, when, then }) => {
    given('user hasn\'t specified the number of events', () => { });
    let AppWrapper;

    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the maximum of 32 events will be displayed', () => {
      AppWrapper.update();
      expect((AppWrapper.find('.Event')).length).toBeLessThanOrEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('user opened the app', () => {
      AppWrapper = mount(<App />);
    });

    when('the user specified the number of events', () => {
      const eventNumber = { target: { value: 5 } };
      AppWrapper.find('.NumberOfEvents').simulate('change', eventNumber);
    });

    then('the maximum of specified number of events will be displayed', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('number')).toBe(32);
    });
  });
});
