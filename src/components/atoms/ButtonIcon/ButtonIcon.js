import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background-color: ${({ active, theme }) => (active ? theme.white : 'transparent')};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  border: none;
  cursor: pointer;

  &.active {
    background-color: ${({ theme }) => theme.white};
  }
`;

export default ButtonIcon;
