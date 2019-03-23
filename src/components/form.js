import React from "react";
import PropTypes from "prop-types";

const Form = props => {
  return (
    <form onSubmit={props.getWeather} className="form-wrapper">
      <label>
        Zip Code:
        <input
          type="text"
          name="zipcode"
          placeholder="zipcode.."
          className="zip-code"
        />
      </label>
      <button className="btn">Update</button>
    </form>
  );
};

Form.propTypes = {
  getWeather: PropTypes.func
};

export default Form;
