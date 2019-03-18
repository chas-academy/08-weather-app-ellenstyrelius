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
    const weatherDataUrl = `${proxyUrl}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`;
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
          hasError: true
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
    
    const { location, weather, hasError } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>rain or shine</h1>
          <h2>weather forecaster</h2>
        </header>  
        {(location && weather) ? (
          <div className="position">
            <h2>{weather.timezone}</h2>
          </div>
        ) : (!location && hasError) ? (
          <div className="position">
            <p>sry, couldn't find you</p>
          </div>
        ) : (
          <div className="position">
            <p>looking for your location</p>
          </div>
        )}
        {weather ? (
          <Weather summary={'Light rain'} temp={6} humidity={0.8} wind={5.6}/>
        ) : (
          <div>
            <p>loading weather...</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
