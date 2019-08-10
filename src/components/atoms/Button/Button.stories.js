import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Primary: 'hsl(46, 99%, 44%)',
      Secondary: 'hsl(242, 100%, 13%)',
      Tertiary: 'hsl(0, 100%, 25%)',
    };
    const defaultValue = 'hsl(46, 99%, 44%)';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);

    return <Button color={value}>Some text</Button>;
  })
  .add('Secondary', () => <Button secondary>Some text</Button>);
