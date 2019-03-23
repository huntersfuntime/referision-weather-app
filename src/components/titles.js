import React from "react";
import PropTypes from "prop-types";

const Titles = props => {
  return (
    <div className="title-wrapper">
      <div className="state-name">
        {props.name}
        <img
          src={`http://openweathermap.org/img/w/${props.icon}.png`}
          alt="weather icon"
        />
      </div>
      <p>{props.description}</p>
    </div>
  );
};

Titles.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string
};

export default Titles;
