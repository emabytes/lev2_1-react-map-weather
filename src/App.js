import React from 'react';
import './App.css';
import DayWeather from './DayWeather';
import weatherData from './data';
console.log(weatherData)

function App() {
  return (
    <div className="App">
      {weatherData.map((elem, i) =>
        <DayWeather
          key={i}
          day={elem.day}
          src={elem.src}
          highestTemp={elem.highestTemp}
          lowestTemp={elem.lowestTemp}
        />
      )}
    </div>
  );
}

export default App;
