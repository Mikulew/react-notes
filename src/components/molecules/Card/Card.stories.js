import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module)
  .add('Note', () => <Card />)
  .add('Twitter', () => <Card pageContext="twitters" />)
  .add('Article', () => <Card pageContext="articles" />);
