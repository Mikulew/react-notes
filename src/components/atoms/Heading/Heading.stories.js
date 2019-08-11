import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Normal', () => <Heading>Some text</Heading>)
  .add('Big', () => <Heading big>Some text</Heading>);
