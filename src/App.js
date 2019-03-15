import React, { Component } from 'react';
import './App.css';

import apiKey from './ApiKey';

const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
const weatherDataUrl = `${proxyUrl}https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    }
  }

  fetchWeatherData() {
    return fetch(weatherDataUrl)
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(res => {
				console.log('🐐: App -> fetchWeatherData -> res', res)
        return res;
      })
      .catch(error => console.log(error))
  }
  

  componentDidMount() {
    this.fetchWeatherData();
  }

  render() {


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
