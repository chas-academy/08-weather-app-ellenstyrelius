import React, { Component } from 'react';

import { apiKeyDarkSky, apiKeyBing, proxyUrl } from './Api';
import Header from './Header';
import Weather from './Weather';
import Today from './Today';
import ReloadButton from './ReloadButton';
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
    const placeDataUrl = `${proxyUrl}http://dev.virtualearth.net/REST/v1/Locations/${latitude},${longitude}?key=${apiKeyBing}`;
    fetch(placeDataUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentAddress: data.resourceSets[0].resources[0].address
        })
        if (this.state.weather) {
          this.setState({isLoading: false});
        }
      })
  }

  fetchWeatherData(currentPosition) {
    const { latitude, longitude } = currentPosition;
    const weatherDataUrl = `${proxyUrl}https://api.darksky.net/forecast/${apiKeyDarkSky}/${latitude},${longitude}?units=si`;
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
    this.setState({
      isLoading: true
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
    
    const { currentPosition, currentAddress, weather, hasError, isLoading, fallbackRome, tempIsCelsius } = this.state;
    
    return (
      <div className="App">
        <Header />


        {/* Loader should be own component */}
        <section className="loading">
          {(isLoading) &&
            <div className="loadingWeather">
              <h3>loading</h3>
            </div>
          }
        </section>
        <section className="geolocation">
          {(!currentPosition && !isLoading) &&
            <div className="error">
              <p>We couldn't find where you're at, maybe you blocked us? <span role="img" aria-label="flushed emoji">😳</span></p>
              <p>But hey! All roads lead to...</p>
            </div>
          }
          {(currentAddress && weather && !isLoading) ?
            <div className="position">
              <h2>{currentAddress.locality}, {currentAddress.countryRegion}</h2>
            </div>
          :
          (fallbackRome && weather && !isLoading) &&
            <div className="position">
              <h2>{currentAddress.locality}, {currentAddress.countryRegion}</h2>
            </div>
          }
        </section>      
        {(weather && !isLoading) &&
          <Today time={weather.currently.time}/>
        }
        <ReloadButton handleRefresh={this.handleRefresh} />
        <>
          {(!weather && hasError && !fallbackRome) && 
            <div className="error">
              <p>Sorry, something went wrong <span role="img" aria-label="robot face emoji">🤖</span></p>
              <p>Maybe try again in a couple of minutes?</p>
            </div>
          }
          {(weather && !isLoading) &&
            <Weather weather={weather} tempIsCelsius={tempIsCelsius} handleToggleUnit={this.handleToggleUnit} />
          }
        </>
        <Footer />
      </div>
    );
  }
}

export default App;
