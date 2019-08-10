import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ color }) => color || 'hsl(46, 99%, 44%)'};
  color: #ffffff;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 2%, 50%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
