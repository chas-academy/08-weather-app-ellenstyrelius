import React, { Component } from 'react';

import apiKey from './ApiKey';
import Header from './Header';
import Weather from './Weather';
import UnitButton from './UnitButton';
import Today from './Today';

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
      navigator.geolocation.getCurrentPosition(resolve, reject);
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

  async getUserLocationWeather() {    
    await this.getUserLocation()
    .then(position => {
      this.fetchWeatherData(position.coords);
      this.setState({
        location: position.coords
      });
    })
    .catch(() => {
      this.setState({
        hasError: true,
        isLoading: false,
        fallbackRome: {latitude: 41.9028, longitude: 12.4964}
      });
      this.fetchWeatherData(this.state.fallbackRome);
    })
  }

  componentDidMount() {
    this.getUserLocationWeather();
  }

  handleRefresh = () => {
    this.setState({
      isLoading: true
    });
    setTimeout(() => this.getUserLocationWeather(), 1000)
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
        <Header />
        <section className="loading">
          {(isLoading) &&
            <div className="loadingWeather">
              <h3>loading</h3>
            </div>
          }
        </section>
        {(weather && !isLoading) &&
          <UnitButton handleToggleUnit={this.handleToggleUnit} tempIsCelsius={tempIsCelsius}/>
        }
        <section className="geolocation">
          {(!location && !isLoading) &&
            <div className="error">
              <p>We couldn't find where you're at, maybe you blocked us? <span role="img" aria-label="flushed emoji">😳</span></p>
              <p>But hey! All roads lead to...</p>
            </div>
          }
          {(location && weather && !isLoading) ?
            <div className="position">
              <h2>{weather.timezone}</h2>
              {/* <p>lat: {location.latitude} - lon: {location.longitude}</p> */}
            </div>
          :
          (fallbackRome && weather && !isLoading) &&
            <div className="position">
              <h2>{weather.timezone}</h2>
            </div>
          }
        </section>      
        {(weather && !isLoading) &&
          <Today time={weather.currently.time}/>
        }
        <button className="refreshBtn" onClick={this.handleRefresh}>
            reload
        </button>
        <section className="weather">
          {(!weather && hasError) && 
            <div className="error">
              <p>Sorry, something went wrong <span role="img" aria-label="robot face emoji">🤖</span></p>
              <p>Maybe try again in a couple of minutes?</p>
            </div>
          }
          {(weather && !isLoading) &&
            <Weather weather={weather} tempIsCelsius={tempIsCelsius} />
          }
        </section>
      </div>
    );
  }
}

export default App;
