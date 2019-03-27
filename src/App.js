import React, { Component } from "react";
import "./App.scss";
import Titles from "./components/titles.js";
import Form from "./components/form.js";
import Weather from "./components/weather.js";
import axios from "axios";

const API_KEY = "d4e4b782f9f737c521a59c3e28672e76";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Weather",
      icon: "01d",
      description: "Enter zip-code",
      temp: 32,
      minTemperature: 0,
      maxTemperature: 0,
      error: undefined,
      isLoading: false
    };
  }

  getWeather = event => {
    this.setState({
      isLoading: true
    });
    const zip_code = event.target.elements.zipcode.value;
    event.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip_code},us&appid=${API_KEY}&units=imperial`
      )
      .then(response => {
        let data = response.data;
        this.setState({
          name: data.name,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          temp: data.main.temp,
          minTemperature: data.main.temp_min,
          maxTemperature: data.main.temp_max,
          error: undefined,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          isLoading: false
        });
      });
  };

  render() {
    return (
      <div className="App">
        <div className="app-wrapper">
          <div className="weather-wrapper">
            <Titles
              name={this.state.name}
              description={this.state.description}
              icon={this.state.icon}
            />
            {this.state.error ? (
              <h2 className="error-message">{this.state.error}</h2>
            ) : (
              ""
            )}
            <Weather
              temp={this.state.temp}
              minTemperature={this.state.minTemperature}
              maxTemperature={this.state.maxTemperature}
            />
          </div>
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <Form getWeather={this.getWeather} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
