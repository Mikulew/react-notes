import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/icons/light-bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import plusIcon from 'assets/icons/plus.svg';
import penIcon from 'assets/icons/edit.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.note};
`;

storiesOf('ButtonIcon', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('Bulb icon', () => <ButtonIcon icon={bulbIcon} />)
  .add('Bulb icon active', () => <ButtonIcon icon={bulbIcon} active />)
  .add('Logout icon', () => <ButtonIcon icon={logoutIcon} />)
  .add('Logout icon active', () => <ButtonIcon icon={logoutIcon} active />)
  .add('Plus icon', () => <ButtonIcon icon={plusIcon} />)
  .add('Plus icon active', () => <ButtonIcon icon={plusIcon} active />)
  .add('Pen icon', () => <ButtonIcon icon={penIcon} />)
  .add('Pen icon active', () => <ButtonIcon icon={penIcon} active />);
