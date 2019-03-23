import React from "react";
import PropTypes from "prop-types";

const Weather = props => {
  return (
    <div className="detail-wrapper">
      <div className="temperature">{props.temp} &#730;</div>
      <div className="temp-high-and-low">
        <div className="left-column">{props.minTemperature} &#730;</div>
        <div className="right-column">{props.maxTemperature} &#730;</div>
      </div>
    </div>
  );
};

Weather.propTypes = {
  temp: PropTypes.number,
  minTemperature: PropTypes.number,
  maxTemperature: PropTypes.number
};

export default Weather;
