import React, { Component } from 'react';
import './App.css';

import apiKey from './ApiKey';
import Weather from './Weather';
import UnitButton from './UnitButton';

class App extends Component {
    state = {
      weather: null,
      location: null,
      isLoading: true,
      hasError: false,
      fallbackRome: null,
      tempIsCelsius: true
    }

  getUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => 
        resolve(
          this.setState({
            location: position.coords
            }),
            this.fetchWeatherData(this.state.location)
        ), () => 
        reject(
          this.setState({
            hasError: true,
            isLoading: false,
            fallbackRome: {latitude: 41.9028, longitude: 12.4964},
          }),
          this.fetchWeatherData(this.state.fallbackRome)
        )
      );
    })
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
          hasError: false,
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

  componentDidMount() {
    this.getUserLocation();
  }

  handleRefresh = () => {
    this.getUserLocationWeather();
  }

  handleToggleUnit = () => {
    this.setState({
      tempIsCelsius: !this.state.tempIsCelsius
    })
  }

  render() {
    console.log('🐐: App -> render -> this.state', this.state)
    
    const { location, weather, hasError, isLoading, fallbackRome, tempIsCelsius } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>rain or shine</h1>
          <h2>weather forecaster</h2>
        </header>
        <section className="loading">
          {(isLoading) &&
            <div className="loadingWeather">
              <h3>loading</h3>
            </div>
          }
        </section>
        <section className="geolocation">
          {(!location && !isLoading) &&
            <div className="error">
              <p>we couldn't find where you're at, maybe you blocked us? <span role="img" aria-label="flushed emoji">😳</span></p>
            </div>
          }
          {(location && weather) ?
            <div className="position">
              <h2>{weather.timezone}</h2>
              <p>lat: {location.latitude} - lon: {location.longitude}</p>
            </div>
          :
          (fallbackRome && weather) &&
            <div className="position">
              <h2>{weather.timezone}</h2>
            </div>
          }
        </section>
        {!isLoading &&
          <section className="refresh">
            <button className="refreshBtn" onClick={this.handleRefresh}>
                reload
            </button>
          </section>
        }
        {weather &&
          <section className="tempUnitButton">
            <UnitButton handleToggleUnit={this.handleToggleUnit} tempIsCelsius={tempIsCelsius}/>
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
            <Weather weather={weather} tempIsCelsius={tempIsCelsius} />
          }
        </section>
      </div>
    );
  }
}

export default App;
