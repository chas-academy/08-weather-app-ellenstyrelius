import styled from 'styled-components';

import colors from './colors';

const Button = styled.button`
  background: ${colors.offWhite};
  color: ${colors.offBlack};
  opacity: 0.9;
  padding: 4px 8px;
  border: 2px solid ${colors.offBlack};
  border-radius: 8px;
  box-shadow: 0px 1px 2px ${colors.gray3};
  outline: none;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: 0.2s;
  }
`

export default Button;