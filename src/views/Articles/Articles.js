import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const articles = [
  {
    id: 1,
    title: 'React.js developer #1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
    articleUrl: 'https://polskifrontend.pl',
    created: '1 day',
  },
  {
    id: 2,
    title: 'React.js developer #2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
    articleUrl: 'https://polskifrontend.pl',
    created: '1 day',
  },
  {
    id: 3,
    title: 'React.js developer #3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
    articleUrl: 'https://polskifrontend.pl',
    created: '1 day',
  },
  {
    id: 4,
    title: 'React.js developer #4',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
    articleUrl: 'https://polskifrontend.pl',
    created: '1 day',
  },
  {
    id: 5,
    title: 'React.js developer #5',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
    articleUrl: 'https://polskifrontend.pl',
    created: '1 day',
  },
];

const Articles = () => (
  <GridTemplate pageType="articles">
    {articles.map(article => (
      <Card
        cardType="articles"
        id={article.id}
        title={article.title}
        content={article.content}
        articleUrl={article.articleUrl}
        created={article.created}
        key={article.id}
      />
    ))}
  </GridTemplate>
);

export default Articles;
