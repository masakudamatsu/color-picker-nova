import React from "react";
import PropTypes from "prop-types";

function Color({
  red,
  green,
  blue,
  handleHover,
  handleUnhover,
  intensity,
  luminance,
}) {
  const fillColor = `rgb(${red}, ${green}, ${blue})`;

  const locationX = intensity;

  const locationY = 100 - luminance;

  const handleMouseEnter = () => {
    handleHover(fillColor);
  };

  return (
    <rect
      data-testid="color"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleUnhover}
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
  handleHover: PropTypes.func,
  handleUnhover: PropTypes.func,
  intensity: PropTypes.number,
  luminance: PropTypes.number,
};

export default Color;
