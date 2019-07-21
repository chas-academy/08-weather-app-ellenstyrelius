import React, { Component } from 'react';

import proxyUrl from './utils/proxyUrl';
import Header from './Header';
import WeatherButtons from './WeatherButtons';
import Loader from './Loader';
import GeoLocation from './GeoLocation';
import Today from './Today';
import Weather from './Weather';
import Footer from './Footer';

class App extends Component {
  state = {
    weather: null,
    currentPosition: null,
    currentAddress: null,
    isLoading: true,
    hasError: false,
    fallbackRome: null,
    tempIsCelsius: true
  }

  fetchUserAddress(currentPosition) {
    const { latitude, longitude } = currentPosition;
    const placeDataUrl = `http://dev.virtualearth.net/REST/v1/Locations/${latitude},${longitude}?key=${process.env.REACT_APP_BING_API}`;
    fetch(placeDataUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentAddress: data.resourceSets[0].resources[0].address
        });
        if (this.state.weather) {
          this.setState({isLoading: false});
        }
      })
  }

  fetchWeatherData(currentPosition) {
    const { latitude, longitude } = currentPosition;
    const weatherDataUrl = `${proxyUrl}https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_API}/${latitude},${longitude}?units=si`;
    fetch(weatherDataUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          weather: data,
          hasError: false,
        });
        if (this.state.currentAddress) {
          this.setState({isLoading: false});
        }
      })
      .catch(error => {
        this.setState({
          hasError: true,
          isLoading: false
        })
        console.log('🐐: App -> fetchWeatherData -> error', error)
      });
  }

  getUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async getUserData() {    
    await this.getUserLocation()
      .then(position => {
        this.fetchUserAddress(position.coords);
        this.fetchWeatherData(position.coords);
        this.setState({
          currentPosition: position.coords
        });
      })
      .catch(() => {
        this.setState({
          hasError: true,
          fallbackRome: {latitude: 41.9028, longitude: 12.4964}
        });
        this.fetchUserAddress(this.state.fallbackRome);
        this.fetchWeatherData(this.state.fallbackRome);
      })
  }

  componentDidMount() {
    this.getUserData();
  }

  handleRefresh = () => {
    window.scrollTo(0, 0);
    this.setState({
      isLoading: true,
      fallbackRome: null
    });
    setTimeout(() => this.getUserData(), 1000);
  }

  handleToggleUnit = () => {
    this.setState({
      tempIsCelsius: !this.state.tempIsCelsius
    })
  }

  render() {
    console.log('🐐: App -> render -> this.state', this.state)
    
    const { currentAddress, weather, hasError, isLoading, fallbackRome, tempIsCelsius } = this.state;
    
    return (
      <div className="App">
        <Header />
        <WeatherButtons 
          handleRefresh={this.handleRefresh}
          handleToggleUnit={this.handleToggleUnit}
          tempIsCelsius={tempIsCelsius} 
        />
        {isLoading &&
          <Loader />
        }
        {(currentAddress && weather && !isLoading) &&
          <>
            <GeoLocation {...{currentAddress, fallbackRome, weather, isLoading}}/>
            <Today time={weather.currently.time}/>
          </>
        }
        <>
          {(!weather && hasError && !fallbackRome) && 
            <div className="error">
              <p>Sorry, something went wrong <span role="img" aria-label="robot face emoji">🤖</span></p>
              <p>Maybe try again in a couple of minutes?</p>
            </div>
          }
          {(weather && !isLoading) &&
            <Weather 
              weather={weather} 
              tempIsCelsius={tempIsCelsius} 
            />
          }
        </>
        <Footer />
      </div>
    );
  }
}

export default App;
