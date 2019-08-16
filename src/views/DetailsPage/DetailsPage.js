import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';

const testArticle = {
  id: 1,
  title: 'Awesome title',
  content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, pariatur?',
  twitterName: 'shakira',
  articleUrl: 'https://google.com',
  created: '1 days',
};

const DetailsPage = () => (
  <DetailsTemplate
    title={testArticle.title}
    created={testArticle.created}
    content={testArticle.content}
    articleUrl={testArticle.articleUrl}
    twitterName={testArticle.twitterName}
  />
);

export default DetailsPage;
