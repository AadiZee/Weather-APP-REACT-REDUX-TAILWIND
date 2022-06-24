A responsive weather webapp created using REACT Typescript, REDUX Typescript, TAILWIND CSS, OpenWeatherAPI's

At start there is a NAVBAR and SEARCH BAR where user can enter CITY name or ZIP code. User can enter one of both.

The search bar then checks if the input is in Number or Text and based on the inputs sends the search term to REDUX which calls specific OpenWeatherAPI's to get CURRENT weather data and WEEKLY forecast.

The data from redux is then fetched by CurrentForecast and WeeklyForecast components and the relevent information is displayed on screen.

Tailwind handles all the frontend designing of the webapp. We could also use libraries like MUI, Semantic or AntD to perform these frontend designing's.

There is also a component where user can input Celsius or Fahrenheit. If user enters in the Celsius field, Fahrenheit is calculated and vice versa.

There is also a component where a map of the entered location is to be displayed and layers of different weather conditions will be shown on top of the map layer.

But due to time constraints and some other problems this module is just a mockup and currently not functional.
