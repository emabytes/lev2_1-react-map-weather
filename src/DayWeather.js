import weatherData from "./data"
import React, { Component } from 'react';

class DayWeather extends Component {
    state = {
    }
    render() {
        return (
            <article id="day">
                <h3>{this.props.day}</h3>
                <img src={this.props.src} alt="icon" />
                <h4>{this.props.highestTemp} 
                <span> {this.props.lowestTemp}</span>
                </h4>
            </article>
        );
    }
}

export default DayWeather;