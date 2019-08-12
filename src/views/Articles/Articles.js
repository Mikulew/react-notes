import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const articles = [
  {
    title: 'React.js developer #1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
    articleUrl: 'https://polskifrontend.pl',
    created: '1 day',
  },
  {
    title: 'React.js developer #2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
    articleUrl: 'https://polskifrontend.pl',
    created: '1 day',
  },
  {
    title: 'React.js developer #3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
    articleUrl: 'https://polskifrontend.pl',
    created: '1 day',
  },
  {
    title: 'React.js developer #4',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
    articleUrl: 'https://polskifrontend.pl',
    created: '1 day',
  },
  {
    title: 'React.js developer #5',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
    articleUrl: 'https://polskifrontend.pl',
    created: '1 day',
  },
];

const Articles = () => (
  <UserPageTemplate pageType="article">
    {articles.map(article => (
      <Card
        cardType="article"
        title={article.title}
        content={article.content}
        articleUrl={article.articleUrl}
        created={article.created}
        key={article.title}
      />
    ))}
  </UserPageTemplate>
);

export default Articles;
