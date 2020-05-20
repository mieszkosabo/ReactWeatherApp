# Final assignment

Create an application that connects to [OpenWearherMap API](https://openweathermap.org/api) and allows for forecasts search. Requirements:
  - Don't use external design systems - create styled-components by yourself. Aesthetics won't be rated, only components decomposition. You can even use existing CSS (e.g., from bootstrap or material) and copy it to your components. The website doesn't have to be responsive or support mobile in any way
  - Forecast search options:
      - search forecast by city, autocomplete city name
        * [supported cities list](http://bulk.openweathermap.org/sample/city.list.json.gz) - you can embed it as a website asset
        * [react-autocomplete](https://github.com/reactjs/react-autocomplete) (you can use the library of your choice)
      - forecast for [user's geolocation](https://www.w3schools.com/html/html5_geolocation.asp) (we assume that the user always accepts geolocalization access query)
      - switch for choosing forecast option type: 5 day / 3 hour or 16 day
  - results should be cached until page refresh - if a user queries for the same parameters, data should be taken from redux instead of API call
  - show loader while the search is in progress, you can use an [external library](https://github.com/mhnpd/react-loader-spinner)
  - display weather-related icon. [Flaticon](https://www.flaticon.com/) is a great free [SVG](https://css-tricks.com/using-svg/) icons source
  - display information if the weather will be nice. Nice weather attributes:
      * no rainy days
      * the average temperature between 18 and 25 degrees
      * the temperature never drops below 15 or raises above 30 degrees
      * "Nice" weather has all these attributes, "passable" weather has 2 out of 3 attributes and "not nice" weather has 1 or 0 attributes
  - display gif depicting weather. Use [tenor gif API](https://tenor.com/gifapi/documentation#quickstart) for gif URL search. Use the most popular "description" field value as keywords, e.g. [clear sky](https://api.tenor.com/v1/search?q=clear%20sky)
  - switch gif every 30 seconds
  - enable light and dark mode

### Evaluation:

You may get 50 points in total. Rates:
  - 45-50 points = 5
  - 35-44 points = 4
  - 25-34 points = 3
  - 0-24 points = 2

Points values:
  - [5 pts] redux structure
  - [5 pts] epics and selectors usage
  - [5 pts] code structure: clear containers and components distinction
  - [3 pts] code style
  - [5 pts] search by city
  - [5 pts] search by user geolocation
  - [2 pts] 5 day / 3 hour or 16 day switch
  - [3 pts] search results caching
  - [1 pt] loader
  - [3 pts] nice weather classification
  - [5 pts] gif support
  - [3 pts] gif switching
  - [5 pts] light/dark mode