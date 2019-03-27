import React from "react";
import PropTypes from "prop-types";
import SVG from "./svg";

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

      <button>
        {" "}
        <SVG />
      </button>
    </form>
  );
};

Form.propTypes = {
  getWeather: PropTypes.func
};

export default Form;
