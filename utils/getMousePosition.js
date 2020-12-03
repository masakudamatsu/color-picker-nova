// https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/

const getMousePosition = (domElement, event) => {
  const rect = domElement.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};

export default getMousePosition;
