import React from "react";
import PropTypes from "prop-types";

const Titles = props => {
  return (
    <div className="title-wrapper">
      <div className="weather-state">
        {props.name}
        <img
          src={`http://openweathermap.org/img/w/${props.icon}.png`}
          className="weather-icon"
          alt="weather icon"
        />
      </div>
      <div className="weather-description">{props.description}</div>
    </div>
  );
};

Titles.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string
};

export default Titles;
