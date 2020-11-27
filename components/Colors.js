import React from "react";
import PropTypes from "prop-types";

import Color from "./Color";
import getContrastRatio from "../utils/getContrastRatio";

function Colors({ intensity }) {
  const x = intensity;
  let colors = [];
  let prevContrastRatioInPercent;
  for (let y = 0; y <= 255; y++) {
    const red = Math.floor((255 * x + y * (100 - x)) / 100);
    const green = Math.floor((y * (100 - x)) / 100);
    const blue = Math.floor((y * (100 - x)) / 100);
    const contrastRatio = getContrastRatio(red, green, blue);
    const contrastRatioInPercent = Math.floor((contrastRatio - 1) * 5);

    if (contrastRatioInPercent !== prevContrastRatioInPercent) {
      const newColor = (
        <Color
          key={`color${x}-${y}`}
          red={red}
          green={green}
          blue={blue}
          intensity={x}
          luminance={contrastRatioInPercent}
        />
      );
      colors.push(newColor);
      prevContrastRatioInPercent = contrastRatioInPercent;
    }
  }
  return <g>{colors}</g>;
}

Colors.propTypes = {
  intensity: PropTypes.number,
};

export default Colors;
