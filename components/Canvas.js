import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

import getContrastRatio from '../utils/getContrastRatio';
import getMousePosition from '../utils/getMousePosition';
import mixHueWithGray from '../utils/mixHueWithGray';

const Canvas = ({resolution = 3, setSelectedColor}) => {
  // set up canvas after the initial rendering
  const canvas = useRef();
  const [canvasContext, setCanvasContext] = useState();
  useEffect(() => {
    const context = canvas.current.getContext('2d');
    setCanvasContext(context);
  }, []);

  // Draw the color triangle
  useEffect(() => {
    if (!canvasContext) {
      return;
    }
    draw(canvasContext, resolution);
  });

  // handleClick
  const handleClick = event => {
    const clickedPosition = getMousePosition(canvas.current, event);
    const data = canvasContext.getImageData(
      clickedPosition.x,
      clickedPosition.y,
      1,
      1,
    ).data;
    const rgb = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    console.log(`Clicked color is ${rgb}`);
    setSelectedColor(rgb);
  };

  const canvasWidthPx = `${101 * resolution}px`;
  return (
    <canvas
      data-testid="color-triangle"
      ref={canvas}
      width={canvasWidthPx}
      height={canvasWidthPx}
      onClick={handleClick}
    />
  );
};

function draw(canvasContext, resolution) {
  const pureHue = {
    r: 255,
    g: 0,
    b: 0,
  };
  for (var x = 0; x <= 100; x++) {
    const shareOfHue = x;

    const brightestRgb = mixHueWithGray(pureHue, 255, shareOfHue);
    canvasContext.fillStyle = `rgb(${brightestRgb.r}, ${brightestRgb.g}, ${brightestRgb.b})`;

    const brightestContrastRatio = getContrastRatio(
      brightestRgb.r,
      brightestRgb.g,
      brightestRgb.b,
    );
    const minY = Math.round(100 - (brightestContrastRatio - 1) * 5);
    canvasContext.fillRect(
      x * resolution,
      minY * resolution,
      resolution,
      resolution,
    );

    let prevY;
    for (var grayValue = 0; grayValue < 255; grayValue++) {
      const rgb = mixHueWithGray(pureHue, grayValue, shareOfHue);
      const contrastRatio = getContrastRatio(rgb.r, rgb.g, rgb.b);
      const y = Math.round(100 - (contrastRatio - 1) * 5);

      if (y !== prevY && y > minY) {
        canvasContext.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        canvasContext.fillRect(
          x * resolution,
          y * resolution,
          resolution,
          resolution,
        );
        prevY = y;
      }
    }
  }
}

Canvas.propTypes = {
  resolution: PropTypes.number,
  setSelectedColor: PropTypes.func,
};

export default Canvas;
