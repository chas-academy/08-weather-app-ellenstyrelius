import React, { Component } from 'react';
import './App.css';

import apiKey from './ApiKey';
import Weather from './Weather';

class App extends Component {
    state = {
      weather: null,
      location: null,
      isLoading: true,
      hasError: false
    }

  getUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        if (position) {
        resolve(position.coords);
        } else {
          reject(
            this.setState({hasError: true})
          );
        }
      })
    });
  }

  fetchWeatherData(location) {
    const { latitude, longitude } = location;
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const weatherDataUrl = `${proxyUrl}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?units=si`;
    fetch(weatherDataUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          weather: data,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          hasError: true,
          isLoading: false
        })
        console.log('🐐: App -> fetchWeatherData -> error', error)
      });
  }

  async getUserLocationBasedWeather() {      
      const location = await this.getUserLocation();
      this.setState({
        location: location
      });
      this.fetchWeatherData(location);
  }

  componentDidMount() {
    this.getUserLocationBasedWeather();
  }

  render() {

    console.log('🐐: App -> render -> this.state', this.state)
    
    const { location, weather, hasError, isLoading } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>rain or shine</h1>
          <h2>weather forecaster</h2>
        </header>
        <section className="geolocation">
          {(!location && !weather && isLoading) &&
            <div className="position">
              <h3 className="loadingPosition">looking for your location</h3>
            </div>
          }
          {(!location && hasError) &&
            <div className="position">
              <p className="error">sry, couldn't find you</p>
            </div>
          }
          {(location && weather) &&
            <div className="position">
              <h2>{weather.timezone}</h2>
              <p>lat: {location.latitude} - lon: {location.longitude}</p>
            </div>
          }
        </section>
        <section className="weather">
          {(!weather && isLoading) &&
            <div className="noWeather">
              <p>loading weather...</p>
            </div>
          }
          {(!weather && hasError) && 
            <div className="noWeather">
              <p className="error">something went wrong - we can't get You a forecast</p>
            </div>
          }
          {weather &&
            <Weather weather={weather} />
          }
        </section>
      </div>
    );
  }
}

export default App;
