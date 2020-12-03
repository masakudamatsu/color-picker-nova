import React from 'react';
import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import getContrastRatio from '../utils/getContrastRatio';
import getMousePosition from '../utils/getMousePosition';
import mixHueWithGray from '../utils/mixHueWithGray';

// const FlexBox = styled.div`
//   align-items: flex-start;
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `;

const Swatch = styled.div`
  align-items: center;
  background: ${({rgb}) => rgb};
  display: flex;
  justify-content: center;
  max-width: 100px;
  width: 100px;
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const ColorTriangle = () => {
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
      canvasContext.fillRect(x * 10, minY * 10, 10, 10);

      let prevY;
      for (var grayValue = 0; grayValue < 255; grayValue++) {
        const rgb = mixHueWithGray(pureHue, grayValue, shareOfHue);
        const contrastRatio = getContrastRatio(rgb.r, rgb.g, rgb.b);
        const y = Math.round(100 - (contrastRatio - 1) * 5);

        if (y !== prevY && y > minY) {
          canvasContext.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
          canvasContext.fillRect(x * 10, y * 10, 10, 10);
          prevY = y;
        }
      }
    }
  }, [canvasContext]);

  // handleClick
  const [selectedColor, setSelectedColor] = useState('');
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

  return (
    <>
      <canvas
        data-testid="color-triangle"
        ref={canvas}
        width="1010px"
        height="1010px"
        onClick={handleClick}
        style={{width: '1010px'}}
      />
      <Swatch data-testid="swatch" rgb={selectedColor}>
        {selectedColor}
      </Swatch>
    </>
  );
};

export default ColorTriangle;
