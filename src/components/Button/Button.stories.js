import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button>Some text</Button>)
  .add('Secondary', () => <Button secondary>Some text</Button>);
