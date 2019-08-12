import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
  {
    title: 'React router',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
    created: '3 days',
    twitterName: 'react_devv',
  },
  {
    title: 'React components',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
    created: '3 days',
    twitterName: 'react_devv',
  },
  {
    title: 'React hooks',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
    created: '3 days',
    twitterName: 'react_devv',
  },
  {
    title: 'React tests',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
    created: '3 days',
    twitterName: 'react_devv',
  },
  {
    title: 'React news',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
    created: '3 days',
    twitterName: 'react_devv',
  },
];

const Twitters = () => (
  <UserPageTemplate pageType="twitter">
    {twitters.map(twitter => (
      <Card
        cardType="twitter"
        title={twitter.title}
        content={twitter.content}
        twitterName={twitter.twitterName}
        created={twitter.created}
        key={twitter.title}
      />
    ))}
  </UserPageTemplate>
);

export default Twitters;
