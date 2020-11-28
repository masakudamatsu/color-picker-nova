import React from 'react';
import ColorTriangle from '../components/ColorTriangle';

function HomePage() {
  const [selectedColor, setSelectedColor] = React.useState(null);
  const handleHover = rgbCode => {
    setSelectedColor(rgbCode);
  };

  const handleUnhover = () => {
    setSelectedColor(null);
  };

  return (
    <div style={{width: '100%'}}>
      <ColorTriangle handleHover={handleHover} handleUnhover={handleUnhover} />
      <p style={{fontFamily: 'system-ui', fontSize: '50px'}}>{selectedColor}</p>
    </div>
  );
}

export default HomePage;
