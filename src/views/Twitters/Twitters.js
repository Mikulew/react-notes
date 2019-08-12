import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
  {
    id: 1,
    title: 'React router',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
    created: '3 days',
    twitterName: 'react_devv',
  },
  {
    id: 2,
    title: 'React components',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
    created: '3 days',
    twitterName: 'react_devv',
  },
  {
    id: 3,
    title: 'React hooks',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
    created: '3 days',
    twitterName: 'react_devv',
  },
  {
    id: 4,
    title: 'React tests',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
    created: '3 days',
    twitterName: 'react_devv',
  },
  {
    id: 5,
    title: 'React news',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
    created: '3 days',
    twitterName: 'react_devv',
  },
];

const Twitters = () => (
  <GridTemplate pageType="twitters">
    {twitters.map(twitter => (
      <Card
        cardType="twitters"
        id={twitter.id}
        title={twitter.title}
        content={twitter.content}
        twitterName={twitter.twitterName}
        created={twitter.created}
        key={twitter.id}
      />
    ))}
  </GridTemplate>
);

export default Twitters;
