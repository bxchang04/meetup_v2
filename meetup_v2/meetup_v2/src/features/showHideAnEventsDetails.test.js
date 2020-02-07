//changed E to e
//details-btn in App.js has been removed

import React from 'react';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, and, when, then }) => {
    given('the list of events has been loaded', () => {

    });

    let AppWrapper;

    and('app loaded', () => {
      AppWrapper = mount(<App />);
    })

    when('the user did not click the „Show Details“ yet', ()=> {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockEvents.events.length);
    });

    then('the event elements are collapsed', ()=> {
      expect(AppWrapper.find('showDetails')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, and, when, then }) => {
    let AppWrapper;

    given('app loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('the list of events has been loaded', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockEvents.events.length);
    });

    when('the user clicks Show details button of the event', () => {
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });

    then('the event description section expands to reveal all the event details', () => {
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    let AppWrapper;

    given('the app is loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('And the user expanded event\'s details', () => {
      AppWrapper.update();
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(1);
    });

    when('the user clicks Hide details button', () => {
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });

    then('Then the event description collapses', () => {
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
    });
  });

});
