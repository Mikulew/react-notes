import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
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

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
