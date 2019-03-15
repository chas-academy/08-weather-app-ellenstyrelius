import React, { Component } from 'react';
import './App.css';

import apiKey from './ApiKey';

const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
const weatherDataUrl = `${proxyUrl}https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`;

class App extends Component {
    state = {
      weather: null,
      location: null
    }

  getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      const location = position.coords;
			console.log('🐐: App -> getLocation -> location', location)
      this.setState({
        location: location
      });
    });
  }

  fetchWeatherData() {
    fetch(weatherDataUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          weather: res
        });
      })
      .catch(error => console.log(error))
  }
  

  componentDidMount() {
    this.getLocation();
    this.fetchWeatherData();
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
