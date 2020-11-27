import React from "react";
import PropTypes from "prop-types";

import Colors from "./Colors";

function ColorTriangle({ handleHover, handleUnhover }) {
  let colorsSet = [];
  for (let x = 0; x <= 100; x++) {
    const newColors = (
      <Colors
        key={`colors${x}`}
        handleHover={handleHover}
        handleUnhover={handleUnhover}
        intensity={x}
      />
    );
    colorsSet.push(newColors);
  }
  return (
    <svg
      aria-labelledby="color-triangle-title color-triangle-desc"
      viewBox="0 0 100 100"
    >
      <title id="color-triangle-title">
        Tints and shades of red, drawn as a triangle
      </title>
      <desc id="color-triangle-desc">
        Each color is represented as a pixel square, lined up vertically by
        luminance and horizontally by color intensity (defined as the amount of
        pure hue mixed with grey)
      </desc>
      {colorsSet}
    </svg>
  );
}

ColorTriangle.propTypes = {
  handleHover: PropTypes.func,
  handleUnhover: PropTypes.func,
};

export default ColorTriangle;
