import React, { Component } from 'react';
import './App.css';

import apiKey from './ApiKey';
import Weather from './Weather';

class App extends Component {
    state = {
      weather: null,
      location: null,
      isLoading: true,
      hasError: false,
      tempInCelsius: true
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

  refresh = () => {
    this.getUserLocationBasedWeather();
  }

  toggleUnit = () => {
    this.setState({
      tempInCelsius: !this.state.tempInCelsius
    })
    console.log('🐐: App -> toggleUnit -> this.state.tempInCelsius', this.state.tempInCelsius)
  }

  render() {

    console.log('🐐: App -> render -> this.state', this.state)
    
    const { location, weather, hasError, isLoading, tempInCelsius } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>rain or shine</h1>
          <h2>weather forecaster</h2>
        </header>
        <section className="geolocation">
          {(!weather && isLoading) &&
            <div className="loadingWeather">
              <h3>loading</h3>
            </div>
          }
          {(!location && hasError) &&
            <div className="error">
              <p>sorry, we couldn't find where you're at <span role="img" aria-label="robot face emoji">🤖</span></p>
            </div>
          }
          {(location && weather) &&
            <div className="position">
              <h2>{weather.timezone}</h2>
              <p>lat: {location.latitude} - lon: {location.longitude}</p>
            </div>
          }
        </section>
        {weather &&
          <section className="buttons">
            <button className="unitBtn" onClick={this.toggleUnit}>
              {tempInCelsius ? 'fahrenheit' : 'celsius'}
            </button>
            <button className="refreshBtn" onClick={this.refresh}>
              reload
            </button>
          </section>
        }
        <section className="weather">
          {(!weather && hasError) && 
            <div className="error">
              <p>sorry, we weren't able to get a weather forecast <span role="img" aria-label="robot face emoji">🤖</span></p>
              <p>maybe try again in a couple of minutes?</p>
            </div>
          }
          {weather &&
            <Weather weather={weather} celsius={tempInCelsius}/>
          }
        </section>
      </div>
    );
  }
}

export default App;
