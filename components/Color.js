import React from "react";
import PropTypes from "prop-types";

function Color({ red, green, blue, intensity, luminance }) {
  const fillColor = `rgb(${red}, ${green}, ${blue})`;

  const locationX = intensity;

  const locationY = 100 - luminance;

  return (
    <rect
      data-testid="color"
      x={locationX.toFixed()}
      y={locationY.toFixed()}
      width="1"
      height="1"
      style={{ fill: fillColor }}
    />
  );
}

Color.propTypes = {
  red: PropTypes.number,
  green: PropTypes.number,
  blue: PropTypes.number,
  intensity: PropTypes.number,
  luminance: PropTypes.number,
};

export default Color;
