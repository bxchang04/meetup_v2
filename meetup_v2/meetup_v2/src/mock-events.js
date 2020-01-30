//online converter is down - https://json-to-js.com/. And I don't know how to run the CLI version.

const mockEvents = {
"city": {
  "id": 2459,
  "city": "Newton Center",
  "lat": 42.31,
  "lon": -71.19,
  "state": "MA",
  "country": "us",
  "zip": "02459",
  "member_count": 417
},
"events": [
  {
    "created": 1521736237000,
    "duration": 5400000,
    "id": "kvmmmpybcdbgb",
    "name": "Join us for Meditation",
    "date_in_series_pattern": false,
    "status": "upcoming",
    "time": 1580860800000,
    "local_date": "2020-02-04",
    "local_time": "19:00",
    "updated": 1521736237000,
    "utc_offset": -18000000,
    "waitlist_count": 0,
    "yes_rsvp_count": 4,
      "venue": {
      "id": 918727,
      "name": "Cambridge Friends Meeting House",
      "lat": 42.37584686279297,
      "lon": -71.12735748291016,
      "repinned": false,
      "address_1": "5 Longfellow Park",
      "city": "Cambridge",
      "country": "us",
      "localized_country_name": "USA",
      "zip": "02138",
      "state": "MA"
      },
    }
  ]
}

const mockEventsJS = JSON.parse(mockEvents);

export {mockEvents, mockEventsJS };
