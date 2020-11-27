import React from "react";
import PropTypes from "prop-types";
import getContrastRatio from "../utils/getContrastRatio";

function Color({ red, green, blue, intensity }) {
  const fillColor = `rgb(${red}, ${green}, ${blue})`;

  const locationX = intensity;

  const contrastRatio = getContrastRatio(red, green, blue);
  const locationY = 100 - (contrastRatio - 1) * 5;

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
};

export default Color;
