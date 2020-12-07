import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

import Canvas from 'components/Canvas';
import Swatch from 'styledComponents/Swatch';

const ColorPicker = ({resolution = 3}) => {
  const [selectedColor, setSelectedColor] = useState('');
  return (
    <>
      <Canvas resolution={resolution} setSelectedColor={setSelectedColor} />
      <Swatch data-testid="swatch" rgb={selectedColor}>
        {selectedColor}
      </Swatch>
    </>
  );
};

ColorPicker.propTypes = {
  resolution: PropTypes.number,
};

export default ColorPicker;
