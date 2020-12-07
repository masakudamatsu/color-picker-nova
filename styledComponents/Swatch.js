import styled from 'styled-components';
import PropTypes from 'prop-types';

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

Swatch.propTypes = {
  rgb: PropTypes.string,
};

export default Swatch;
