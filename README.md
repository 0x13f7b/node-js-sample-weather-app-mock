# WeatherApp API

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `node app.js` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Responses

http://localhost:8080/weather?q=london - Location Found

Sample Response:
200
``
{"request":{"type":"City","query":"London, United Kingdom","language":"en","unit":"m"},"location":{"name":"London","country":"United Kingdom","region":"City of London, Greater London","lat":"51.517","lon":"-0.106","timezone_id":"Europe/London","localtime":"2022-07-29 13:18","localtime_epoch":1659100680,"utc_offset":"1.0"},"current":{"observation_time":"12:18 PM","temperature":25,"weather_code":113,"weather_descriptions":["Sunny"],"wind_speed":4,"wind_degree":16,"wind_dir":"NNE","pressure":1018,"precip":0,"humidity":36,"cloudcover":0,"feelslike":25,"uv_index":7,"visibility":10,"is_day":"yes"}}
``

http://localhost:8080/weather?q=london - Location NOT FOUND

Sample Response:
404
``
{"err":"Location Not found"}
``

http://localhost:8080/weather - No location supplied

Sample Response:
400
``
{"err":"Need to supply a location"}
``
