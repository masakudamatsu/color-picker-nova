import ColorPicker from 'components/ColorPicker';
import SideMarginRegulator from 'styledComponents/SideMarginRegulator';

import useWindowWidth from 'utils/useWindowWidth';

function HomePage() {
  const windowWidth = useWindowWidth();
  let resolution;
  if (windowWidth < 440) {
    resolution = 3;
  } else if (windowWidth < 550) {
    resolution = 4;
  } else if (windowWidth < 660) {
    resolution = 5;
  } else if (windowWidth < 770) {
    resolution = 6;
  } else if (windowWidth < 880) {
    resolution = 7;
  } else if (windowWidth < 990) {
    resolution = 8;
  } else if (windowWidth < 1100) {
    resolution = 9;
  } else {
    resolution = 10;
  } // see https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app for why this style of case handling is best for performance
  return (
    <SideMarginRegulator>
      <ColorPicker resolution={resolution} />
    </SideMarginRegulator>
  );
}

export default HomePage;
