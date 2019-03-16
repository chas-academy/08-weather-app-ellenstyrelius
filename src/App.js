import React, { Component } from 'react';
import './App.css';

import apiKey from './ApiKey';

class App extends Component {
    state = {
      weather: null,
      location: null,
      isLoading: false
    }

  getUserLocation() {
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(position => {
        const location = position.coords;
        resolve(location);
          console.log('🐐: App -> getUserLocation -> location', location)
        this.setState({
          location: location
        });
      })
    });
  }

  fetchWeatherData() {
    const latitude = this.state.location.latitude;
    const longitude = this.state.location.longitude;
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const weatherDataUrl = `${proxyUrl}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`;
    fetch(weatherDataUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          weather: data
        });
      })
      .catch(error => console.log(error));
  }



  getUserLocationBasedWeather() {      
    const getWeather = async () => {
      await this.getUserLocation();
      this.fetchWeatherData();
    }
    getWeather();
  }

  componentDidMount() {
    // this.getUserLocation();
    this.getUserLocationBasedWeather();
  }

  render() {

		console.log('🐐: App -> render -> this.state', this.state)
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>rain or shine</h1>
          <h2>weather forecaster</h2>
        </header>
      </div>
    );
  }
}

export default App;
